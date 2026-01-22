/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import ChatLead from "../../models/ChatLead";
import { sendChatLeadEmail } from "../../lib/sendChatLeadEmail";

export const runtime = "nodejs";

const SERVICES = [
  "Bulk / Volume Hiring",
  "RPO (End-to-End Hiring)",
  "Onboarding Support",
] as const;

function isValidEmail(v: string) {
  return /^\S+@\S+\.\S+$/.test(v);
}
function cleanPhone(v: string) {
  return String(v || "").replace(/\D/g, "").trim();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = cleanPhone(body?.phone);
    const service = String(body?.service || "").trim();

    if (name.length < 2)
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    if (!isValidEmail(email))
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    if (phone.length !== 10)
      return NextResponse.json({ error: "Valid 10-digit phone is required" }, { status: 400 });
    if (!SERVICES.includes(service as any))
      return NextResponse.json({ error: "Valid service is required" }, { status: 400 });

    await connectDB();

    const lead = await ChatLead.create({
      name,
      email,
      phone,
      service,
      source: "chatbot",
    });

    await sendChatLeadEmail({ name, email, phone, service });

    return NextResponse.json({ success: true, leadId: String(lead._id) });
  } catch (err) {
    console.error("ChatLead API error:", err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
