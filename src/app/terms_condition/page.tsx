import React from 'react';
import { FileText, Users, CreditCard, Calendar, Shield, BookOpen, Camera, TrendingUp, AlertTriangle, Globe, Scale, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsAndConditions() {
  const sections = [
    {
      id: 1,
      title: "Services",
      icon: BookOpen,
      text: "We provide training and development programs including communication skills, personality development, confidence building, interview preparation, and corporate readiness. Specific program details (duration, modules, fees, schedules) may vary by batch and will be shared at the time of enrollment."
    },
    {
      id: 2,
      title: "Enrollment and Eligibility",
      icon: Users,
      content: [
        "Enrollment is confirmed after completion of registration and payment (full or partial as applicable).",
        "You agree to provide accurate information during inquiry/registration.",
        "The Institute may refuse or cancel enrollment in cases of misconduct, policy violations, or incorrect information."
      ]
    },
    {
      id: 3,
      title: "Fees, Payments, and Taxes",
      icon: CreditCard,
      content: [
        "Fees are as mentioned on our website, brochure, or official communication.",
        "Payments may be processed via third-party payment gateways; gateway charges (if any) may apply.",
        "Fees may be inclusive/exclusive of applicable taxes as communicated."
      ]
    },
    {
      id: 4,
      title: "Refund and Cancellation Policy",
      icon: CreditCard,
      text: "Refunds (if any) depend on the policy shared at the time of enrollment and the specific program. Unless otherwise stated in writing:",
      subsections: [
        {
          subtitle: "Before batch start:",
          text: "refund may be considered after deducting administrative charges."
        },
        {
          subtitle: "After batch start:",
          text: "refund is generally not available as resources, seat, and training plans are allocated."
        }
      ],
      footer: "If a batch is cancelled by the Institute, you may be offered rescheduling or an appropriate refund/credit. For refund requests: contact [Email] with payment proof and registration details."
    },
    {
      id: 5,
      title: "Batch Rescheduling and Attendance",
      icon: Calendar,
      content: [
        "Batches may be rescheduled due to trainer availability, holidays, or unavoidable situations. You will be informed in advance where possible.",
        "Regular attendance is recommended for best outcomes.",
        "Missed sessions may or may not be eligible for backup classes depending on the program structure."
      ]
    },
    {
      id: 6,
      title: "Code of Conduct",
      icon: Shield,
      text: "To maintain a professional learning environment, you agree:",
      content: [
        "Not to disrupt sessions, harass others, or use abusive language",
        "To follow trainer instructions and institute guidelines",
        "Not to misuse institute resources, materials, or community groups"
      ],
      footer: "Violation may result in suspension/termination without refund."
    },
    {
      id: 7,
      title: "Intellectual Property and Training Materials",
      icon: FileText,
      text: "All content, materials, worksheets, videos, and course frameworks are the Institute's intellectual property (unless stated otherwise). You agree:",
      content: [
        "Not to copy, share, sell, record, publish, or distribute materials without written permission",
        "Not to share login links/recordings (if any) with others"
      ]
    },
    {
      id: 8,
      title: "Recordings and Media",
      icon: Camera,
      text: "If sessions are recorded for learning/support purposes:",
      content: [
        "We may record internal training sessions and share with enrolled participants only (if applicable).",
        "We may use photos/videos from events for marketing only with reasonable care, and you can request removal by emailing [Email]."
      ]
    },
    {
      id: 9,
      title: "Results Disclaimer",
      icon: TrendingUp,
      text: "We focus on skill-building and mentorship, but outcomes vary by individual effort and background. We do not guarantee:",
      content: [
        "Job placement, salary levels, interview selection, or promotions"
      ],
      footer: "We may provide guidance, mock interviews, and career support as part of programs where applicable."
    },
    {
      id: 10,
      title: "Limitation of Liability",
      icon: AlertTriangle,
      text: "To the maximum extent permitted by law:",
      content: [
        "We are not liable for indirect, incidental, or consequential damages",
        "Our total liability for any claim will not exceed the amount paid for the specific program in dispute"
      ]
    },
    {
      id: 11,
      title: "Website Use",
      icon: Globe,
      text: "You agree not to:",
      content: [
        "Attempt unauthorized access, hacking, or disruption of the website",
        "Upload malicious code or misuse forms/content"
      ],
      footer: "We may restrict access if misuse is detected."
    },
    {
      id: 12,
      title: "Privacy",
      icon: Shield,
      text: "Your use of our services is also governed by our Privacy Policy. By using the website/enrolling, you agree to how we handle data."
    },
    {
      id: 13,
      title: "Changes to Programs or Terms",
      icon: FileText,
      text: "We may update program structures, schedules, trainers, pricing, or these Terms when required. Updated Terms will be posted on our website with an effective date."
    },
    {
      id: 14,
      title: "Governing Law and Jurisdiction",
      icon: Scale,
      text: "These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Pune, Maharashtra."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-bold text-slate-900">Shadow Recruiters</h1>
          </div>
          <p className="text-slate-600">Training & Development Institute - Pune, India</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h2>
          <p className="text-slate-600 mb-6">
            <span className="font-semibold">Effective Date:</span> June 15, 2025
          </p>
          <p className="text-slate-700 leading-relaxed">
            These Terms & Conditions govern your use of shadowrecruiter.com, and your enrollment in any 
            training, mentorship, or related services offered by Shadow Recruiters. 
            By using our website or enrolling, you agree to these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div key={section.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {section.id}. {section.title}
                    </h3>
                  </div>
                </div>

                {section.text && (
                  <p className="text-slate-700 mb-4 leading-relaxed">{section.text}</p>
                )}

                {section.subsections && (
                  <div className="space-y-3 mb-4">
                    {section.subsections.map((sub, idx) => (
                      <div key={idx} className="ml-4 bg-slate-50 p-4 rounded-lg">
                        <p className="text-slate-700">
                          <span className="font-semibold text-slate-800">{sub.subtitle}</span> {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.content && (
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-slate-700 mt-4 leading-relaxed bg-slate-50 p-4 rounded-lg">
                    {section.footer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-lg p-8 mt-8 text-white">
          <h3 className="text-2xl font-bold mb-6">15. Contact</h3>
          <p className="text-indigo-100 mb-6">Shadow Recruiters (Pune, India)</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-indigo-100">hr@shadowrecruiter.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-indigo-100">+91 8483852326</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-indigo-100">Konark Indrayu Mall, Kondhwa,<br />Pune, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-6 mt-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-amber-900 mb-2">Important Notice</h4>
              <p className="text-amber-800 leading-relaxed">
                By enrolling in our programs or using our services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms & Conditions. If you do not agree with 
                any part of these terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </main>  
    </div>
  );
}