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
    tagline: 'Data Science Master\'s Student / AI・ML Algorithm Engineer',
    description: 'Continuous learning, bold innovation, transforming AI/ML technology into solutions for real-world problems.',
    cta: 'Learn More',
    contact: 'Contact Me',
    scrollDown: 'Scroll Down',
  },
  about: {
    title: 'About Me',
    subtitle: 'A passionate AI/ML algorithm engineer specializing in data science',
    intro: "I'm a passionate AI/ML algorithm engineer, currently pursuing my Master's in Data Science while working at EY Taiwan, focusing on RAG system design, ML recommendation model development, and AI model evaluation.",
    philosophy: 'I believe the true value of technology lies in solving real-world problems, driving me to continuously bridge the gap between academic research and practical applications.',
    clickToExpand: 'Click to view details',
    clickToCollapse: 'Click to collapse',
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
      eyWork: {
        title: 'Work Experience',
        value: 'EY Taiwan',
        description: 'AI/ML Algorithm Engineer',
      },
    },
    educationDetail: {
      school: 'Tamkang University',
      degree: "Master's in Data Science, Statistics",
      period: '2024/09 - Present',
      grades: {
        first: {
          title: 'Fall Semester',
          score: '95.67',
          note: 'Rank #2 in Dept.',
        },
        second: {
          title: 'Spring Semester',
          score: '92.80',
          note: 'Consistent Performance',
        },
        overall: {
          title: 'Overall GPA',
          score: '94.23',
          note: 'Rank #2 in Dept.',
        },
      },
      coursesTitle: 'Key Courses',
      courses: {
        machineLearning: 'Machine Learning',
        deepLearning: 'Deep Learning',
        dataAnalysis: 'Multivariate Analysis',
        statistics: 'Advanced Statistics',
        optimization: 'Optimization Theory',
      },
    },
    awardsDetail: {
      title: 'Competition Awards',
      subtitle: 'Validating skills through competitions',
      items: {
        highway: {
          name: 'National Highway Traffic Competition',
          award: '2nd Place (1st Place Vacant)',
          description: 'Developed an AI traffic prediction system combining deep learning with physics-based shockwave theory. Invited to present at the 2025 Transportation Annual Conference.',
          tags: 'Deep Learning, GNN, Shockwave Theory, RAG',
        },
        sinica: {
          name: 'Academia Sinica Data Science Competition',
          award: 'Best Popular Poster & Merit Award',
          description: 'Research on internet usage behavior and cyberbullying correlation analysis, demonstrating excellent data analysis and research presentation skills.',
          tags: 'Multivariate Analysis, PCA, GAP',
        },
      },
    },
    eyWork: {
      company: 'Ernst & Young Taiwan',
      position: 'AI/ML Algorithm Engineer',
      period: '2025/07 - Present · Taipei, Taiwan',
      items: {
        rag: {
          title: 'RAG System Design',
          description: 'Leading architecture design & development of internal RAG knowledge management system',
        },
        recommendation: {
          title: 'ML Recommendation',
          description: 'FamilyMart project: Real-time product recommendation based on user behavior, profiles & nutritional data',
        },
        evaluation: {
          title: 'AI Model Evaluation',
          description: 'Assessing enterprise clients\' ML model fairness, explainability & AI capability metrics',
        },
        teaching: {
          title: 'Enterprise Mentor',
          description: 'Teaching RAG technology at NTU Accounting Dept. as EY corporate mentor (Feb - Jun 2026)',
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
        position: 'AI/ML Algorithm Engineer',
        period: '2025/07 - Present',
        location: 'Taipei, Taiwan',
        description: 'Working as an AI/ML Algorithm Engineer at EY Taiwan, one of the Big Four accounting firms globally, designing and developing enterprise-level AI solutions.',
        achievements: [
          'Leading architecture design & development of internal RAG knowledge management system',
          'FamilyMart project: Developing real-time ML product recommendation based on user behavior & nutritional data',
          'Assessing enterprise clients\' ML model fairness, explainability & AI capability metrics',
          'Teaching RAG technology at NTU Accounting Dept. as EY corporate mentor',
        ],
        tags: ['RAG', 'ML', 'Python', 'LLM'],
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
    copyright: '© 2025 Tim Wei. All rights reserved.',
    madeWith: 'Made with',
    and: 'and',
  },
}
