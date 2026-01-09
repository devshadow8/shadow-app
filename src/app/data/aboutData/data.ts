import { Target, CheckCircle, Lightbulb, Handshake, Heart, Zap, Users, TrendingUp, Award } from 'lucide-react';


const stats = [
    { number: '3000+', label: 'Students Trained', icon: Users },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '100+', label: 'Corporate Partners', icon: Handshake },
    { number: '8', label: 'Years Experience', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Student Success',
      desc: 'Your career growth and personal development are our top priorities. We measure success through your achievements.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      desc: 'Maintaining the highest standards of honesty and transparency in every interaction with students and partners.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Continuously evolving our teaching methodologies to stay ahead of industry trends and provide cutting-edge training.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      desc: 'Fostering a collaborative learning environment where teamwork drives collective growth and success.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      desc: 'Driven by genuine passion for teaching and commitment to making a positive impact on every student\'s journey.',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Excellence',
      desc: 'Striving for excellence in everything from curriculum design to student support and comprehensive career guidance.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const team = [
    {
      name: 'Oves Shaikh',
      role: 'CEO',
      desc: 'Visionary leader with 5+ years of experience in corporate training and career coaching.',
      gradient: 'from-blue-600 to-purple-600',
      image: '/team/oves-shaikh.jpg' // Add your image path here
    },
    {
      name: 'Maseera Shaikh',
      role: 'COO',
      desc: 'Expert in communication skills, personality development, and interview preparation.',
      gradient: 'from-purple-600 to-pink-600',
      image: '/team/maseera-shaikh.jpg' // Add your image path here
    }
  ];

  export {stats, values, team};