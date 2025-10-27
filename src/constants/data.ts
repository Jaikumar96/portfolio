export const personalInfo = {
  name: 'JAIKUMAR R',
  title: 'Passionate Software Developer & AI Enthusiast',
  subtitle: 'Java | Spring Boot | React.js | Healthcare Tech',
  location: 'Chennai, Tamil Nadu, India',
  email: 'jaikumarfocus@gmail.com',
  phone: '+91 7339202176',
  linkedin: 'https://www.linkedin.com/in/jakum/',
  github: 'https://github.com/Jaikumar96',
  leetcode: 'https://leetcode.com/u/Jaikumarfocus/',
  resumeUrl: '/resume.pdf',
};

export const aboutData = {
  description: `Specialized in backend development with Java & Spring Boot, delivering enterprise-scale 
    healthcare and learning management solutions. Proven track record of optimizing performance, 
    scalability, and security with data-driven development and AI-driven solutions.`,
  highlights: [
    { label: 'CGPA in IT', value: 8.2 },
    { label: 'Healthcare Projects', value: 3 },
    { label: 'LeetCode Problems', value: 50 },
    { label: 'Professional Internships', value: 2 },
  ],
};

export const experiences = [
  {
    id: 1,
    title: 'Infosys Springboard Intern',
    company: 'Infosys',
    period: 'Aug 2025 - Oct 2025',
    badge: 'Internship 6.0 Batch 1',
    achievements: [
      'Improved appointment booking efficiency by 40%',
      'Collaborated in 13-member backend team',
      'Applied secure coding practices for scalability',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Git'],
  },
  {
    id: 2,
    title: 'Java Developer Intern',
    company: 'Cothon Solutions',
    period: 'Mar 2025 - May 2025',
    achievements: [
      'Reduced manual course allocation time by 35% with LMS backend',
      'Increased patient engagement by 22% with Cure Buddy Healthcare App',
      'Integrated ML models for health reports with 90% accuracy',
    ],
    technologies: ['Spring Boot', 'MySQL', 'PostgreSQL', 'JWT', 'ML'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'MedVault – Appointment Booking System',
    description: 'Enterprise healthcare platform with secure EHR management and role-based access control',
    timeline: 'Aug 2025 - Oct 2025',
    techStack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Postman', 'Git'],
    achievements: [
      '40% improvement in patient-doctor interaction efficiency',
      'Built secure EHR system with role-based access',
      'Optimized MySQL schema for 1,000+ records',
      '25% reduction in API failure rate',
    ],
    category: 'Healthcare',
    githubUrl: 'https://github.com/Jaikumar96',
    liveUrl: '',
    image: '/projects/medvault.jpg',
  },
  {
    id: 2,
    title: 'Cure Buddy Healthcare App',
    description: 'AI-powered healthcare application with ML-based health report generation',
    timeline: 'Apr 2025 - May 2025',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'ML'],
    achievements: [
      '90% accuracy in ML-based health reports',
      '50% reduction in report turnaround time',
      '18% improvement in preventive care adoption with smart alerts',
    ],
    category: 'Healthcare',
    githubUrl: 'https://github.com/Jaikumar96',
    liveUrl: '',
    image: '/projects/cure-buddy.jpg',
  },
  {
    id: 3,
    title: 'LMS Backend System',
    description: 'Learning Management System with JWT authentication and role-specific access control',
    timeline: 'Mar 2025 - Apr 2025',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    achievements: [
      '28% decrease in user login errors with JWT authentication',
      'REST APIs powering 500+ student users',
      'Role-specific access control implementation',
    ],
    category: 'Education',
    githubUrl: 'https://github.com/Jaikumar96',
    liveUrl: '',
    image: '/projects/lms.jpg',
  },
];

export const skills = {
  'Programming & Backend': [
    { name: 'Java', level: 95 },
    { name: 'Spring Boot', level: 90 },
    { name: 'REST APIs', level: 85 },
    { name: 'MySQL', level: 85 },
    { name: 'PostgreSQL', level: 75 },
  ],
  'Frontend & Tools': [
    { name: 'React.js', level: 80 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Postman', level: 85 },
    { name: 'Git', level: 85 },
    { name: 'JUnit/Mockito', level: 70 },
  ],
  'Networking & Security': [
    { name: 'Cybersecurity Basics', level: 75 },
    { name: 'Networking Concepts', level: 70 },
    { name: 'Kali Linux', level: 65 },
    { name: 'Burp Suite', level: 65 },
  ],
  'Soft Skills': [
    { name: 'Problem-Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Collaboration', level: 90 },
    { name: 'Attention to Detail', level: 88 },
  ],
};

export const certifications = [
  {
    id: 1,
    title: 'Java Masterclass 2025',
    issuer: 'Udemy',
    duration: '130+ Hours',
    date: '2025',
    credentialUrl: '#',
  },
  {
    id: 2,
    title: 'Java Data Structures & Algorithms + LeetCode Exercises',
    issuer: 'Udemy',
    date: '2025',
    credentialUrl: '#',
  },
  {
    id: 3,
    title: 'Cybersecurity Tools & Cyberattacks',
    issuer: 'Coursera',
    date: '2024',
    credentialUrl: '#',
  },
  {
    id: 4,
    title: 'Networks and Cyber Security',
    issuer: 'Cisco',
    date: '2024',
    credentialUrl: '#',
  },
];

export const achievements = [
  {
    id: 1,
    title: '50+ LeetCode Problems Solved',
    description: 'Active problem solver on LeetCode platform',
    icon: 'code',
    link: 'https://leetcode.com/u/Jaikumarfocus/',
  },
  {
    id: 2,
    title: 'Build Your Website in 10 Minutes with AI',
    description: 'Workshop participant',
    icon: 'workshop',
    date: 'Mar 2025',
  },
  {
    id: 3,
    title: 'Microsoft Copilot Masterclass',
    description: 'Completed masterclass by SkillNation',
    icon: 'certificate',
    date: '2025',
  },
];

export const education = {
  institution: 'Misrimal Navajee Munoth Jain Engineering College',
  degree: 'Bachelor of Technology',
  field: 'Information Technology',
  duration: 'Nov 2022 - Nov 2026',
  cgpa: 8.2,
  location: 'Chennai, Tamil Nadu, India',
};
