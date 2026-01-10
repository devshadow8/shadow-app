import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../lib/sendEmail';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, course, trainer, message } = body;
    
    if (!name || !email || !phone || !course || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number. Must be 10 digits' },
        { status: 400 }
      );
    }

    // Validate course selection
    const validCourses = ['Shadow Rise', 'Shadow Prime', 'Shadow Forever'];
    if (!validCourses.includes(course)) {
      return NextResponse.json(
        { error: 'Invalid course selection' },
        { status: 400 }
      );
    }

    // Send email
    await sendEmail({
      name,
      email,
      phone,
      company: body.company || '',
      course,
      trainer: trainer || 'Oves Shaikh',
      message,
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.',
        success: false
      },
      { status: 500 }
    );
  }
}