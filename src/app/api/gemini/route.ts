import { NextResponse } from "next/server";

export const runtime = "nodejs";

// ⏱ Simple rate limiting (per instance)
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 4000;

// 🌐 Fetch website content safely (Shadow Recruiters)
async function fetchWebsiteContent() {
  try {
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

    const responses = await Promise.allSettled(urls.map((url) => fetch(url)));

    const texts = await Promise.all(
      responses.map(async (res, i) => {
        if (res.status === "fulfilled" && res.value.ok) {
          const html = await res.value.text();
          const cleanText = html
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
            .replace(/<[^>]*>?/gm, "")
            .replace(/\s+/g, " ")
            .trim();

          return `\n---\nPage: ${urls[i]}\n${cleanText}`;
        }
        return "";
      })
    );

    return texts.join("\n").slice(0, 12000);
  } catch (error) {
    console.error("Website fetch error:", error);
    return "";
  }
}

async function safeReadJson(req: Request) {
  const contentType = req.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    const raw = await req.text();
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

export async function POST(req: Request) {
  try {
    // ⏳ Rate limiting
    const now = Date.now();
    if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
      const wait = Math.ceil((MIN_REQUEST_INTERVAL - (now - lastRequestTime)) / 1000);
      return NextResponse.json(
        { success: false, error: `⏳ Please wait ${wait}s before sending another message.` },
        { status: 429 }
      );
    }
    lastRequestTime = now;

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ success: false, error: "Gemini API key missing" }, { status: 500 });
    }

    // ✅ Safe request parse
    const parsed = await safeReadJson(req);
    if (!parsed.ok) {
      console.error("Bad request body:", parsed);
      return NextResponse.json({ success: false, error: parsed.error }, { status: 400 });
    }

    const { message, conversationHistory } = parsed.json;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ success: false, error: "Message is required" }, { status: 400 });
    }

    console.log("Fetching Shadow Recruiters website content...");
    const websiteData = await fetchWebsiteContent();

    const shadowData = `
Shadow Recruiters is a premium Training & Development Institute based in Pune.
Focus areas: communication, confidence, personality development, interview skills, corporate readiness.
Vision: bridge the gap between academic education and industry requirements.

Courses:
1) Shadow Rise (5 Days) ₹2,000
Objective: Build basic communication confidence and interview readiness.
Highlights: communication basics, interview preparation, confidence & body language.
Deliverables: interview readiness report, participation certificate.

2) Shadow Prime (30–45 Days) ₹7,000
Objective: Communication foundation, voice & accent development, personality enhancement.
Highlights: interview mastery, GD & presentation, career guidance, voice & accent training.
Deliverables: resume + cover letter, assessment sheet, mock interview feedback, lifetime membership card.

3) Shadow Forever (45+ Days) ₹11,000
Objective: Complete transformation with ongoing support and advanced training.
Highlights: spoken English + grammar, personality & communication mastery, corporate readiness, ongoing development, advanced interview techniques.
Deliverables: premium certificate, lifetime membership card, resume + cover letter, trainer feedback report, monthly career counseling.
`;

    const systemPrompt = `
You are "ShadowGuide AI", the official AI assistant for Shadow Recruiters (Training & Development Institute, Pune).

Rules:
1) If user asks about Shadow Recruiters (courses, fees, duration, enrollment, policies, contact) → answer ONLY using the data below.
2) If user asks something unrelated → answer normally.
3) Do not invent addresses, phone numbers, timings, or placement guarantees. If missing, say it’s not available and suggest contacting the team.
4) Keep answers short, clear, friendly.

Shadow Recruiters Data:
${shadowData}

Website Data:
${websiteData}
`;

    let history = "";
    if (Array.isArray(conversationHistory)) {
      history = conversationHistory
        .slice(-6)
        .map((msg: { role: string; content: string }) => {
          const role = msg.role === "user" ? "User" : "Assistant";
          return `${role}: ${msg.content}`;
        })
        .join("\n");
    }

    const fullPrompt = `
${systemPrompt}

Conversation History:
${history}

User: ${message}

Assistant:
`;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

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

    // ✅ Safe Gemini parsing (avoid "<!DOCTYPE")
    const geminiText = await geminiRes.text();

    if (!geminiRes.ok) {
      console.error("Gemini HTTP error:", geminiRes.status, geminiText.slice(0, 500));
      return NextResponse.json({ success: false, error: "Gemini API request failed" }, { status: 500 });
    }

    let data: any;
    try {
      data = JSON.parse(geminiText);
    } catch {
      console.error("Gemini returned non-JSON:", geminiText.slice(0, 500));
      return NextResponse.json({ success: false, error: "Gemini returned invalid response" }, { status: 500 });
    }

    const output =
      data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("") ?? "";

    return NextResponse.json({
      success: true,
      message: output.trim() || "Please rephrase your question or submit an inquiry on the Contact page.",
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("ShadowGuide API error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "OK",
    message: "ShadowGuide AI route is working",
    time: new Date().toISOString(),
  });
}
