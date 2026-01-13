import { Users, Award, TrendingUp, CheckCircle, Heart, Lightbulb, Handshake, Zap, Target, Sparkles } from "lucide-react";
const stats = [
  { icon: Users, number: "5000+", label: "Students Trained" },
  { icon: Award, number: "95%", label: "Placement Rate" },
  { icon: TrendingUp, number: "50+", label: "Corporate Partners" },
  { icon: CheckCircle, number: "100+", label: "Success Stories" }
];

const values = [
  { 
    icon: Heart, 
    title: "Excellence", 
    desc: "We strive for excellence in every aspect of training and development",
    color: "from-red-500 to-pink-500"
  },
  { 
    icon: Lightbulb, 
    title: "Innovation", 
    desc: "Constantly evolving our methods to meet industry demands",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    icon: Handshake, 
    title: "Integrity", 
    desc: "Building trust through honest and transparent practices",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Zap, 
    title: "Empowerment", 
    desc: "Enabling individuals to reach their full potential",
    color: "from-purple-500 to-pink-500"
  },
  { 
    icon: Target, 
    title: "Focus", 
    desc: "Goal-oriented approach to ensure measurable success",
    color: "from-green-500 to-emerald-500"
  },
  { 
    icon: Sparkles, 
    title: "Quality", 
    desc: "Maintaining highest standards in education and mentorship",
    color: "from-indigo-500 to-purple-500"
  }
];

const team = [
  {
    name: "Oves Shaikh",
    role: "Founder & CEO",
    desc: "Visionary leader with 15+ years of experience in career development and training",
    gradient: "from-blue-500 to-purple-500"
    
  },
  {
    name: "Maseera Shaikh",
    role: "COO",
    desc: "Expert trainer specializing in communication skills and personality development",
    gradient: "from-purple-500 to-pink-500"
  }
];

export {stats, values, team};