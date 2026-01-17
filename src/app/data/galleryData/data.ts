import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';

  const galleryItems = [
    { 
      id: 1, 
      title: 'Classroom Training', 
      description: 'Interactive learning sessions with personalized attention', 
      category: 'Training Sessions', 
      color: 'from-blue-500 to-cyan-500',
      image: '/images/poster1.jpg'
    },
    { 
      id: 2, 
      title: 'Communication Workshop', 
      description: 'Developing effective communication skills', 
      category: 'Workshops', 
      color: 'from-purple-500 to-pink-500',
      image: '/images/poster3.jpg'
    },
    { 
      id: 3, 
      title: 'Certificate Ceremony', 
      description: 'Celebrating student achievements and success', 
      category: 'Student Achievements', 
      color: 'from-green-500 to-teal-500',
      image: '/images/poster4.jpg' 
    },
    { 
      id: 4, 
      title: 'Personality Development', 
      description: 'Building confidence and professional presence', 
      category: 'Training Sessions', 
      color: 'from-orange-500 to-red-500',
      image: '/images/blogs4.png'
    },
    { 
      id: 5, 
      title: 'Industry Expert Talk', 
      description: 'Learning from experienced professionals', 
      category: 'Events', 
      color: 'from-indigo-500 to-purple-500',
      image: '/images/blogs5.png' 
    },
    { 
      id: 6, 
      title: 'Mock Interviews', 
      description: 'Realistic interview practice with feedback', 
      category: 'Training Sessions', 
      color: 'from-pink-500 to-rose-500',
      image: '/images/blogs6.png'
    },
    { 
      id: 7, 
      title: 'Group Discussions', 
      description: 'Mastering the art of effective participation', 
      category: 'Workshops', 
      color: 'from-cyan-500 to-blue-500',
      image: '/images/blogs7.png' 
    },
    { 
      id: 8, 
      title: 'Placement Success', 
      description: 'Our students securing dream jobs', 
      category: 'Student Achievements', 
      color: 'from-yellow-500 to-orange-500',
      image: '/images/blogs8.png' 
    }
  ];

  const achievements = [
    { icon: Users, number: '500+', label: 'Students Trained', description: 'Successfully trained students in communication and personality development', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, number: '95%', label: 'Placement Rate', description: 'High success rate in helping students secure their dream jobs', color: 'from-purple-500 to-pink-500' },
    { icon: Award, number: '50+', label: 'Industry Recognition', description: 'Recognized by leading companies for quality training programs', color: 'from-green-500 to-teal-500' },
    { icon: Briefcase, number: '100+', label: 'Excellence Awards', description: 'Multiple awards for outstanding training and student success', color: 'from-orange-500 to-red-500' }
  ];

  export{galleryItems, achievements};