/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/gemini/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// ⏱ Simple rate limiting (per instance)
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2500;

// ✅ Cache models for 30 min
let cachedModelName = "";
let cachedModelAt = 0;
const MODEL_CACHE_TTL_MS = 30 * 60 * 1000;

// ✅ Website cache (optional)
let cachedWebsiteText = "";
let cachedWebsiteAt = 0;
const WEBSITE_CACHE_TTL_MS = 60 * 60 * 1000;

function stripHtml(html: string) {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>?/gm, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchWebsiteContent(): Promise<string> {
  if (cachedWebsiteText && Date.now() - cachedWebsiteAt < WEBSITE_CACHE_TTL_MS) {
    return cachedWebsiteText;
  }

  const urls = [
    "https://shadowrecruiter.com/",
    "https://shadowrecruiter.com/about",
    "https://shadowrecruiter.com/courses",
    "https://shadowrecruiter.com/services",
    "https://shadowrecruiter.com/contact",
    "https://shadowrecruiter.com/privacy-policy",
    "https://shadowrecruiter.com/terms-and-conditions",
    "https://shadowrecruiter.com/refund-policy",
  ];

  const fetchWithTimeout = async (url: string, timeoutMs = 8000) => {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, {
        signal: controller.signal,
        headers: {
          "User-Agent": "ShadowGuideAI/1.0 (+https://shadowrecruiter.com)",
          Accept: "text/html,*/*",
        },
        cache: "no-store",
      });
    } finally {
      clearTimeout(t);
    }
  };

  try {
    const results = await Promise.allSettled(urls.map((u) => fetchWithTimeout(u)));

    const pages = await Promise.all(
      results.map(async (r, i) => {
        if (r.status === "fulfilled" && r.value.ok) {
          const html = await r.value.text();
          const text = stripHtml(html);
          return `\n---\nPage: ${urls[i]}\n${text}`;
        }
        return "";
      })
    );

    const combined = pages.join("\n").slice(0, 8000);
    cachedWebsiteText = combined;
    cachedWebsiteAt = Date.now();
    return combined;
  } catch (err) {
    console.error("Website fetch error:", err);
    return "";
  }
}

async function pickSupportedModel(apiKey: string) {
  if (cachedModelName && Date.now() - cachedModelAt < MODEL_CACHE_TTL_MS) return cachedModelName;

  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url);
  const text = await res.text();

  if (!res.ok) throw new Error(`ListModels failed ${res.status}: ${text.slice(0, 400)}`);

  const data = JSON.parse(text);
  const models: any[] = data.models || [];

  const supported = models.filter(
    (m) => Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes("generateContent")
  );

  const preferred = [
    "models/gemini-2.0-flash",
    "models/gemini-2.0-pro",
    "models/gemini-1.5-flash",
    "models/gemini-1.5-pro",
    "models/gemini-1.0-pro",
  ];

  const chosen = preferred.find((p) => supported.some((m) => m.name === p)) || supported[0]?.name;

  if (!chosen) throw new Error("No model found that supports generateContent");

  cachedModelName = chosen;
  cachedModelAt = Date.now();
  return chosen;
}

async function safeReadJson(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const raw = await req.text().catch(() => "");
    return {
      ok: false as const,
      error: `Request must be JSON. Received content-type: ${contentType || "unknown"}`,
      raw: raw.slice(0, 200),
    };
  }
  try {
    const json = await req.json();
    return { ok: true as const, json };
  } catch {
    const raw = await req.text().catch(() => "");
    return { ok: false as const, error: "Invalid JSON body", raw: raw.slice(0, 200) };
  }
}

function buildPrompt({
  message,
  history,
  websiteData,
}: {
  message: string;
  history: string;
  websiteData: string;
}) {
  // ✅ Added: Agency domains (BPO/KPO/Chat Process/Calling/IT Development)
  const agencyServices = `
Agency Services (Shadow Recruiters):
- BPO Hiring & Training (Domestic + International)
- KPO Hiring & Training
- Chat Process / Chat Support Hiring & Training
- US/UK Process Training (accent, communication, customer handling)
- Airlines Calling / Travel Process Support Training
- Call Center / Calling Process Hiring & Training
- IT Development Services (websites, apps, software support)

Note: Do not promise placements or guaranteed jobs. If user asks for hiring/contact details not present, ask them to contact the team via official website contact page.
`.trim();

  const shadowData = `
Shadow Recruiters is a premium Training & Development Institute based in Pune.
Focus areas: communication, confidence, personality development, interview skills, corporate readiness.

Contact:
Phone: +91 8483852326
Email:hr@shadowrecruiter.com
Address: Office No. 2S1-06, 1st Floor, Konark Indrayu Mall, Opp. Satyanand Hospital, Kondhwa, Pune
Courses:
1) Shadow Rise (5 Days) ₹2,000
- Communication basics, interview preparation, confidence & body language.
- Deliverables: interview readiness report, participation certificate.

2) Shadow Prime (30–45 Days) ₹7,000
- Interview mastery, GD & presentation, career guidance, voice & accent training.
- Deliverables: resume + cover letter, assessment sheet, mock interview feedback, lifetime membership card.

3) Shadow Forever (45+ Days) ₹11,000
- Spoken English + grammar, personality & communication mastery, corporate readiness, advanced interview techniques.
- Deliverables: premium certificate, lifetime membership card, resume + cover letter, trainer feedback report, monthly career counseling.
`.trim();

  const systemPrompt = `
You are "ShadowGuide AI", the official AI assistant for Shadow Recruiters (Pune).

Rules:
1) If user asks about Shadow Recruiters (courses, fees, duration, enrollment, policies, services) → answer ONLY using the data below.
2) If user asks something unrelated → answer normally.
3) Do not invent addresses, phone numbers, timings, or placement guarantees. If missing, say it’s not available and suggest contacting the team.
4) Keep answers short, clear, friendly.


Shadow Recruiters Data:
${shadowData}

Agency / Services Data:
${agencyServices}

Website Data (may be partial):
${websiteData}
`.trim();

  return `
${systemPrompt}

Conversation History:
${history}

User: ${message}

Assistant:
`.trim();
}

function extractGeminiText(data: any) {
  const parts = data?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return "";
  return parts.map((p: any) => (typeof p?.text === "string" ? p.text : "")).join("").trim();
}

export async function POST(req: Request) {
  try {
    const now = Date.now();
    if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
      const wait = Math.ceil((MIN_REQUEST_INTERVAL - (now - lastRequestTime)) / 1000);
      return NextResponse.json(
        { success: false, error: `⏳ Please wait ${wait}s before sending another message.` },
        { status: 429 }
      );
    }
    lastRequestTime = now;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: "GEMINI_API_KEY missing in env" }, { status: 500 });
    }

    const parsed = await safeReadJson(req);
    if (!parsed.ok) {
      console.error("Bad request body:", parsed);
      return NextResponse.json({ success: false, error: parsed.error }, { status: 400 });
    }

    const { message, conversationHistory } = parsed.json as {
      message?: string;
      conversationHistory?: Array<{ role: string; content: string }>;
    };

    if (!message || typeof message !== "string") {
      return NextResponse.json({ success: false, error: "Message is required" }, { status: 400 });
    }

    const history =
      Array.isArray(conversationHistory)
        ? conversationHistory
            .slice(-6)
            .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
            .join("\n")
        : "";

    const websiteData = await fetchWebsiteContent();
    const fullPrompt = buildPrompt({ message, history, websiteData });

    const modelName = await pickSupportedModel(apiKey);

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${encodeURIComponent(
      apiKey
    )}`;

    const geminiRes = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: {
          temperature: 0.6,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 900,
        },
      }),
    });

    const geminiText = await geminiRes.text();

    if (!geminiRes.ok) {
      console.error("Gemini HTTP error:", geminiRes.status, geminiText.slice(0, 2000));
      return NextResponse.json(
        { success: false, error: `Gemini error ${geminiRes.status}: ${geminiText.slice(0, 900)}` },
        { status: geminiRes.status }
      );
    }

    let data: any;
    try {
      data = JSON.parse(geminiText);
    } catch {
      console.error("Gemini returned non-JSON:", geminiText.slice(0, 1000));
      return NextResponse.json({ success: false, error: "Gemini returned invalid response" }, { status: 500 });
    }

    const output = extractGeminiText(data);

    return NextResponse.json({
      success: true,
      message: output || "Please rephrase your question or submit an inquiry on the Contact page.",
      timestamp: new Date().toISOString(),
      model: modelName,
    });
  } catch (error: unknown) {
    console.error("ShadowGuide API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: "OK",
    message: "ShadowGuide AI route is working",
    time: new Date().toISOString(),
    modelCache: cachedModelName || null,
  });
}
