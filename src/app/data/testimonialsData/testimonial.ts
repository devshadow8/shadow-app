import { Briefcase, Users, Award, TrendingUp, Target, Heart } from 'lucide-react';
const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'TCS',
      location: 'Bangalore, Karnataka',
      image: '👩‍💼',
      rating: 5,
      review: 'Shadow Recruiters completely transformed my personality! From interview preparation to resume building, they helped me with everything. Today I am working at TCS and my salary has increased by 40%. Thank you so much!',
      package: '8 LPA',
      increase: '40%',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Rahul Verma',
      role: 'Business Analyst',
      company: 'Infosys',
      location: 'Pune, Maharashtra',
      image: '👨‍💼',
      rating: 5,
      review: 'I had major problems with my communication skills. Shadow Recruiters\' voice & accent training program improved my English fluency so much that now I confidently speak with international clients. Best decision ever!',
      package: '12 LPA',
      increase: '55%',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Anjali Patel',
      role: 'HR Manager',
      company: 'Wipro',
      location: 'Ahmedabad, Gujarat',
      image: '👩‍💻',
      rating: 5,
      review: 'After graduation, I searched for a job for 8 months but found nothing. I enrolled with Shadow Recruiters and got placement at Wipro in just 2 months. Their mock interview sessions were life-changing. Highly recommended for freshers!',
      package: '6.5 LPA',
      increase: '100%',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Amit Kumar',
      role: 'Data Analyst',
      company: 'Accenture',
      location: 'Gurgaon, Haryana',
      image: '👨‍🔬',
      rating: 5,
      review: 'I was an average student in college but with Shadow Recruiters\' guidance, I got a job in my dream company. The personality development and interview preparation classes were amazing. Mentors are very supportive!',
      package: '9 LPA',
      increase: '35%',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Sneha Reddy',
      role: 'Digital Marketing Executive',
      company: 'Cognizant',
      location: 'Hyderabad, Telangana',
      image: '👩‍🎨',
      rating: 5,
      review: 'Shadow Recruiters\' lifetime support is amazing! Even after placement, I continue to receive career guidance. My resume became professional, LinkedIn profile was optimized, and soft skills improved. Worth every penny!',
      package: '7 LPA',
      increase: '45%',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '3000+',
      label: 'Students Trained',
      description: 'Pan-India Success',
      gradient: 'from-emerald-500 to-teal-500',
      delay: '0s'
    },
    {
      icon: Briefcase,
      number: '2500+',
      label: 'Placements Done',
      description: 'Top MNCs & Startups',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0.1s'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Success Rate',
      description: 'Industry Leading',
      gradient: 'from-violet-500 to-purple-500',
      delay: '0.2s'
    },
    {
      icon: TrendingUp,
      number: '40%',
      label: 'Avg Salary Hike',
      description: 'Career Growth',
      gradient: 'from-orange-500 to-red-500',
      delay: '0.3s'
    },
    {
      icon: Target,
      number: '500+',
      label: 'Partner Companies',
      description: 'Hiring Network',
      gradient: 'from-pink-500 to-rose-500',
      delay: '0.4s'
    },
    {
      icon: Heart,
      number: '4.9/5',
      label: 'Student Rating',
      description: 'Trusted by Thousands',
      gradient: 'from-cyan-500 to-sky-500',
      delay: '0.5s'
    }
  ];
    export { testimonials, achievements };