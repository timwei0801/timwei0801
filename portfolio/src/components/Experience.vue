<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Lightbox state
const selectedImage = ref<string | null>(null)
const selectedImageTitle = ref<string>('')

const openLightbox = (image: string, title: string) => {
  selectedImage.value = image
  selectedImageTitle.value = title
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  selectedImageTitle.value = ''
  document.body.style.overflow = ''
}

// Handle ESC key to close lightbox
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && selectedImage.value) {
    closeLightbox()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
import eyTeamImage from '../assets/images/experience/ey-team.jpeg'
import eyLogo from '../assets/images/companies/EY.png'
import hengjiaLogo from '../assets/images/companies/hengjia.png'
import xindianLogo from '../assets/images/companies/xindian.png'
import azureLogo from '../assets/images/icons/MicrosoftAzure.jpeg'
import academiaSinicaLogo from '../assets/images/companies/academia-sinica.png'
import transportSocietyLogo from '../assets/images/companies/transport-society.png'
import tkuStatsLogo from '../assets/images/companies/tku-stats.png'
import sasLogo from '../assets/images/icons/SAS.png'
// Award/certificate images
import highwayCertImage from '../assets/images/experience/highway-certificate.jpeg'
import academiaSinicaAwardImage from '../assets/images/experience/academia-sinica-award.jpeg'
import aiCertImage from '../assets/images/experience/ai-cert.png'
import azureBadgeImage from '../assets/images/experience/azure-badge.png'
import sasCertImage from '../assets/images/experience/sas-cert.png'
import esgCertImage from '../assets/images/experience/esg-cert.png'
import tkuCommunityImage from '../assets/images/experience/tku-community.png'

const { t, locale } = useI18n()

const activeFilter = ref('all')

const filters = [
  { key: 'all', label: '全部', labelEn: 'All', icon: '📋' },
  { key: 'work', label: '工作經歷', labelEn: 'Work', icon: '💼' },
  { key: 'education', label: '學歷', labelEn: 'Education', icon: '🎓' },
  { key: 'certification', label: '專業證照', labelEn: 'Certifications', icon: '🏅' },
  { key: 'award', label: '競賽/獲獎', labelEn: 'Awards', icon: '🏆' },
  { key: 'service', label: '服務/演講', labelEn: 'Service', icon: '🤝' },
]

// Timeline items sorted by date (newest first)
const timelineItems = [
  // 2025/12
  {
    type: 'service',
    year: '2025',
    month: '12',
    title: '中華民國運輸學會年會',
    titleEn: 'Chinese Institute of Transportation Annual Conference',
    subtitle: '受邀演講嘉賓',
    subtitleEn: 'Invited Speaker',
    period: '2025/12',
    description: '受邀於中華民國運輸學會年會發表專題演講，分享國道智慧交通預測系統研究成果與深度學習在交通領域的創新應用。',
    descriptionEn: 'Invited to deliver a keynote speech at the national transportation conference, sharing research on highway traffic prediction and deep learning applications in transportation.',
    tags: ['Public Speaking', 'Research', 'Deep Learning'],
    logo: transportSocietyLogo,
    color: 'from-purple-500 to-indigo-600',
  },
  // 2025/11
  {
    type: 'certification',
    year: '2025',
    month: '11',
    title: 'Microsoft Azure 三項認證',
    titleEn: 'Microsoft Azure Triple Certifications',
    subtitle: 'AI-900 / AZ-900 / DP-900',
    subtitleEn: 'AI-900 / AZ-900 / DP-900',
    period: '2025/11',
    description: '同時取得 Azure AI 基礎、Azure 基礎與資料基礎三項 Microsoft 官方認證，全面掌握雲端與 AI 服務架構。',
    descriptionEn: 'Obtained three Microsoft Azure certifications simultaneously: AI Fundamentals, Azure Fundamentals, and Data Fundamentals.',
    tags: ['Azure', 'AI', 'Cloud', 'Data'],
    logo: azureLogo,
    color: 'from-blue-500 to-cyan-600',
    image: azureBadgeImage,
  },
  // 2025/10
  {
    type: 'award',
    year: '2025',
    month: '10',
    title: '國道智慧交通創新應用競賽',
    titleEn: 'National Highway Smart Traffic Innovation Competition',
    subtitle: '第二名',
    subtitleEn: '2nd Place',
    period: '2025/10',
    description: '參與高速公路局主辦之全國性競賽，開發整合深度學習時空神經網路與 LWR 物理震波理論的交通壅塞預測系統，從眾多團隊中脫穎而出。',
    descriptionEn: 'Developed traffic congestion prediction system integrating deep learning spatio-temporal networks and LWR shockwave theory, winning 2nd place in the national competition.',
    tags: ['Deep Learning', 'GNN', 'Traffic', 'Python'],
    icon: '🚗',
    color: 'from-green-500 to-emerald-600',
    image: highwayCertImage,
    github: 'https://github.com/timwei0801/Highway_trafficwave',
  },
  {
    type: 'award',
    year: '2025',
    month: '10',
    title: '淡江大學統計學系',
    titleEn: 'TKU Statistics Department',
    subtitle: '113-1 學期成績第二名',
    subtitleEn: '113-1 Semester 2nd Place',
    period: '2025/10',
    description: '研究所碩士班 113 學年度第一學期學業成績優異，獲得年級第二名殊榮。',
    descriptionEn: 'Achieved 2nd place in academic performance for the first semester of the 113 academic year in the graduate program.',
    tags: ['Academic', 'Excellence'],
    logo: tkuStatsLogo,
    color: 'from-blue-400 to-indigo-500',
  },
  // 2025/09
  {
    type: 'award',
    year: '2025',
    month: '09',
    title: '主計獎學金',
    titleEn: 'Accounting and Statistics Scholarship',
    subtitle: '獎學金得獎人',
    subtitleEn: 'Scholarship Recipient',
    period: '2025/09',
    description: '榮獲主計獎學金，表彰統計專業領域的學術表現與研究潛力。',
    descriptionEn: 'Received the Accounting and Statistics Scholarship, recognizing academic excellence and research potential in statistics.',
    tags: ['Scholarship', 'Statistics'],
    icon: '🏅',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    type: 'award',
    year: '2025',
    month: '09',
    title: '優良教學助理',
    titleEn: 'Outstanding Teaching Assistant',
    subtitle: '提名候選人',
    subtitleEn: 'Nominee',
    period: '2025/09',
    description: '因協助教授課程教學表現優異，獲提名為優良教學助理候選人。',
    descriptionEn: 'Nominated as Outstanding Teaching Assistant candidate for excellent performance in assisting course instruction.',
    tags: ['Teaching', 'Leadership'],
    icon: '👨‍🏫',
    color: 'from-teal-400 to-cyan-500',
  },
  // 2025/07
  {
    type: 'work',
    year: '2025',
    month: '07',
    title: '安永聯合會計師事務所',
    titleEn: 'Ernst & Young (EY Taiwan)',
    subtitle: '全端開發實習生',
    subtitleEn: 'Full-Stack Developer Intern',
    period: '2025/07 - Present',
    location: 'Taipei',
    description: '於全球四大會計師事務所之一的 EY 台灣擔任技術部門全端開發實習生，負責企業級專案管理系統的前後端開發，運用 Vue.js 打造高效能用戶介面，並主導 Python 自動化流程優化專案。',
    descriptionEn: 'Full-stack development intern at EY Taiwan (Big Four), responsible for enterprise project management system development. Building high-performance user interfaces with Vue.js and leading Python automation initiatives.',
    achievements: [
      '獨立負責 Vue.js 前端模組開發，實現組件化架構與 RESTful API 整合',
      '優化頁面載入效能 40%，導入懶加載與虛擬滾動技術',
      '開發 Python 自動化爬蟲系統，每週節省 10+ 小時人工作業',
    ],
    achievementsEn: [
      'Led Vue.js frontend module development with component-based architecture and RESTful API integration',
      'Improved page load performance by 40% through lazy loading and virtual scrolling',
      'Developed Python automation system, saving 10+ hours of manual work weekly',
    ],
    tags: ['Vue.js', 'Python', 'Spring Boot', 'Linux'],
    logo: eyLogo,
    color: 'from-yellow-400 to-yellow-600',
    image: eyTeamImage,
    highlight: true,
  },
  // 2025/02
  {
    type: 'award',
    year: '2025',
    month: '02',
    title: '淡江大學統計學系',
    titleEn: 'TKU Statistics Department',
    subtitle: '112-2 學期成績第二名',
    subtitleEn: '112-2 Semester 2nd Place',
    period: '2025/02',
    description: '研究所碩士班 112 學年度第二學期學業成績優異，獲得年級第二名殊榮。',
    descriptionEn: 'Achieved 2nd place in academic performance for the second semester of the 112 academic year in the graduate program.',
    tags: ['Academic', 'Excellence'],
    logo: tkuStatsLogo,
    color: 'from-blue-400 to-indigo-500',
  },
  // 2024/11
  {
    type: 'award',
    year: '2024',
    month: '11',
    title: '中研院統計所海報競賽',
    titleEn: 'Academia Sinica Statistics Poster Competition',
    subtitle: '最佳海報獎 & 評審團特別獎',
    subtitleEn: 'Best Poster Award & Jury Special Award',
    period: '2024/11',
    description: '以「網路使用行為與霸凌傾向關聯性研究」參加中研院資料科學漫步海報競賽，運用廣義關聯圖 (GAP) 等多變量統計方法進行創新分析，獲得雙項殊榮。',
    descriptionEn: 'Won dual awards for research on "Internet Usage and Bullying Tendency" using innovative multivariate statistical methods including Generalized Association Plot (GAP).',
    tags: ['Statistics', 'Research', 'Data Analysis'],
    logo: academiaSinicaLogo,
    color: 'from-purple-500 to-pink-500',
    image: academiaSinicaAwardImage,
    github: 'https://github.com/timwei0801/MVA-Internet-use-and-bullying',
  },
  // 2024/09
  {
    type: 'education',
    year: '2024',
    month: '09',
    title: '淡江大學統計學研究所',
    titleEn: 'Tamkang University Graduate Institute of Statistics',
    subtitle: '數據科學碩士班',
    subtitleEn: 'Master of Data Science',
    period: '2024/09 - Present',
    location: 'New Taipei',
    description: '進入淡江大學統計學研究所數據科學碩士班深造，專注於機器學習、深度學習與統計建模研究，結合理論基礎與實務應用。',
    descriptionEn: 'Pursuing Master\'s degree in Data Science at TKU Graduate Institute of Statistics, focusing on machine learning, deep learning, and statistical modeling research.',
    tags: ['Data Science', 'Machine Learning', 'Statistics'],
    logo: tkuStatsLogo,
    color: 'from-red-500 to-rose-600',
    highlight: true,
  },
  // 2024/05
  {
    type: 'certification',
    year: '2024',
    month: '05',
    title: 'ESG 初階管理師',
    titleEn: 'ESG Foundation Manager',
    subtitle: '永續管理認證',
    subtitleEn: 'Sustainability Management Certification',
    period: '2024/05',
    description: '完成 ESG 初階管理師專業培訓認證，掌握企業永續發展策略與碳盤查實務基礎。',
    descriptionEn: 'Completed ESG foundation manager certification, mastering corporate sustainability strategies and carbon inventory basics.',
    tags: ['ESG', 'Sustainability'],
    icon: '🌱',
    color: 'from-green-400 to-teal-500',
    image: esgCertImage,
  },
  // 2024/02
  {
    type: 'work',
    year: '2024',
    month: '02',
    title: '亨嘉企業有限公司',
    titleEn: 'Heng Jia Enterprise Co., Ltd.',
    subtitle: 'ESG 永續服務實習生',
    subtitleEn: 'ESG Services Intern',
    period: '2024/02 - 2024/05',
    location: 'Taipei',
    description: '擔任 ESG 永續服務部門實習生，負責企業客戶開發與永續解決方案推廣，累積 B2B 商務溝通與專案提案實戰經驗。',
    descriptionEn: 'ESG services intern responsible for enterprise client development and sustainability solution promotion, gaining B2B communication and project proposal experience.',
    achievements: [
      '協助 10+ 家企業客戶進行永續發展諮詢服務',
      '參與 ESG 報告書編撰，掌握 GRI 準則應用',
      '規劃碳盤查認證培訓課程內容',
    ],
    achievementsEn: [
      'Provided sustainability consulting for 10+ enterprise clients',
      'Participated in ESG report writing with GRI standards',
      'Planned carbon inventory certification training programs',
    ],
    tags: ['ESG', 'Consulting', 'B2B'],
    logo: hengjiaLogo,
    color: 'from-green-400 to-emerald-600',
  },
  // 2023/10
  {
    type: 'certification',
    year: '2023',
    month: '10',
    title: '人工智慧專項證照',
    titleEn: 'Artificial Intelligence Specialty Certificate',
    subtitle: 'AI 專業認證',
    subtitleEn: 'AI Professional Certification',
    period: '2023/10',
    description: '取得人工智慧專項認證，驗證在 AI 理論與應用方面的專業知識。',
    descriptionEn: 'Obtained AI specialty certification, validating professional knowledge in AI theory and applications.',
    tags: ['AI', 'Machine Learning'],
    icon: '🤖',
    color: 'from-violet-500 to-purple-600',
    image: aiCertImage,
  },
  // 2023/05
  {
    type: 'certification',
    year: '2023',
    month: '05',
    title: 'SAS Certified Specialist',
    titleEn: 'SAS Certified Specialist',
    subtitle: 'Base Programming Using SAS 9.4',
    subtitleEn: 'Base Programming Using SAS 9.4',
    period: '2023/05',
    description: '通過 SAS 官方認證考試，具備專業數據處理與統計程式設計能力。',
    descriptionEn: 'Passed SAS official certification exam with professional data processing and statistical programming capabilities.',
    tags: ['SAS', 'Statistics', 'Data'],
    logo: sasLogo,
    color: 'from-blue-600 to-cyan-500',
    image: sasCertImage,
  },
  // 2021/07
  {
    type: 'work',
    year: '2021',
    month: '07',
    title: '新北市新店區公所',
    titleEn: 'New Taipei City Xindian District Office',
    subtitle: '行政實習生',
    subtitleEn: 'Administrative Intern',
    period: '2021/07 - 2021/09',
    location: 'New Taipei',
    description: '於政府機關進行暑期行政實習，深入了解公部門運作流程，培養公文撰寫與行政事務處理能力。',
    descriptionEn: 'Government administrative internship, gaining understanding of public sector operations and developing document writing and administrative skills.',
    achievements: [
      '協助區公所日常行政業務處理',
      '學習公文系統操作與檔案管理',
      '參與區民服務工作，提升溝通能力',
    ],
    achievementsEn: [
      'Assisted with daily administrative operations',
      'Learned document system operations and file management',
      'Participated in citizen services, improving communication skills',
    ],
    tags: ['Administration', 'Government', 'Public Service'],
    logo: xindianLogo,
    color: 'from-blue-400 to-blue-600',
  },
  // 2021/05
  {
    type: 'service',
    year: '2021',
    month: '05',
    title: '淡江大學社區服務',
    titleEn: 'TKU Community Service',
    subtitle: '志工服務',
    subtitleEn: 'Volunteer Service',
    period: '2021/05',
    description: '參與淡江大學社區服務活動，投入志工服務，培養社會責任感與團隊合作精神。',
    descriptionEn: 'Participated in TKU community service activities as a volunteer, developing social responsibility and teamwork skills.',
    tags: ['Volunteer', 'Community', 'Service'],
    icon: '🤝',
    color: 'from-orange-400 to-red-500',
    image: tkuCommunityImage,
  },
  // 2020/09
  {
    type: 'education',
    year: '2020',
    month: '09',
    title: '淡江大學統計學系',
    titleEn: 'Tamkang University Department of Statistics',
    subtitle: '統計學學士',
    subtitleEn: 'Bachelor of Statistics',
    period: '2020/09 - 2024/06',
    location: 'New Taipei',
    description: '進入淡江大學統計學系就讀，奠定紮實的統計理論基礎，學習數據分析、機率論與統計推論等核心課程。',
    descriptionEn: 'Enrolled in TKU Department of Statistics, building a solid foundation in statistical theory, data analysis, probability, and statistical inference.',
    tags: ['Statistics', 'Data Analysis', 'Mathematics'],
    logo: tkuStatsLogo,
    color: 'from-red-500 to-rose-600',
  },
]

const filteredItems = () => {
  if (activeFilter.value === 'all') return timelineItems
  return timelineItems.filter(item => item.type === activeFilter.value)
}

const getTypeIcon = (type: string) => {
  const icons: Record<string, string> = {
    work: '💼',
    education: '🎓',
    certification: '🏅',
    award: '🏆',
    service: '🤝',
  }
  return icons[type] || '📌'
}

const getTypeBadge = (type: string) => {
  const badges: Record<string, { label: string, labelEn: string, class: string }> = {
    work: { label: '工作', labelEn: 'Work', class: 'bg-blue-100 text-blue-700' },
    education: { label: '學歷', labelEn: 'Education', class: 'bg-red-100 text-red-700' },
    certification: { label: '證照', labelEn: 'Cert', class: 'bg-purple-100 text-purple-700' },
    award: { label: '獲獎', labelEn: 'Award', class: 'bg-yellow-100 text-yellow-700' },
    service: { label: '服務', labelEn: 'Service', class: 'bg-green-100 text-green-700' },
  }
  return badges[type] || { label: '其他', labelEn: 'Other', class: 'bg-gray-100 text-gray-700' }
}
</script>

<template>
  <section id="experience" class="section-padding bg-light-300 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-hero-pattern opacity-50"></div>

    <div class="section-container relative">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
          {{ t('experience.title') }}
        </span>
        <h2 class="section-title">{{ t('experience.subtitle') }}</h2>
        <p class="text-dark-400 mt-4 max-w-2xl mx-auto">
          {{ locale === 'zh-TW' ? '我的專業成長旅程，從學術研究到業界實戰' : 'My professional growth journey, from academic research to industry practice' }}
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
        <button
          v-for="filter in filters"
          :key="filter.key"
          @click="activeFilter = filter.key"
          :class="[
            'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
            activeFilter === filter.key
              ? 'bg-primary-500 text-white shadow-lg'
              : 'bg-white text-dark-400 hover:bg-primary-50 hover:text-primary-600'
          ]"
        >
          <span>{{ filter.icon }}</span>
          {{ locale === 'zh-TW' ? filter.label : filter.labelEn }}
        </button>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-primary-500 to-primary-300 transform md:-translate-x-1/2"></div>

        <!-- Timeline Start - Future Growth -->
        <div class="relative mb-8" data-aos="fade-up">
          <div class="absolute left-8 md:left-1/2 w-8 h-8 bg-accent-500 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center shadow-lg animate-pulse">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
          <div class="text-center pb-4">
            <p class="text-accent-600 font-medium text-sm">
              {{ locale === 'zh-TW' ? '持續成長中...' : 'Continuing to grow...' }}
            </p>
          </div>
        </div>

        <!-- Year Markers will be calculated dynamically -->
        <TransitionGroup name="timeline" tag="div" class="space-y-8">
          <template v-for="(item, index) in filteredItems()" :key="`${item.year}-${item.month}-${item.title}`">
            <!-- Year Marker -->
            <div
              v-if="index === 0 || filteredItems()[index - 1]?.year !== item.year"
              class="relative flex items-center justify-center"
            >
              <div class="bg-primary-100 text-primary-700 px-6 py-2 rounded-full font-bold text-lg shadow-sm">
                {{ item.year }}
              </div>
            </div>

            <!-- Timeline Item -->
            <div
              :class="[
                'relative flex flex-col md:flex-row gap-6',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              ]"
              data-aos="fade-up"
              :data-aos-delay="(index % 5) * 50"
            >
              <!-- Timeline Dot with Icon -->
              <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div
                  :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg border-4 border-white',
                    item.highlight ? 'bg-accent-500 animate-pulse' : 'bg-white'
                  ]"
                >
                  {{ item.logo ? '' : (item.icon || getTypeIcon(item.type)) }}
                  <img v-if="item.logo" :src="item.logo" :alt="item.title" class="w-6 h-6 object-contain" />
                </div>
              </div>

              <!-- Content Card -->
              <div :class="['flex-1 ml-16 md:ml-0', index % 2 === 0 ? 'md:pr-16' : 'md:pl-16']">
                <div
                  :class="[
                    'card p-5 md:p-6 group hover:border-primary-200 border-2 transition-all duration-300',
                    item.highlight ? 'border-accent-400 shadow-lg' : 'border-transparent'
                  ]"
                >
                  <!-- Header -->
                  <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-1">
                        <!-- Type Badge -->
                        <span :class="['px-2 py-0.5 rounded-full text-xs font-medium', getTypeBadge(item.type).class]">
                          {{ locale === 'zh-TW' ? getTypeBadge(item.type).label : getTypeBadge(item.type).labelEn }}
                        </span>
                        <!-- Highlight Badge -->
                        <span v-if="item.highlight" class="px-2 py-0.5 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">
                          {{ locale === 'zh-TW' ? '進行中' : 'Current' }}
                        </span>
                      </div>
                      <h3 class="text-lg font-bold text-primary-700 group-hover:text-primary-600 transition-colors">
                        {{ locale === 'zh-TW' ? item.title : item.titleEn }}
                      </h3>
                      <p class="text-accent-600 font-medium text-sm">
                        {{ locale === 'zh-TW' ? item.subtitle : item.subtitleEn }}
                      </p>
                    </div>
                    <!-- Period -->
                    <div class="text-right">
                      <p class="text-sm font-medium text-dark-500">{{ item.period }}</p>
                      <p v-if="item.location" class="text-xs text-dark-300">{{ item.location }}</p>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-dark-400 text-sm mb-4 leading-relaxed">
                    {{ locale === 'zh-TW' ? item.description : item.descriptionEn }}
                  </p>

                  <!-- Achievements (for work/service items) -->
                  <ul v-if="item.achievements && item.achievements.length > 0" class="space-y-1.5 mb-4">
                    <li
                      v-for="(achievement, i) in (locale === 'zh-TW' ? item.achievements : item.achievementsEn)"
                      :key="i"
                      class="flex items-start gap-2 text-dark-400 text-sm"
                    >
                      <svg class="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ achievement }}
                    </li>
                  </ul>

                  <!-- Tags and GitHub Link -->
                  <div class="flex flex-wrap items-center gap-1.5">
                    <span
                      v-for="tag in item.tags"
                      :key="tag"
                      class="px-2.5 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium"
                    >
                      {{ tag }}
                    </span>
                    <!-- GitHub Link -->
                    <a
                      v-if="item.github"
                      :href="item.github"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="ml-auto flex items-center gap-1.5 px-3 py-1 bg-dark-500 text-white rounded-full text-xs font-medium hover:bg-primary-600 transition-colors"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {{ locale === 'zh-TW' ? '查看專案' : 'View Project' }}
                    </a>
                  </div>

                  <!-- Image (if exists) - Clickable for Lightbox -->
                  <div v-if="item.image" class="mt-4 rounded-xl overflow-hidden cursor-pointer group/img relative" @click="openLightbox(item.image, locale === 'zh-TW' ? item.title : item.titleEn)">
                    <img
                      :src="item.image"
                      :alt="item.title"
                      class="w-full h-40 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <!-- Hover overlay with zoom icon -->
                    <div class="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div class="opacity-0 group-hover/img:opacity-100 transform scale-75 group-hover/img:scale-100 transition-all duration-300">
                        <div class="bg-white/90 rounded-full p-3 shadow-lg">
                          <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty space for timeline alignment -->
              <div class="hidden md:block flex-1"></div>
            </div>
          </template>
        </TransitionGroup>
      </div>

      <!-- Timeline End -->
      <div class="relative mt-8" data-aos="fade-up">
        <div class="absolute left-8 md:left-1/2 w-6 h-6 bg-primary-300 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
          <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
        </div>
        <div class="text-center pt-8">
          <p class="text-dark-300 text-sm">
            {{ locale === 'zh-TW' ? '故事的起點' : 'Where it all began' }}
          </p>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          @click="closeLightbox"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

          <!-- Image Container -->
          <div class="relative max-w-5xl max-h-full" @click.stop>
            <!-- Close Button -->
            <button
              @click="closeLightbox"
              class="absolute -top-12 right-0 md:top-2 md:-right-12 text-white hover:text-accent-400 transition-colors z-10"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Image -->
            <img
              :src="selectedImage"
              :alt="selectedImageTitle"
              class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />

            <!-- Title -->
            <p class="text-white text-center mt-4 text-lg font-medium">{{ selectedImageTitle }}</p>

            <!-- Hint -->
            <p class="text-white/50 text-center mt-2 text-sm">
              {{ locale === 'zh-TW' ? '點擊任意處或按 ESC 關閉' : 'Click anywhere or press ESC to close' }}
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.timeline-enter-active,
.timeline-leave-active {
  transition: all 0.4s ease;
}

.timeline-enter-from,
.timeline-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.timeline-move {
  transition: transform 0.4s ease;
}

/* Lightbox transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .relative,
.lightbox-leave-to .relative {
  transform: scale(0.9);
}

.lightbox-enter-active .relative,
.lightbox-leave-active .relative {
  transition: transform 0.3s ease;
}
</style>
