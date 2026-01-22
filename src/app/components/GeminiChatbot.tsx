// src/app/components/GeminiChatbot.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

type Lead = {
  name: string;
  phone: string;
  email: string;
  service: string;
};

type Stage = "ASK_NAME" | "ASK_PHONE" | "ASK_EMAIL" | "ASK_SERVICE" | "CHATTING";

const SERVICES = [
  "Bulk / Volume Hiring",
  "RPO (End-to-End Hiring)",
  "Onboarding Support",
] as const;

function isValidEmail(v: string) {
  return /^\S+@\S+\.\S+$/.test(v.trim());
}
function cleanPhone(v: string) {
  return v.replace(/\D/g, "");
}
function isValidPhone(v: string) {
  const p = cleanPhone(v);
  // India 10 digits; starts 6-9 (optional rule)
  return /^[6-9]\d{9}$/.test(p);
}

export default function GeminiChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [stage, setStage] = useState<Stage>("ASK_NAME");
  const [lead, setLead] = useState<Lead>({
    name: "",
    phone: "",
    email: "",
    service: "",
  });
  const [leadId, setLeadId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const pushAssistant = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: text, timestamp: new Date().toISOString() },
    ]);
  };

  const pushUser = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", content: text, timestamp: new Date().toISOString() },
    ]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // On open (first time), greet + ask name
  useEffect(() => {
    if (!isOpen) return;

    // If it's already started, don't re-add prompts
    if (messages.length > 0) return;

    pushAssistant("Hi! Welcome to Shadow Recruiter 👋");
    pushAssistant("Before we start, what’s your name?");
    setStage("ASK_NAME");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const saveLead = async (payload: Lead) => {
    const res = await fetch("/api/chat-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new Error(data?.error || "Failed to save details");
    return data as { success: boolean; leadId?: string };
  };

  const handleOnboardingMessage = async (text: string) => {
    // user message already pushed
    const trimmed = text.trim();

    if (stage === "ASK_NAME") {
      if (trimmed.length < 2) {
        pushAssistant("Please enter your full name (minimum 2 characters).");
        return;
      }
      setLead((p) => ({ ...p, name: trimmed }));
      pushAssistant("Thanks! Now please share your 10-digit contact number.");
      setStage("ASK_PHONE");
      return;
    }

    if (stage === "ASK_PHONE") {
      if (!isValidPhone(trimmed)) {
        pushAssistant("Please enter a valid 10-digit Indian mobile number.");
        return;
      }
      setLead((p) => ({ ...p, phone: cleanPhone(trimmed) }));
      pushAssistant("Great. Now please share your email address.");
      setStage("ASK_EMAIL");
      return;
    }

    if (stage === "ASK_EMAIL") {
      if (!isValidEmail(trimmed)) {
        pushAssistant("Please enter a valid email address (example: name@gmail.com).");
        return;
      }
      setLead((p) => ({ ...p, email: trimmed }));
      pushAssistant("Which service are you interested in?");
      pushAssistant("1) Bulk / Volume Hiring\n2) RPO (End-to-End Hiring)\n3) Onboarding Support");
      setStage("ASK_SERVICE");
      return;
    }

    if (stage === "ASK_SERVICE") {
      // allow "1/2/3" or exact text
      const normalized = trimmed.toLowerCase();
      let selected = "";

      if (normalized === "1" || normalized.includes("bulk")) selected = SERVICES[0];
      else if (normalized === "2" || normalized.includes("rpo")) selected = SERVICES[1];
      else if (normalized === "3" || normalized.includes("onboarding")) selected = SERVICES[2];
      else {
        // try direct match
        const found = SERVICES.find((s) => s.toLowerCase() === normalized);
        if (found) selected = found;
      }

      if (!selected) {
        pushAssistant("Please choose 1, 2, or 3 (or type the service name).");
        return;
      }

      const payload: Lead = {
        ...lead,
        // lead state may be slightly stale due to setState; build from current + trimmed
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        service: selected,
      };

      // In case name/phone/email were set in previous steps but not yet in state sync:
      // we can safely overwrite with latest from messages flow if needed (optional)

      pushAssistant("Perfect. Saving your details… ✅");

      try {
        setIsLoading(true);
        const saved = await saveLead(payload);
        setLead((p) => ({ ...p, service: selected }));
        setLeadId(saved.leadId || null);

        pushAssistant("Done! Now you can ask me anything about Shadow Recruiter.");
        setStage("CHATTING");
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to save details";
        pushAssistant(`Sorry, I couldn’t save your details. ${msg}`);
        pushAssistant("Please try again. Which service are you interested in? (1/2/3)");
      } finally {
        setIsLoading(false);
      }
      return;
    }
  };

  const sendGeminiMessage = async (text: string) => {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: text,
        conversationHistory: messages.slice(-6),
        leadId, // optional tracking
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errText =
        data?.error ||
        `Request failed (${response.status}). Check server logs / API key / billing.`;
      throw new Error(errText);
    }

    if (data?.success) return data.message as string;
    throw new Error(data?.error || "Unknown error");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput("");

    pushUser(userText);

    try {
      // onboarding flow
      if (stage !== "CHATTING") {
        await handleOnboardingMessage(userText);
        return;
      }

      // real chatbot
      setIsLoading(true);
      const reply = await sendGeminiMessage(userText);
      pushAssistant(reply);
    } catch (err) {
      const errorText =
        err instanceof Error ? `Error: ${err.message}` : "Error: Something went wrong";
      pushAssistant(errorText);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setInput("");
    setIsLoading(false);
    setStage("ASK_NAME");
    setLead({ name: "", phone: "", email: "", service: "" });
    setLeadId(null);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="fixed bottom-4 right-4 h-12 sm:h-14 px-4 sm:px-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 z-[9999]"
        aria-label="Talk to Shadow AI"
      >
        {isOpen ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
        <span className="hidden sm:inline text-sm font-bold">Talk to Shadow AI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 sm:w-96 h-[480px] sm:h-[430px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col z-[9999] border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Shadow Chatbot</h3>
                <p className="text-white/80 text-[10px]">Powered by Google</p>
              </div>
            </div>

            <button
              onClick={clearChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Clear chat"
              title="Clear chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  stage === "ASK_NAME"
                    ? "Type your name..."
                    : stage === "ASK_PHONE"
                    ? "Type your contact number..."
                    : stage === "ASK_EMAIL"
                    ? "Type your email..."
                    : stage === "ASK_SERVICE"
                    ? "Type 1 / 2 / 3..."
                    : "Type your message..."
                }
                disabled={isLoading}
                className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>

            {/* Quick buttons for service stage */}
            {stage === "ASK_SERVICE" && (
              <div className="mt-2 grid grid-cols-1 gap-2">
                {SERVICES.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      const text = String(i + 1);
                      setInput("");
                      pushUser(text);
                      handleOnboardingMessage(text);
                    }}
                    className="text-left text-xs rounded-xl border border-gray-200 dark:border-gray-700 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {i + 1}) {s}
                  </button>
                ))}
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
