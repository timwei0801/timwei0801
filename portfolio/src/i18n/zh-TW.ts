export default {
  nav: {
    home: '首頁',
    about: '關於我',
    experience: '經歷',
    awards: '獲獎',
    projects: '專案',
    skills: '技能',
    certifications: '證照',
    contact: '聯絡',
  },
  hero: {
    greeting: '你好，我是',
    name: '魏祺紘',
    tagline: '數據科學碩士 / AI・ML 算法工程師',
    description: '持續學習，勇於創新，將 AI/ML 技術轉化為解決真實問題的力量。',
    cta: '了解更多',
    contact: '聯絡我',
    scrollDown: '向下滑動',
  },
  about: {
    title: '關於我',
    subtitle: '一位對人工智慧與機器學習充滿熱情的 AI/ML 算法工程師',
    intro: '我是一位對人工智慧與機器學習充滿熱忱的算法工程師，目前就讀統計學系數據科學碩士班，同時於安永聯合會計師事務所擔任 AI/ML 算法工程師，負責 RAG 系統設計、ML 推薦模型開發及 AI 模型評級。',
    philosophy: '我相信技術的價值在於解決真實世界的問題，因此持續追求將學術研究轉化為實務應用的能力。',
    clickToExpand: '點擊查看詳細內容',
    clickToCollapse: '點擊收起',
    highlights: {
      education: {
        title: '學術表現',
        value: '系排名第二',
        description: '碩一成績 94.23 分',
      },
      awards: {
        title: '競賽成果',
        value: '多項獲獎',
        description: '國道競賽、中研院',
      },
      eyWork: {
        title: '實務經歷',
        value: 'EY 安永',
        description: 'AI/ML 算法工程師',
      },
    },
    educationDetail: {
      school: '淡江大學',
      degree: '統計學系數據科學碩士班',
      period: '2024/09 - 至今',
      grades: {
        first: {
          title: '碩一上學期',
          score: '95.67',
          note: '系排名第二',
        },
        second: {
          title: '碩一下學期',
          score: '92.80',
          note: '持續優異表現',
        },
        overall: {
          title: '整體平均',
          score: '94.23',
          note: '系排名第二',
        },
      },
      coursesTitle: '主要修習課程',
      courses: {
        machineLearning: '機器學習',
        deepLearning: '深度學習',
        dataAnalysis: '多變量分析',
        statistics: '高等統計推論',
        optimization: '最佳化理論',
      },
    },
    awardsDetail: {
      title: '競賽獲獎紀錄',
      subtitle: '透過競賽驗證所學並挑戰自我',
      items: {
        highway: {
          name: '國道智慧交通管理競賽',
          award: '第二名（第一名從缺）',
          description: '開發結合深度學習與物理震波理論的 AI 交通預測系統，受邀至 2025 中華民國運輸學會年會演講。',
          tags: 'Deep Learning, GNN, 震波理論, RAG',
        },
        sinica: {
          name: '中研院資料科學漫步競賽',
          award: '最佳人氣海報獎 & 優選獎',
          description: '以網路使用行為與霸凌現象關聯分析研究，展現卓越的數據分析能力與研究成果表達力。',
          tags: '多變量分析, PCA, 廣義關聯圖',
        },
      },
    },
    eyWork: {
      company: 'EY 安永聯合會計師事務所',
      position: 'AI/ML 算法工程師',
      period: '2025/07 - 現在 · 台北市信義區',
      items: {
        rag: {
          title: 'RAG 系統設計',
          description: '主導公司內部轉型 RAG 知識管理系統的架構設計與開發',
        },
        recommendation: {
          title: 'ML 推薦模型',
          description: '全家專案：基於使用者習慣、個人資訊、商品營養素的即時商品推薦系統',
        },
        evaluation: {
          title: 'AI 模型評級',
          description: '評估企業客戶 ML 模型的公平性、可解釋性等 AI 能力指標',
        },
        teaching: {
          title: '企業導師',
          description: '以 EY 企業導師身份赴台大會計學系教授 RAG 技術（2026/02 - 06）',
        },
      },
    },
  },
  experience: {
    title: '工作經歷',
    subtitle: '從學術到業界的實戰歷練',
    items: [
      {
        company: '安永聯合會計師事務所',
        companyEn: 'Ernst & Young',
        position: 'AI/ML 算法工程師',
        period: '2025/07 - 現在',
        location: '台北市信義區',
        description: '於全球四大會計師事務所之一的安永台灣擔任 AI/ML 算法工程師，負責企業級 AI 解決方案的設計與開發。',
        achievements: [
          '主導公司內部轉型 RAG 知識管理系統的架構設計與開發',
          '全家專案：開發基於使用者習慣與商品營養素的即時 ML 商品推薦系統',
          '協助評估企業客戶 ML 模型的公平性、可解釋性等 AI 能力指標',
          '以 EY 企業導師身份赴台大會計學系教授 RAG 技術',
        ],
        tags: ['RAG', 'ML', 'Python', 'LLM'],
      },
      {
        company: '亨嘉企業有限公司',
        companyEn: 'Heng Jia Enterprise',
        position: 'ESG 永續服務實習生',
        period: '2024/02 - 2024/06',
        location: '台北市中山區',
        description: '負責企業客戶開發與 ESG 永續服務推廣，累積 B2B 客戶溝通與提案經驗。',
        achievements: [
          '永續顧問諮詢服務',
          'ESG 報告書撰寫協助',
          '碳盤查認證課程規劃',
        ],
        tags: ['ESG', '專案管理', 'B2B'],
      },
    ],
  },
  awards: {
    title: '獲獎經歷',
    subtitle: '透過競賽驗證所學並挑戰自我',
    items: [
      {
        title: '國道智慧交通管理競賽',
        award: '第二名（第一名從缺）',
        organization: '交通部高速公路局',
        year: '2025',
        description: '開發結合深度學習與物理震波理論的 AI 交通預測系統，受邀至 2025 中華民國運輸學會年會演講。',
        highlights: ['MT-STNet 深度學習模型', '物理震波理論應用', '受邀年會演講'],
      },
      {
        title: '資料科學漫步競賽',
        award: '最佳人氣海報獎 & 優選獎',
        organization: '中央研究院統計科學研究所',
        year: '2024',
        description: '以網路使用行為與霸凌現象關聯分析研究，展現卓越的數據分析能力與研究成果表達力。',
        highlights: ['模型準確率 90%+', '創新研究方法', '雙獎肯定'],
      },
    ],
  },
  projects: {
    title: '專案作品',
    subtitle: '從構想到實現的技術旅程',
    viewProject: '查看專案',
    viewDemo: '線上展示',
    items: [
      {
        title: '國道智慧交通預測系統',
        subtitle: '深度學習融合物理震波理論',
        description: '採用雙引擎並行架構設計，整合深度學習預測引擎與物理震波偵測引擎，實現精準的交通壅塞預測與即時預警功能。',
        features: [
          'MT-STNet 時空神經網路',
          'LWR 交通流理論應用',
          'RAG 智慧決策輔助',
          '即時視覺化儀表板',
        ],
        tags: ['Deep Learning', 'GNN', 'Vue.js', 'Python'],
        github: 'https://github.com/timwei0801/Highway_trafficwave',
      },
      {
        title: '網路行為研究分析',
        subtitle: '探討網路使用與霸凌現象關聯',
        description: '運用多變量分析方法探討不同群體的網路使用行為與霸凌傾向之關聯，首創將廣義關聯圖應用於網路霸凌行為研究。',
        features: [
          '廣義關聯圖 (GAP) 分析',
          '主成分分析 (PCA)',
          '因素分析與典型相關',
          '90%+ 預測準確率',
        ],
        tags: ['Python', 'R', 'Statistical Analysis', 'Data Visualization'],
        github: 'https://github.com/timwei0801/MVA-Internet-use-and-bullying',
      },
      {
        title: 'ChartGenie 智圖精靈',
        subtitle: 'AI 驅動的智能視覺化推薦系統',
        description: '透過 AI 技術降低資料視覺化的使用門檻，使用者可透過中文描述需求，系統自動推薦最適合的圖表類型並生成視覺化結果。',
        features: [
          'LLM 自然語言理解',
          '30+ 圖表類型支援',
          '多格式檔案上傳',
          '自動報告生成',
        ],
        tags: ['Vue.js', 'Python', 'LLM', 'Chart.js'],
      },
      {
        title: '德州撲克 AI 決策系統',
        subtitle: '影像辨識與智能策略建議',
        description: '結合影像辨識與人工智慧的德州撲克輔助決策系統，通過整合多種技術實現即時牌局分析和策略建議。',
        features: [
          '95%+ 牌面辨識準確率',
          'WebSocket 即時通訊',
          '500ms 內系統回應',
          'MySQL 資料管理',
        ],
        tags: ['Python', 'Node.js', 'Claude API', 'MySQL'],
      },
    ],
  },
  skills: {
    title: '技術能力',
    subtitle: '持續精進的技術棧',
    categories: {
      ai: {
        title: 'AI 與機器學習',
        skills: ['Deep Learning', 'GNN', 'RAG', 'LLM', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
      },
      frontend: {
        title: '前端開發',
        skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
      },
      backend: {
        title: '後端開發',
        skills: ['Python', 'Java', 'Spring Boot', 'Node.js', 'RESTful API', 'FastAPI'],
      },
      data: {
        title: '數據分析',
        skills: ['Python', 'R', 'SAS', 'Pandas', 'NumPy', 'Statistical Modeling'],
      },
      database: {
        title: '資料庫與工具',
        skills: ['SQL Server', 'MySQL', 'Git', 'Docker', 'Linux'],
      },
    },
  },
  certifications: {
    title: '專業認證',
    subtitle: '持續學習是技術人員的核心競爭力',
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
        name: '人工智慧專項證照',
        code: 'AI Specialist',
        issuer: 'TQC+',
        category: 'ai',
      },
      {
        name: 'ESG 初階管理師',
        code: 'ESG Manager',
        issuer: 'ESG International Institute',
        category: 'other',
      },
    ],
  },
  contact: {
    title: '聯絡我',
    subtitle: '期待與您交流',
    description: '無論是技術討論、合作機會，或是單純聊聊資料科學與開發，都歡迎透過以下方式與我聯繫。',
    email: 'Email',
    location: '地點',
    locationValue: '台北市，台灣',
    social: '社群連結',
  },
  footer: {
    copyright: '© 2025 Tim Wei. All rights reserved.',
    madeWith: 'Made with',
    and: 'and',
  },
}
