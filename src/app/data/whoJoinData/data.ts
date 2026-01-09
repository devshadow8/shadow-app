import {School, GraduationCap, Briefcase, Rocket} from "lucide-react"
const programs = [
    {
      icon: School,
      title: 'School Students',
      description: 'Build confidence early with our specialized programs designed for young learners.',
      benefits: ['Career Awareness', 'Confidence Building', 'Communication Skills', 'Early Preparation'],
      gradient: 'from-emerald-500 to-teal-500',
      glowColor: 'emerald',
      delay: '0s'
    },
    {
      icon: GraduationCap,
      title: 'College Students',
      description: 'Get career-ready before graduation with industry-focused training.',
      benefits: ['Industry Training', 'Mock Interviews', 'Resume Building', 'Campus to Corporate'],
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'blue',
      delay: '0.1s'
    },
    {
      icon: Briefcase,
      title: 'Job Seekers',
      description: 'Crack interviews like a pro with our comprehensive interview preparation modules.',
      benefits: ['Interview Mastery', 'Salary Negotiation', 'Job Search Strategy', 'Professional Growth'],
      gradient: 'from-violet-500 to-purple-500',
      glowColor: 'violet',
      delay: '0.2s'
    },
    {
      icon: Rocket,
      title: 'Anyone',
      description: 'Improve English, personality & opportunities regardless of your background.',
      benefits: ['English Fluency', 'Personality Dev', 'Career Guidance', 'Skill Enhancement'],
      gradient: 'from-pink-500 to-rose-500',
      glowColor: 'pink',
      delay: '0.3s'
    }
  ];

  export {programs};