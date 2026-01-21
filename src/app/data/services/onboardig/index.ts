import { CheckCircle, Users, FileText, Calendar, TrendingUp, Clock, MapPin, Shield, ArrowRight, Phone, Mail, ChevronDown } from 'lucide-react';

// onboarding 

  const highlights = [
      { icon: Shield, text: "Dropout Control", color: "from-blue-500 to-cyan-500" },
      { icon: CheckCircle, text: "Joining Confirmations", color: "from-green-500 to-emerald-500" },
      { icon: TrendingUp, text: "Daily Reports", color: "from-purple-500 to-pink-500" }
    ];
  
    const deliverables = [
      { icon: Calendar, title: "Pre-joining Follow-ups", desc: "T-3, T-1, Day-0 confirmations" },
      { icon: FileText, title: "Document Coordination", desc: "Format, missing docs, quick guidance" },
      { icon: CheckCircle, title: "Offer Acceptance", desc: "Salary, shift, location clarity" },
      { icon: Users, title: "Candidate Engagement", desc: "Reduce last-minute dropouts" },
      { icon: MapPin, title: "Joining Day Coordination", desc: "Reporting time, address, POC" },
      { icon: TrendingUp, title: "Daily Progress Updates", desc: "Selected vs joined tracking" }
    ];
  
    const steps = [
      { title: "Requirement Briefing", desc: "Joining date, shift, salary, documents" },
      { title: "Selection Tracking", desc: "Track every candidate status" },
      { title: "Documentation Support", desc: "Checklist & pending reminders" },
      { title: "Pre-Joining Engagement", desc: "Regular follow-ups" },
      { title: "Day-1 Coordination", desc: "Confirm reporting & attendance" },
      { title: "Post-Joining Check", desc: "48-72hr retention support" }
    ];
  
    const roles = [
      "Customer Support Executive",
      "International/Domestic Process",
      "Telesales/Telecalling",
      "Chat/Email Support",
      "Back Office/Data Entry",
      "Collections/Verification",
      "Team Leader/QA"
    ];
  
    const dropoutSystem = [
      { num: "1", title: "Joining Intent Check", items: ["Shift readiness", "Salary alignment", "Travel feasibility", "Immediate availability"] },
      { num: "2", title: "Clear Communication", items: ["Exact timing & location", "Required documents", "Process details", "Metrics info"] },
      { num: "3", title: "Structured Follow-ups", items: ["T-3: Plan + docs", "T-1: Final confirmation", "Day-0: Reminder", "Day-1: Attendance"] },
      { num: "4", title: "Backup Planning", items: ["Fallback pipeline", "Replacement ready", "No productivity loss", "High-volume support"] }
    ];
  
    const faqs = [
      { q: "Do you guarantee 100% joining?", a: "No one can guarantee that, but our system consistently improves joining ratio by reducing avoidable dropouts." },
      { q: "Can you handle joining across locations?", a: "Yes, we manage location-wise onboarding and reporting." },
      { q: "Can you support urgent joining?", a: "Yes, we run same-day confirmations and fast documentation coordination when required." }
    ];

    export {faqs ,dropoutSystem, roles, steps, deliverables, highlights}