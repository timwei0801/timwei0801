export default {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    awards: 'Awards',
    projects: 'Projects',
    skills: 'Skills',
    certifications: 'Certifications',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Tim Wei',
    tagline: 'Data Science Master\'s Student / Full-Stack Developer',
    description: 'Continuous learning, bold innovation, transforming AI technology into solutions for real-world problems.',
    cta: 'Learn More',
    contact: 'Contact Me',
    scrollDown: 'Scroll Down',
  },
  about: {
    title: 'About Me',
    subtitle: 'A passionate software engineer specializing in AI and data science',
    intro: "I'm a passionate software engineer specializing in artificial intelligence and data science, currently pursuing my Master's in Data Science while working as a Full-Stack Developer & AI Engineer Intern at EY Taiwan.",
    philosophy: 'I believe the true value of technology lies in solving real-world problems, driving me to continuously bridge the gap between academic research and practical applications.',
    highlights: {
      education: {
        title: 'Academic Performance',
        value: 'Rank #2',
        description: 'GPA 94.23',
      },
      awards: {
        title: 'Achievements',
        value: 'Multiple Awards',
        description: 'National Competitions',
      },
    },
    eyWork: {
      company: 'Ernst & Young Taiwan',
      position: 'Full-Stack Developer & AI Engineer Intern',
      period: '2025/07 - Present · Taipei, Taiwan',
      items: {
        frontend: {
          title: 'Frontend Dev',
          description: 'Vue.js module development with component architecture & RESTful API integration',
        },
        backend: {
          title: 'Backend Dev',
          description: 'Python & Java microservices with Spring Boot architecture',
        },
        ai: {
          title: 'AI Engineering',
          description: 'Building internal AI RAG system for knowledge management',
        },
        teaching: {
          title: 'Teaching (Upcoming)',
          description: 'Teaching Assistant at NTU Accounting Dept. (Feb - Jun 2026)',
        },
      },
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'From academia to industry',
    items: [
      {
        company: 'Ernst & Young',
        companyEn: 'Ernst & Young',
        position: 'Full-Stack Developer Intern',
        period: '2025/07 - Present',
        location: 'Taipei, Taiwan',
        description: 'Working as a Full-Stack Developer Intern at EY Taiwan, one of the Big Four accounting firms globally, developing and maintaining enterprise-level project management systems.',
        achievements: [
          'Developed Vue.js frontend interfaces, from component design to API integration',
          'Optimized page performance including reducing re-renders and implementing lazy loading',
          'Led Python automation web scraping project to improve data collection efficiency',
          'Obtained three Microsoft Azure cloud certifications',
        ],
        tags: ['Vue.js', 'Python', 'Spring Boot', 'Linux'],
      },
      {
        company: 'Heng Jia Enterprise',
        companyEn: 'Heng Jia Enterprise',
        position: 'ESG Services Intern',
        period: '2024/02 - 2024/06',
        location: 'Taipei, Taiwan',
        description: 'Responsible for enterprise client development and ESG sustainability services promotion, accumulating B2B communication experience.',
        achievements: [
          'Sustainability consulting services',
          'ESG report writing assistance',
          'Carbon inventory certification course planning',
        ],
        tags: ['ESG', 'Project Management', 'B2B'],
      },
    ],
  },
  awards: {
    title: 'Awards',
    subtitle: 'Validating skills through competitions',
    items: [
      {
        title: 'National Highway Intelligent Traffic Competition',
        award: '2nd Place (1st Place Vacant)',
        organization: 'Taiwan Freeway Bureau',
        year: '2025',
        description: 'Developed an AI traffic prediction system combining deep learning with physics-based shockwave theory. Invited to present at the 2025 Chinese Institute of Transportation Annual Conference.',
        highlights: ['MT-STNet Deep Learning Model', 'Physics-based Shockwave Theory', 'Conference Invitation'],
      },
      {
        title: 'Data Science Discovery Competition',
        award: 'Best Popular Poster Award & Merit Award',
        organization: 'Institute of Statistical Science, Academia Sinica',
        year: '2024',
        description: 'Research on internet usage behavior and cyberbullying correlation analysis, demonstrating excellent data analysis capabilities and research presentation skills.',
        highlights: ['90%+ Model Accuracy', 'Innovative Methodology', 'Dual Awards'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'From concept to implementation',
    viewProject: 'View Project',
    viewDemo: 'Live Demo',
    items: [
      {
        title: 'Highway Traffic Prediction System',
        subtitle: 'Deep Learning with Physics-based Shockwave Theory',
        description: 'Dual-engine parallel architecture integrating deep learning prediction engine and physics-based shockwave detection engine for accurate traffic congestion prediction and real-time warning.',
        features: [
          'MT-STNet Spatio-Temporal Network',
          'LWR Traffic Flow Theory',
          'RAG Decision Support',
          'Real-time Dashboard',
        ],
        tags: ['Deep Learning', 'GNN', 'Vue.js', 'Python'],
        github: 'https://github.com/timwei0801/Highway_trafficwave',
      },
      {
        title: 'Internet Behavior Research',
        subtitle: 'Exploring Internet Usage and Cyberbullying',
        description: 'Multivariate analysis exploring the relationship between internet usage patterns and bullying tendencies across different demographics. Pioneered the application of GAP to cyberbullying research.',
        features: [
          'Generalized Association Plot (GAP)',
          'Principal Component Analysis (PCA)',
          'Factor & Canonical Correlation Analysis',
          '90%+ Prediction Accuracy',
        ],
        tags: ['Python', 'R', 'Statistical Analysis', 'Data Visualization'],
        github: 'https://github.com/timwei0801/MVA-Internet-use-and-bullying',
      },
      {
        title: 'ChartGenie',
        subtitle: 'AI-Powered Smart Visualization System',
        description: 'AI-powered system that lowers the barrier to data visualization. Users can describe their needs in natural language, and the system automatically recommends suitable chart types.',
        features: [
          'LLM Natural Language Understanding',
          '30+ Chart Types',
          'Multi-format File Upload',
          'Automatic Report Generation',
        ],
        tags: ['Vue.js', 'Python', 'LLM', 'Chart.js'],
      },
      {
        title: 'Texas Poker AI Decision System',
        subtitle: 'Image Recognition & Strategy Recommendation',
        description: 'Poker decision support system combining image recognition and AI, achieving real-time game analysis and strategy recommendations through multi-technology integration.',
        features: [
          '95%+ Card Recognition Accuracy',
          'WebSocket Real-time Communication',
          '500ms Response Time',
          'MySQL Data Management',
        ],
        tags: ['Python', 'Node.js', 'Claude API', 'MySQL'],
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Continuously evolving tech stack',
    categories: {
      ai: {
        title: 'AI & Machine Learning',
        skills: ['Deep Learning', 'GNN', 'RAG', 'LLM', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
      },
      frontend: {
        title: 'Frontend Development',
        skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
      },
      backend: {
        title: 'Backend Development',
        skills: ['Python', 'Java', 'Spring Boot', 'Node.js', 'RESTful API', 'FastAPI'],
      },
      data: {
        title: 'Data Analysis',
        skills: ['Python', 'R', 'SAS', 'Pandas', 'NumPy', 'Statistical Modeling'],
      },
      database: {
        title: 'Database & Tools',
        skills: ['SQL Server', 'MySQL', 'Git', 'Docker', 'Linux'],
      },
    },
  },
  certifications: {
    title: 'Certifications',
    subtitle: 'Continuous learning is the core competitiveness',
    items: [
      {
        name: 'Microsoft Azure Fundamentals',
        code: 'AZ-900',
        issuer: 'Microsoft',
        category: 'cloud',
      },
      {
        name: 'Azure AI Fundamentals',
        code: 'AI-900',
        issuer: 'Microsoft',
        category: 'ai',
      },
      {
        name: 'Azure Data Fundamentals',
        code: 'DP-900',
        issuer: 'Microsoft',
        category: 'data',
      },
      {
        name: 'SAS Base Programming',
        code: 'SAS Base',
        issuer: 'SAS Institute',
        category: 'data',
      },
      {
        name: 'AI Specialist Certification',
        code: 'AI Specialist',
        issuer: 'TQC+',
        category: 'ai',
      },
      {
        name: 'ESG Junior Manager',
        code: 'ESG Manager',
        issuer: 'ESG International Institute',
        category: 'other',
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: "Let's Connect",
    description: "Whether it's tech discussions, collaboration opportunities, or just chatting about data science and development, feel free to reach out.",
    email: 'Email',
    location: 'Location',
    locationValue: 'Taipei, Taiwan',
    social: 'Social Links',
  },
  footer: {
    copyright: '© 2024 Tim Wei. All rights reserved.',
    madeWith: 'Made with',
    and: 'and',
  },
}
