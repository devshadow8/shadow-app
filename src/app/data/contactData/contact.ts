import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Users, Building, CheckCircle, BookOpen, User, Globe, AlertCircle } from 'lucide-react';

const contactInfo = [
    { 
      icon: Phone,
      title: 'Phone',
      value: '+91 8483852326',
      link: 'tel:+918483852326',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hr@shadowrecruiter.com',
      link: 'mailto:hr@shadowrecruiter.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Office No. 2S1-06, 1st Floor, Konark Indrayu Mall, Opp. Satyanand Hospital, Kondhwa, Pune',
      link: 'https://www.google.com/maps/place/Shadow+Recruiters/@18.4733113,73.8868573,17z',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: null,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, link: 'https://www.linkedin.com/in/arbaz-shaikh-828882237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', color: 'hover:text-blue-400' },
    { icon: Twitter, link: 'https://twitter.com', color: 'hover:text-cyan-400' },
    { icon: Facebook, link: 'https://www.facebook.com/profile.php?id=61587175342194', color: 'hover:text-blue-500' },
    { icon: Instagram, link: 'https://www.instagram.com/shadowrecruiter_/', color: 'hover:text-pink-400' }
  ];

  const faqs = [
    {
      icon: Clock,
      question: 'How soon can I start my training?',
      answer: 'You can start your training immediately after enrollment! We have flexible batch timings throughout the week. Once you complete the registration process, our team will coordinate with you to schedule your preferred time slots. Most students begin within 2-3 days of enrollment.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      question: 'Do you offer demo sessions?',
      answer: 'Yes! We offer free demo sessions for all our courses. This gives you a chance to experience our teaching methodology, meet the trainer, and understand the course structure before making a commitment. Book your demo session by contacting us at +91 8483852326.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Building,
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods for your convenience including Cash, UPI (Google Pay, PhonePe, Paytm), Bank Transfer/NEFT, Credit/Debit Cards, and Payment Apps. We also offer flexible installment options for courses longer than 30 days.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: CheckCircle,
      question: "Can I get a refund if I'm not satisfied?",
      answer: 'Yes, we have a satisfaction guarantee policy. If you are not satisfied after the first 3 sessions, we offer a full refund with no questions asked. Your satisfaction and learning experience are our top priorities.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: BookOpen,
      question: 'What is the batch size for training sessions?',
      answer: 'We maintain small batch sizes of 10-15 students to ensure personalized attention and maximum interaction with trainers. This helps us focus on individual student needs and provide customized feedback for better learning outcomes.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: User,
      question: 'Do you provide placement assistance?',
      answer: 'Yes! All our courses include comprehensive placement support. We provide resume building, mock interviews, soft skills training, company referrals, and career guidance. Our Shadow Prime and Forever members get additional dedicated placement support with direct company connections.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      question: 'Are the sessions conducted online or offline?',
      answer: 'We offer both online and offline training options based on your preference. Our online sessions are live and interactive with the same quality as in-person classes. You can choose the mode that suits your schedule and location.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: AlertCircle,
      question: 'What happens if I miss a session?',
      answer: "No worries! We provide session recordings for all enrolled students. You can also schedule a makeup session with the trainer at no additional cost. We understand that life happens, and we ensure you don't miss out on any learning.",
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  export {contactInfo, socialLinks, faqs};