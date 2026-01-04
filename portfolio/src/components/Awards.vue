<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import highwayAward from '../assets/images/awards/highway-award.jpeg'
import academiaSinicaAward from '../assets/images/awards/academia-sinica-award.jpeg'

const { t, locale } = useI18n()

// Modal state
const showModal = ref(false)
const selectedAward = ref<typeof awards[0] | null>(null)

const openModal = (award: typeof awards[0]) => {
  selectedAward.value = award
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedAward.value = null
  document.body.style.overflow = ''
}

// ESC key to close modal
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const awards = [
  {
    title: '國道智慧交通管理競賽',
    titleEn: 'National Highway Intelligent Traffic Competition',
    award: '第二名（第一名從缺）',
    awardEn: '2nd Place (1st Place Vacant)',
    organization: '交通部高速公路局',
    organizationEn: 'Taiwan Freeway Bureau',
    year: '2025',
    description: '開發結合深度學習與物理震波理論的 AI 交通預測系統，受邀至 2025 中華民國運輸學會年會演講。',
    descriptionEn: 'Developed an AI traffic prediction system combining deep learning with physics-based shockwave theory. Invited to present at the 2025 Chinese Institute of Transportation Annual Conference.',
    fullDescription: '本專案開發了一套結合深度學習與物理震波理論的創新 AI 交通預測系統。我們採用 MT-STNet (Multi-Task Spatial-Temporal Network) 架構，整合交通流量、車速與密度等多維度數據，實現高精度的短期交通預測。系統特色在於將物理震波理論融入深度學習模型，使預測結果具備物理可解釋性。本研究成果受到評審高度肯定，獲邀至 2025 中華民國運輸學會年會進行專題演講。',
    fullDescriptionEn: 'This project developed an innovative AI traffic prediction system combining deep learning with physics-based shockwave theory. We adopted the MT-STNet (Multi-Task Spatial-Temporal Network) architecture, integrating multi-dimensional data including traffic flow, speed, and density to achieve high-precision short-term traffic prediction. The system\'s unique feature lies in incorporating physical shockwave theory into the deep learning model, making predictions physically interpretable. This research was highly recognized by judges and we were invited to present at the 2025 Chinese Institute of Transportation Annual Conference.',
    highlights: ['MT-STNet 深度學習模型', '物理震波理論應用', '受邀年會演講'],
    highlightsEn: ['MT-STNet Deep Learning', 'Shockwave Theory', 'Conference Speaker'],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'],
    teamSize: '4 人團隊',
    teamSizeEn: '4-member team',
    duration: '6 個月',
    durationEn: '6 months',
    image: highwayAward,
    icon: '🥈',
    color: 'from-amber-400 to-yellow-500',
    github: 'https://github.com/timwei0801/Highway_trafficwave',
    // 新增更多詳細資訊
    role: '技術負責人',
    roleEn: 'Technical Lead',
    problemStatement: '國道交通壅塞問題每年造成巨大的經濟損失與時間浪費，傳統預測方法難以準確捕捉交通流的動態變化。',
    problemStatementEn: 'Highway traffic congestion causes significant economic losses and time waste annually. Traditional prediction methods struggle to accurately capture the dynamic changes in traffic flow.',
    solution: '我們提出結合深度學習與物理震波理論的創新方法，利用 MT-STNet 模型同時預測多個交通指標，並透過震波理論提供物理約束，提升模型的可解釋性與準確性。',
    solutionEn: 'We proposed an innovative approach combining deep learning with physics-based shockwave theory. Using the MT-STNet model to simultaneously predict multiple traffic indicators, with shockwave theory providing physical constraints to improve model interpretability and accuracy.',
    keyFeatures: [
      { title: '多任務學習', titleEn: 'Multi-task Learning', desc: '同時預測流量、速度、密度', descEn: 'Simultaneously predict flow, speed, density' },
      { title: '物理融合', titleEn: 'Physics Integration', desc: '震波理論約束深度學習', descEn: 'Shockwave theory constrains deep learning' },
      { title: '時空建模', titleEn: 'Spatio-temporal Modeling', desc: '捕捉空間與時間相關性', descEn: 'Capture spatial and temporal correlations' },
      { title: '即時預測', titleEn: 'Real-time Prediction', desc: '5-30 分鐘短期預測', descEn: '5-30 minute short-term prediction' },
    ],
    results: [
      { metric: 'MAE 降低', metricEn: 'MAE Reduction', value: '15%', desc: '相比 baseline', descEn: 'vs baseline' },
      { metric: '預測準確率', metricEn: 'Prediction Accuracy', value: '92%', desc: '15分鐘預測', descEn: '15-min prediction' },
      { metric: '參賽隊伍', metricEn: 'Competing Teams', value: '50+', desc: '全國競賽', descEn: 'National competition' },
    ],
    learnings: '深入理解了交通流理論與深度學習的結合方式，掌握了時空序列預測的核心技術，同時提升了學術論文撰寫與演講表達能力。',
    learningsEn: 'Gained deep understanding of combining traffic flow theory with deep learning, mastered core techniques in spatio-temporal sequence prediction, and improved academic writing and presentation skills.',
  },
  {
    title: '資料科學漫步競賽',
    titleEn: 'Data Science Discovery Competition',
    award: '最佳人氣海報獎 & 優選獎',
    awardEn: 'Best Popular Poster & Merit Award',
    organization: '中央研究院統計科學研究所',
    organizationEn: 'Institute of Statistical Science, Academia Sinica',
    year: '2024',
    description: '以網路使用行為與霸凌現象關聯分析研究，展現卓越的數據分析能力與研究成果表達力。',
    descriptionEn: 'Research on internet usage behavior and cyberbullying correlation, demonstrating excellent data analysis and presentation skills.',
    fullDescription: '本研究深入探討青少年網路使用行為與校園霸凌現象之間的關聯性。透過多變量分析方法，我們分析了超過 5000 筆問卷數據，建立了預測霸凌風險的統計模型。研究發現特定的網路使用模式與霸凌行為存在顯著相關性。本專案在海報展示環節獲得最高人氣票數，同時以優異的研究品質獲得優選獎的肯定。',
    fullDescriptionEn: 'This research investigated the correlation between adolescent internet usage behavior and school bullying phenomena. Through multivariate analysis methods, we analyzed over 5,000 survey responses and established a statistical model for predicting bullying risk. The study found significant correlations between specific internet usage patterns and bullying behavior. This project received the highest popular votes in the poster presentation session while also being recognized with the Merit Award for excellent research quality.',
    highlights: ['模型準確率 90%+', '創新研究方法', '雙獎肯定'],
    highlightsEn: ['90%+ Accuracy', 'Innovative Methodology', 'Dual Awards'],
    techStack: ['R', 'Python', 'SPSS', 'ggplot2', 'Statistical Modeling'],
    teamSize: '3 人團隊',
    teamSizeEn: '3-member team',
    duration: '4 個月',
    durationEn: '4 months',
    image: academiaSinicaAward,
    icon: '🏆',
    color: 'from-purple-400 to-indigo-500',
    github: 'https://github.com/timwei0801/MVA-Internet-use-and-bullying',
    // 新增更多詳細資訊
    role: '資料分析師',
    roleEn: 'Data Analyst',
    problemStatement: '校園霸凌是全球性的社會問題，但現有研究多著重於事後調查，缺乏預防性的風險預測機制。',
    problemStatementEn: 'School bullying is a global social issue, but existing research mostly focuses on post-incident investigations, lacking preventive risk prediction mechanisms.',
    solution: '運用多變量統計分析方法，建立網路使用行為與霸凌風險的預測模型，協助學校及早識別高風險學生並進行介入。',
    solutionEn: 'Using multivariate statistical analysis methods, we established a prediction model linking internet usage behavior to bullying risk, helping schools identify high-risk students early for intervention.',
    keyFeatures: [
      { title: '大樣本分析', titleEn: 'Large Sample Analysis', desc: '5000+ 問卷數據', descEn: '5000+ survey responses' },
      { title: '多變量模型', titleEn: 'Multivariate Model', desc: 'PCA、迴歸分析', descEn: 'PCA, Regression Analysis' },
      { title: '視覺化呈現', titleEn: 'Data Visualization', desc: '互動式圖表設計', descEn: 'Interactive chart design' },
      { title: '風險評估', titleEn: 'Risk Assessment', desc: '霸凌傾向預測', descEn: 'Bullying tendency prediction' },
    ],
    results: [
      { metric: '模型準確率', metricEn: 'Model Accuracy', value: '90%+', desc: '預測正確率', descEn: 'Prediction accuracy' },
      { metric: '人氣投票', metricEn: 'Popular Vote', value: '#1', desc: '最高票數', descEn: 'Highest votes' },
      { metric: '獲獎數', metricEn: 'Awards Won', value: '2', desc: '雙獎肯定', descEn: 'Dual recognition' },
    ],
    learnings: '精進了統計分析與資料視覺化技能，學習如何將複雜的分析結果轉化為易懂的視覺呈現，並在學術場合進行有效的研究成果發表。',
    learningsEn: 'Enhanced statistical analysis and data visualization skills, learned how to transform complex analytical results into understandable visual presentations, and effectively present research findings in academic settings.',
  },
]
</script>

<template>
  <section id="awards" class="section-padding bg-white relative overflow-hidden">
    <!-- Background -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container relative">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-accent-50 text-accent-600 rounded-full text-sm font-medium mb-4">
          {{ t('awards.title') }}
        </span>
        <h2 class="section-title">{{ t('awards.subtitle') }}</h2>
      </div>

      <!-- Awards Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="(award, index) in awards"
          :key="award.title"
          class="group cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
          @click="openModal(award)"
        >
          <div class="card overflow-hidden h-full border border-light-400 hover:border-accent-300 hover:shadow-xl transition-all duration-300">
            <!-- Image -->
            <div class="relative h-56 overflow-hidden">
              <img
                :src="award.image"
                :alt="award.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary-700/80 via-primary-700/20 to-transparent"></div>

              <!-- Click Hint -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="px-4 py-2 bg-white/90 backdrop-blur rounded-full text-primary-700 text-sm font-medium shadow-lg">
                  {{ locale === 'zh-TW' ? '點擊查看詳情' : 'Click for details' }}
                </div>
              </div>

              <!-- Award Badge -->
              <div class="absolute top-4 right-4">
                <div :class="['px-4 py-2 rounded-full text-white font-bold text-sm bg-gradient-to-r', award.color]">
                  {{ locale === 'zh-TW' ? award.award : award.awardEn }}
                </div>
              </div>

              <!-- Year Badge -->
              <div class="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center">
                <span class="text-2xl">{{ award.icon }}</span>
              </div>

              <!-- Title Overlay -->
              <div class="absolute bottom-4 left-4 right-4">
                <p class="text-white/80 text-sm mb-1">{{ award.year }}</p>
                <h3 class="text-xl font-bold text-white">
                  {{ locale === 'zh-TW' ? award.title : award.titleEn }}
                </h3>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Organization -->
              <div class="flex items-center gap-2 text-sm text-primary-600 mb-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {{ locale === 'zh-TW' ? award.organization : award.organizationEn }}
              </div>

              <!-- Description -->
              <p class="text-dark-400 mb-4 leading-relaxed">
                {{ locale === 'zh-TW' ? award.description : award.descriptionEn }}
              </p>

              <!-- Highlights -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="highlight in (locale === 'zh-TW' ? award.highlights : award.highlightsEn)"
                  :key="highlight"
                  class="inline-flex items-center gap-1 px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm"
                >
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ highlight }}
                </span>
              </div>

              <!-- GitHub Link -->
              <a
                v-if="award.github"
                :href="award.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-dark-500 text-white rounded-xl text-sm font-medium hover:bg-primary-600 transition-colors"
                @click.stop
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {{ locale === 'zh-TW' ? '查看專案原始碼' : 'View Source Code' }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Achievements -->
      <div class="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
        <div class="inline-flex items-center gap-4 px-6 py-4 bg-light-300 rounded-2xl">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🎓</span>
            <div class="text-left">
              <p class="text-sm text-dark-300">{{ locale === 'zh-TW' ? '碩一成績' : 'Master GPA' }}</p>
              <p class="font-bold text-primary-700">94.23 {{ locale === 'zh-TW' ? '分（系排第二）' : '(Rank #2)' }}</p>
            </div>
          </div>
          <div class="w-px h-10 bg-dark-200"></div>
          <div class="flex items-center gap-2">
            <span class="text-2xl">🏅</span>
            <div class="text-left">
              <p class="text-sm text-dark-300">{{ locale === 'zh-TW' ? '持續參與' : 'Ongoing' }}</p>
              <p class="font-bold text-primary-700">{{ locale === 'zh-TW' ? '巴黎人壽、土銀、台積電黑客松' : 'Multiple Hackathons' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal && selectedAward"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          <!-- Modal Content -->
          <div
            class="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            @click.stop
          >
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-dark-500 hover:bg-white hover:text-primary-600 transition-colors shadow-lg"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="overflow-y-auto max-h-[90vh]">
              <!-- Image Section -->
              <div class="relative h-72 md:h-96 overflow-hidden">
                <img
                  :src="selectedAward.image"
                  :alt="locale === 'zh-TW' ? selectedAward.title : selectedAward.titleEn"
                  class="w-full h-full object-cover"
                />
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary-800/90 via-primary-700/30 to-transparent"></div>

                <!-- Award Badge -->
                <div class="absolute top-4 left-4">
                  <div :class="['px-5 py-2.5 rounded-full text-white font-bold bg-gradient-to-r shadow-lg', selectedAward.color]">
                    {{ locale === 'zh-TW' ? selectedAward.award : selectedAward.awardEn }}
                  </div>
                </div>

                <!-- Title Overlay -->
                <div class="absolute bottom-6 left-6 right-6">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-4xl">{{ selectedAward.icon }}</span>
                    <span class="text-white/80">{{ selectedAward.year }}</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold text-white">
                    {{ locale === 'zh-TW' ? selectedAward.title : selectedAward.titleEn }}
                  </h3>
                </div>
              </div>

              <!-- Content Section -->
              <div class="p-6 md:p-8">
                <!-- Quick Info Bar -->
                <div class="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-light-400">
                  <!-- Organization -->
                  <div class="flex items-center gap-2 text-primary-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span class="font-medium text-sm">{{ locale === 'zh-TW' ? selectedAward.organization : selectedAward.organizationEn }}</span>
                  </div>
                  <span class="text-light-500">|</span>
                  <!-- Role -->
                  <div class="flex items-center gap-2 px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{ locale === 'zh-TW' ? selectedAward.role : selectedAward.roleEn }}
                  </div>
                  <span class="text-light-500">|</span>
                  <!-- Team Size -->
                  <div class="flex items-center gap-1.5 text-dark-400 text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {{ locale === 'zh-TW' ? selectedAward.teamSize : selectedAward.teamSizeEn }}
                  </div>
                  <span class="text-light-500">|</span>
                  <!-- Duration -->
                  <div class="flex items-center gap-1.5 text-dark-400 text-sm">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ locale === 'zh-TW' ? selectedAward.duration : selectedAward.durationEn }}
                  </div>
                </div>

                <!-- Results Stats -->
                <div class="grid grid-cols-3 gap-4 mb-8">
                  <div
                    v-for="result in selectedAward.results"
                    :key="result.metric"
                    class="text-center p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl"
                  >
                    <div class="text-2xl md:text-3xl font-bold text-primary-600 mb-1">{{ result.value }}</div>
                    <div class="text-sm font-medium text-dark-600">{{ locale === 'zh-TW' ? result.metric : result.metricEn }}</div>
                    <div class="text-xs text-dark-400">{{ locale === 'zh-TW' ? result.desc : result.descEn }}</div>
                  </div>
                </div>

                <!-- Problem & Solution -->
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                  <!-- Problem -->
                  <div class="p-5 bg-red-50 rounded-2xl border border-red-100">
                    <div class="flex items-center gap-2 mb-3">
                      <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h4 class="font-semibold text-red-800">{{ locale === 'zh-TW' ? '問題背景' : 'Problem' }}</h4>
                    </div>
                    <p class="text-sm text-red-700 leading-relaxed">
                      {{ locale === 'zh-TW' ? selectedAward.problemStatement : selectedAward.problemStatementEn }}
                    </p>
                  </div>
                  <!-- Solution -->
                  <div class="p-5 bg-green-50 rounded-2xl border border-green-100">
                    <div class="flex items-center gap-2 mb-3">
                      <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 class="font-semibold text-green-800">{{ locale === 'zh-TW' ? '解決方案' : 'Solution' }}</h4>
                    </div>
                    <p class="text-sm text-green-700 leading-relaxed">
                      {{ locale === 'zh-TW' ? selectedAward.solution : selectedAward.solutionEn }}
                    </p>
                  </div>
                </div>

                <!-- Key Features -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-dark-600 mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {{ locale === 'zh-TW' ? '核心功能' : 'Key Features' }}
                  </h4>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div
                      v-for="feature in selectedAward.keyFeatures"
                      :key="feature.title"
                      class="p-4 bg-light-200 rounded-xl text-center hover:bg-light-300 transition-colors"
                    >
                      <div class="font-medium text-dark-600 mb-1">{{ locale === 'zh-TW' ? feature.title : feature.titleEn }}</div>
                      <div class="text-xs text-dark-400">{{ locale === 'zh-TW' ? feature.desc : feature.descEn }}</div>
                    </div>
                  </div>
                </div>

                <!-- Tech Stack -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-dark-600 mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    {{ locale === 'zh-TW' ? '技術棧' : 'Tech Stack' }}
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in selectedAward.techStack"
                      :key="tech"
                      class="px-4 py-2 bg-primary-50 text-primary-700 rounded-xl text-sm font-medium border border-primary-100"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Highlights / Achievements -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-dark-600 mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    {{ locale === 'zh-TW' ? '主要成就' : 'Key Achievements' }}
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="highlight in (locale === 'zh-TW' ? selectedAward.highlights : selectedAward.highlightsEn)"
                      :key="highlight"
                      class="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      {{ highlight }}
                    </span>
                  </div>
                </div>

                <!-- Learnings -->
                <div class="mb-8 p-5 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
                  <h4 class="text-lg font-semibold text-dark-600 mb-3 flex items-center gap-2">
                    <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {{ locale === 'zh-TW' ? '學習心得' : 'Key Learnings' }}
                  </h4>
                  <p class="text-dark-500 leading-relaxed">
                    {{ locale === 'zh-TW' ? selectedAward.learnings : selectedAward.learningsEn }}
                  </p>
                </div>

                <!-- Action Button -->
                <div class="flex justify-center">
                  <a
                    v-if="selectedAward.github"
                    :href="selectedAward.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-8 py-4 bg-dark-500 text-white rounded-2xl font-medium hover:bg-primary-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {{ locale === 'zh-TW' ? '查看專案原始碼' : 'View Source Code' }}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}
</style>
