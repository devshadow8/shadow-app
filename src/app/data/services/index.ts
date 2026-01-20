import { ArrowRight, Users, Target, TrendingUp, CheckCircle, Clock, Shield, Zap, Phone, Mail, MessageSquare, Headphones, BarChart3, FileText, UserCheck, ChevronDown, ChevronUp, Briefcase, HeadphonesIcon, Laptop, DollarSign, Award, Globe, Rocket, Star, CheckCheck } from 'lucide-react';


const roles = [
  { icon: Headphones, title: "Customer Support Executive" },
  { icon: Phone, title: "Telecaller / Telesales" },
  { icon: Users, title: "Team Leader / Supervisor" },
  { icon: Briefcase, title: "Back Office Executive" },
  { icon: Mail, title: "Email Support" },
  { icon: MessageSquare, title: "Chat Support" },
  { icon: DollarSign, title: "Collections Executive" },
  { icon: FileText, title: "Data Entry Operator" },
  { icon: Award, title: "Quality Analyst" },
];

const process = [
  { title: "Requirement", desc: "Understanding your needs" },
  { title: "Sourcing", desc: "Multi-channel candidate search" },
  { title: "Screening", desc: "Quick evaluation process" },
  { title: "Interviews", desc: "Structured assessments" },
  { title: "Selection", desc: "Shortlist top candidates" },
  { title: "Onboarding", desc: "Smooth joining process" },
  { title: "Follow-up", desc: "Post-joining support" },
];

const deliverables = [
  "Pre-screened candidate profiles with assessment scores",
  "Dedicated recruiter for each role",
  "Daily/weekly hiring tracker and reports",
  "Backup pipeline to reduce dropout impact",
  "Post-offer follow-up till Day 1 joining",
  "Replacement support for no-shows"
];

const benefits = [
  { icon: Clock, title: "Fast TAT", desc: "Close positions in 7-15 days with parallel hiring" },
  { icon: Target, title: "Better Quality", desc: "Multi-level screening ensures right fitment" },
  { icon: TrendingUp, title: "Higher Join Ratio", desc: "80%+ joining rate with strong follow-up" },
  { icon: Shield, title: "Zero Risk", desc: "Pay only for successful joiners with our model" }
];

const engagementModels = [
  { title: "Pay Per Hire", desc: "Fixed fee per successful joiner. Best for predictable hiring.", highlight: "Popular" },
  { title: "Retained Model", desc: "Monthly retainer + performance bonus. For ongoing volume.", highlight: "Flexible" },
  { title: "RPO Model", desc: "Full recruitment outsourcing with dedicated team.", highlight: "Comprehensive" }
];

const metrics = [
  "Time to Fill",
  "Quality of Hire",
  "Joining Ratio",
  "Dropout Rate",
  "Cost Per Hire"
];

const faqs = [
  { q: "What is your average time to fill?", a: "For bulk hiring, we typically close 70-80% positions within 15 days, depending on role complexity and location." },
  { q: "Do you provide replacement if candidate doesn't join?", a: "Yes, we provide free replacement within the agreed timeline if a selected candidate doesn't join." },
  { q: "What locations do you cover?", a: "We cover all major metros and Tier-2 cities across India. For specific locations, we can discuss during requirement gathering." },
  { q: "How do you ensure quality in bulk hiring?", a: "We use structured screening, skill assessments, and behavioral interviews. Each candidate goes through minimum 2-3 evaluation rounds." },
  { q: "What is your pricing model?", a: "We offer flexible models - Pay Per Hire, Retained, and RPO. Pricing depends on volume, role complexity, and timeline." }
];

  export {roles, process, deliverables, benefits, engagementModels, metrics, faqs,}