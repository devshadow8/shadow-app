
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";
import { sendEmail } from "../../lib/sendEmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, course, trainer, message } = body;

    if (!name || !email || !phone || !course || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const cleanPhone = String(phone).replace(/\s/g, "");
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json({ error: "Invalid phone number. Must be 10 digits" }, { status: 400 });
    }

    const validCourses = ["Shadow Rise", "Shadow Prime", "Shadow Forever"];
    if (!validCourses.includes(course)) {
      return NextResponse.json({ error: "Invalid course selection" }, { status: 400 });
    }

    // 1) Store in DB
    await connectDB();
    const saved = await Contact.create({
      name,
      email,
      phone: cleanPhone,
      company: company || "",
      course,
      trainer: trainer || "Oves Shaikh",
      message,
      status: "new",
    });

    // 2) Send email to HR + auto reply to user
    await sendEmail({
      name,
      email,
      phone: cleanPhone,
      company: company || "",
      course,
      trainer: trainer || "Oves Shaikh",
      message,
    });

    return NextResponse.json(
      { success: true, message: "Submitted successfully", id: saved._id },
      { status: 200 }
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Contact API error:", {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      stack: error?.stack,
    });

    return NextResponse.json(
      { success: false, error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}
