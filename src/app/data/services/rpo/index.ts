import { Target, Users, TrendingUp, CheckCircle, Clock, FileText, Calendar, BarChart, Zap, Shield, ArrowRight, Phone, Mail, ChevronDown, Briefcase, Search, UserCheck, ClipboardCheck } from 'lucide-react';

const highlights = [
    { icon: Users, text: "Dedicated Recruiters", color: "from-blue-500 to-cyan-500" },
    { icon: BarChart, text: "Daily Pipeline", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, text: "Better Joining Ratio", color: "from-purple-500 to-pink-500" }
  ];

  const benefits = [
    { icon: Zap, title: "Faster Ramp-ups", desc: "Peak hiring handled efficiently", color: "from-orange-500 to-red-500" },
    { icon: BarChart, title: "Daily Pipeline Visibility", desc: "No surprises, full transparency", color: "from-blue-500 to-cyan-500" },
    { icon: UserCheck, title: "Process-fit Screening", desc: "Voice, language, shift readiness", color: "from-green-500 to-emerald-500" },
    { icon: CheckCircle, title: "Better Conversion", desc: "Onboarding support reduces dropouts", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, title: "Lower Cost Per Hire", desc: "Better ROI over time", color: "from-yellow-500 to-orange-500" }
  ];

  const scope = [
    { 
      num: "1", 
      title: "Requirement Intake & SLA Setup", 
      icon: Target,
      items: ["Headcount targets, timelines, locations", "Screening criteria & interview process", "Daily/weekly reporting format"] 
    },
    { 
      num: "2", 
      title: "Sourcing & Talent Attraction", 
      icon: Search,
      items: ["Job portals + local sourcing", "Walk-in drives coordination", "Campaign-based sourcing"] 
    },
    { 
      num: "3", 
      title: "Screening & Shortlisting", 
      icon: ClipboardCheck,
      items: ["Communication + process-fit checks", "Salary and shift alignment", "Joining intent verification"] 
    },
    { 
      num: "4", 
      title: "Interview Coordination", 
      icon: Calendar,
      items: ["Slot management & reminders", "Reschedule handling", "Feedback tracking"] 
    },
    { 
      num: "5", 
      title: "Offer Management Support", 
      icon: FileText,
      items: ["Offer rollout coordination", "Candidate follow-ups", "Acceptance tracking"] 
    },
    { 
      num: "6", 
      title: "Onboarding & Joining Support", 
      icon: UserCheck,
      items: ["Documentation checklist", "T-3/T-1/Day-0 confirmations", "Day-1 attendance tracking"] 
    },
    { 
      num: "7", 
      title: "Reporting & Optimization", 
      icon: BarChart,
      items: ["Funnel tracking", "Conversion improvements", "Dropout analysis"] 
    }
  ];

  const workflow = [
    { title: "Kickoff & Process Understanding", desc: "JD finalization, shift/salary clarity", icon: Briefcase },
    { title: "Hiring Funnel Setup", desc: "Sourcing plan, screening script, targets", icon: Target },
    { title: "Daily Execution", desc: "Sourcing → screening → shortlist", icon: Zap },
    { title: "Closures & Offer Tracking", desc: "Offer follow-ups, dropout control", icon: CheckCircle },
    { title: "Joining & Reporting", desc: "Confirmations + daily status updates", icon: BarChart }
  ];

  const roles = [
    "Customer Support (Voice/Non-Voice)",
    "International/Domestic Process",
    "Telesales/Telecalling",
    "Chat/Email Support",
    "Back Office/Data Entry",
    "Collections/Verification",
    "Team Leaders/QA"
  ];

  const deliverables = [
    "Dedicated recruiter(s) or hiring pod",
    "Daily shortlist submissions",
    "Interview scheduling + coordination",
    "Offer & joining tracking",
    "Dropout control follow-ups",
    "Pipeline & conversion reports",
    "Single point of contact"
  ];

  const metrics = [
    { label: "Profiles Screened/Day", icon: Search, value: "500+", color: "from-blue-500 to-cyan-500" },
    { label: "Profiles Shared/Day", icon: FileText, value: "250+", color: "from-green-500 to-emerald-500" },
    { label: "Interview Scheduled", icon: Calendar, value: "95%", color: "from-purple-500 to-pink-500" },
    { label: "Offer Acceptance Rate", icon: CheckCircle, value: "85%", color: "from-yellow-500 to-orange-500" },
    { label: "Offer-to-Join Ratio", icon: TrendingUp, value: "90%", color: "from-red-500 to-pink-500" },
    { label: "Time-to-Fill", icon: Clock, value: "7 Days", color: "from-indigo-500 to-purple-500" },
    { label: "Replacement Rate", icon: Users, value: "100%", color: "from-cyan-500 to-blue-500" }
  ];

  const models = [
    {
      name: "Dedicated Team",
      type: "Monthly",
      best: "Continuous hiring & large volumes",
      features: ["Dedicated recruiter/pod", "Defined SLAs", "Full-time commitment", "Scalable team"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Hybrid Model",
      type: "Monthly + Success",
      best: "Balanced risk & reward",
      features: ["Monthly support fee", "Success-based incentive", "Flexible engagement", "Performance driven"],
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Drive-based RPO",
      type: "Short-term",
      best: "2-6 weeks ramp-up",
      features: ["Walk-in coordination", "Fast closures", "Temporary scale-up", "Project-based"],
      color: "from-green-600 to-emerald-600"
    }
  ];

  const faqs = [
    { q: "How quickly can you start?", a: "Typically within a few days after kickoff and JD finalization." },
    { q: "Can you handle multiple locations?", a: "Yes, we manage location-wise sourcing and reporting." },
    { q: "Is RPO only for large companies?", a: "No, even growing BPOs use RPO to stabilize hiring and reduce dropouts." }
  ];

  const whyUs = [
    { icon: Target, title: "BPO-first Approach", desc: "Volume + speed + joining focus" },
    { icon: ClipboardCheck, title: "Structured Screening", desc: "Shift readiness + communication" },
    { icon: Shield, title: "Strong Onboarding", desc: "Reduce dropouts effectively" },
    { icon: BarChart, title: "Transparent Reporting", desc: "Full pipeline visibility" },
    { icon: Zap, title: "Scalable Solution", desc: "Ramp up when you need" }
  ];

  export {whyUs, faqs, models, metrics,deliverables, roles, workflow,benefits ,highlights, scope}