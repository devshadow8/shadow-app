

const courses = [
    {
      name: 'Shadow Rise',
      duration: '5 Days',
      price: '₹2,000',
      color: 'from-blue-500 to-cyan-500',
      objective: 'Build basic communication confidence and interview readiness.',
      highlights: ['Communication basics', 'Interview preparation', 'Confidence & body language'],
      deliverables: ['Interview readiness report', 'Participation certificate'],
      popular: false
    },
    {
      name: 'Shadow Prime',
      duration: '30–45 Days',
      price: '₹7,000',
      color: 'from-purple-500 to-pink-500',
      objective: 'Communication foundation, voice & accent development, and personality enhancement.',
      highlights: ['Interview mastery', 'GD & presentation skills', 'Career guidance', 'Voice & accent training'],
      deliverables: ['Resume + cover letter', 'Assessment sheet', 'Mock interview feedback', 'Lifetime membership card'],
      popular: true
    },
    {
      name: 'Shadow Forever',
      duration: '45+ Days',
      price: '₹11,000',
      color: 'from-orange-500 to-red-500',
      objective: 'Complete transformation with ongoing support and advanced training.',
      highlights: ['Spoken English + grammar', 'Personality & communication mastery', 'Corporate readiness', 'Ongoing development', 'Advanced interview techniques'],
      deliverables: ['Premium certificate', 'Lifetime membership card', 'Resume + cover letter', 'Trainer feedback report', 'Monthly career counseling'],
      popular: false
    }
  ];

  const comparisonFeatures = [
    { name: 'Duration', rise: '5 Days', prime: '30-45 Days', forever: '45+ Days' },
    { name: 'Price', rise: '₹2,000', prime: '₹7,000', forever: '₹11,000' },
    { name: 'Communication Basics', rise: true, prime: true, forever: true },
    { name: 'Interview Preparation', rise: true, prime: true, forever: true },
    { name: 'Voice & Accent Training', rise: false, prime: true, forever: true },
    { name: 'Personality Development', rise: false, prime: true, forever: true },
    { name: 'Resume Building', rise: false, prime: true, forever: true },
    { name: 'Mock Interviews', rise: false, prime: true, forever: true },
    { name: 'Lifetime Membership', rise: false, prime: true, forever: true },
    { name: 'Career Counseling', rise: false, prime: false, forever: true },
    { name: 'Corporate Readiness', rise: false, prime: false, forever: true }
  ];

  const faqs = [
    {
      q: 'What is the duration of each course?',
      a: 'Shadow Rise is 5 days, Shadow Prime runs for 30-45 days, and Shadow Forever is 45+ days with ongoing support and monthly counseling sessions.'
    },
    {
      q: 'Do you provide placement assistance?',
      a: 'Yes! All our courses include career guidance. Shadow Prime and Forever members get additional placement support, resume building, and interview preparation with real company connections.'
    },
    {
      q: 'What is the batch size for training sessions?',
      a: 'We maintain small batch sizes of 10-15 students to ensure personalized attention and maximum interaction with trainers for effective learning.'
    },
    {
      q: 'Can I pay the course fee in installments?',
      a: 'Yes, we offer flexible payment options including installment plans for our longer duration courses. Please contact us to discuss payment options that work for you.'
    },
    {
      q: 'Do you offer online training options?',
      a: 'Yes! We offer both online and offline training options. Our online sessions are live and interactive with the same quality and attention as our in-person classes.'
    }
  ];

  export {courses, comparisonFeatures, faqs};