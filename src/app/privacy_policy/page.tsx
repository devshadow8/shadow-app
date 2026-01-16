import React from 'react';
import { Shield, Lock, Mail, Phone, MapPin, FileText, Users, Database, Cookie, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: Database,
      subsections: [
        {
          subtitle: "A. Information you provide",
          items: [
            "Name, phone number, email address, city/college/company",
            "Enrollment details (selected program, batch preference, queries)",
            "Payment-related details (transaction reference/receipt info; we do not store full card details)",
            "Messages shared via forms, WhatsApp, email, or phone calls",
            "Feedback, testimonials, and reviews (only if you choose to provide them)"
          ]
        },
        {
          subtitle: "B. Information collected automatically",
          items: [
            "Device and browser information, IP address",
            "Website usage data (pages visited, time spent, clicks)",
            "Cookies and similar tracking technologies (see section 6)"
          ]
        },
        {
          subtitle: "C. Training-related information",
          items: [
            "Attendance, assignments, assessments, performance notes (for mentoring/training progress)",
            "Recordings (only if classes are recorded, and if applicable)"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: FileText,
      content: [
        "Respond to your inquiries and provide counseling/guidance",
        "Process enrollments, payments, and confirmations",
        "Deliver training, mentoring, and career support services",
        "Share updates about schedules, batches, materials, and institute communication",
        "Improve our programs, website experience, and support",
        "Prevent fraud, enforce policies, and comply with legal requirements"
      ]
    },
    {
      id: 3,
      title: "Legal Basis and Consent",
      icon: Shield,
      text: "By submitting your information or using our services, you consent to the collection and use of your information as described here. Where required, we will request explicit consent (for example, marketing communications)."
    },
    {
      id: 4,
      title: "Sharing of Information",
      icon: Users,
      text: "We do not sell your personal data. We may share information only with:",
      content: [
        "Service providers (payment gateways, CRM tools, email/WhatsApp communication tools, website hosting) strictly to operate our services",
        "Legal authorities if required by law, court orders, or to protect rights and safety",
        "Business transfers (if we restructure, merge, or transfer business assets) with appropriate safeguards"
      ]
    },
    {
      id: 5,
      title: "Data Retention",
      icon: Database,
      text: "We retain personal information only as long as needed for:",
      content: [
        "Program delivery, counseling, and support",
        "Legal, tax, and accounting compliance",
        "Resolving disputes and enforcing agreements"
      ],
      footer: "After that, we securely delete or anonymize it where reasonably possible."
    },
    {
      id: 6,
      title: "Cookies",
      icon: Cookie,
      text: "We may use cookies to:",
      content: [
        "Remember preferences",
        "Understand traffic and improve the site"
      ],
      footer: "You can control cookies through your browser settings. Disabling cookies may affect certain site features."
    },
    {
      id: 7,
      title: "Data Security",
      icon: Lock,
      text: "We use reasonable administrative, technical, and physical safeguards to protect your data. However, no system can be guaranteed 100% secure. Please avoid sharing sensitive personal information unnecessarily."
    },
    {
      id: 8,
      title: "Your Rights",
      icon: Shield,
      text: "You may request to:",
      content: [
        "Access, update, or correct your information",
        "Withdraw consent for marketing messages",
        "Request deletion of your data (subject to legal and operational needs)"
      ],
      footer: "To exercise rights, contact us at: [Email]."
    },
    {
      id: 9,
      title: "Third-Party Links",
      icon: AlertCircle,
      text: "Our website/social pages may link to third-party platforms (Instagram, WhatsApp, YouTube, payment gateways). Their privacy practices are governed by their own policies."
    },
    {
      id: 10,
      title: "Children's Privacy",
      icon: Users,
      text: "Our programs are intended for students and adults. If we knowingly collect data from a child without appropriate consent, we will take steps to delete it."
    },
    {
      id: 11,
      title: "Updates to This Policy",
      icon: FileText,
      text: "We may update this Privacy Policy from time to time. The latest version will be posted on our website with a revised effective date."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-slate-900">Shadow Recruiters</h1>
          </div>
          <p className="text-slate-600">Training & Development Institute - Pune, India</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
          <p className="text-slate-600 mb-2">
            <span className="font-semibold">Effective Date:</span> june 15, 2025
          </p>
          <p className="text-slate-700 leading-relaxed">
            Shadow Recruiters is a Training & Development Institute based in Pune, India, 
            offering programs in communication, confidence, personality development, interview skills, and corporate 
            readiness. This Privacy Policy explains how we collect, use, disclose, and protect your information when 
            you visit our website shadowrecruiter.com, contact us, or enroll in our programs.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div key={section.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-600" />
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
                  <div className="space-y-4">
                    {section.subsections.map((sub, idx) => (
                      <div key={idx} className="ml-4">
                        <h4 className="font-semibold text-slate-800 mb-2">{sub.subtitle}</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                          {sub.items.map((item, i) => (
                            <li key={i} className="leading-relaxed">{item}</li>
                          ))}
                        </ul>
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
                  <p className="text-slate-700 mt-4 leading-relaxed">{section.footer}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 mt-8 text-white">
          <h3 className="text-2xl font-bold mb-6">12. Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-blue-100">Konark Indrayu Mall, Kondhwa,<br />Pune, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-blue-100">hr@shadowrecruiter.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-blue-100">+91 8483852326</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}