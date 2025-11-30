<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const projects = [
  {
    title: '國道智慧交通預測系統',
    titleEn: 'Highway Traffic Prediction System',
    subtitle: '深度學習融合物理震波理論',
    subtitleEn: 'Deep Learning with Shockwave Theory',
    description: '採用雙引擎並行架構設計，整合深度學習預測引擎與物理震波偵測引擎，實現精準的交通壅塞預測與即時預警功能。',
    descriptionEn: 'Dual-engine architecture integrating deep learning prediction and physics-based shockwave detection for accurate traffic congestion prediction and real-time alerts.',
    features: ['MT-STNet 時空神經網路', 'LWR 交通流理論', 'RAG 智慧決策輔助', '即時視覺化儀表板'],
    featuresEn: ['MT-STNet Spatio-Temporal Network', 'LWR Traffic Flow Theory', 'RAG Decision Support', 'Real-time Dashboard'],
    tags: ['Deep Learning', 'GNN', 'Vue.js', 'Python', 'TypeScript'],
    github: 'https://github.com/timwei0801/Highway_trafficwave',
    color: 'from-blue-500 to-cyan-500',
    icon: '🚗',
  },
  {
    title: '網路行為研究分析',
    titleEn: 'Internet Behavior Research',
    subtitle: '探討網路使用與霸凌現象關聯',
    subtitleEn: 'Exploring Usage and Cyberbullying',
    description: '運用多變量分析方法探討不同群體的網路使用行為與霸凌傾向之關聯，首創將廣義關聯圖應用於網路霸凌行為研究。',
    descriptionEn: 'Multivariate analysis exploring internet usage patterns and bullying tendencies. Pioneered GAP application in cyberbullying research.',
    features: ['廣義關聯圖 (GAP)', '主成分分析 (PCA)', '因素分析與典型相關', '90%+ 預測準確率'],
    featuresEn: ['Generalized Association Plot', 'Principal Component Analysis', 'Factor & CCA Analysis', '90%+ Prediction Accuracy'],
    tags: ['Python', 'R', 'Statistical Analysis', 'Data Viz'],
    github: 'https://github.com/timwei0801/MVA-Internet-use-and-bullying',
    color: 'from-purple-500 to-pink-500',
    icon: '📊',
  },
  {
    title: 'ChartGenie 智圖精靈',
    titleEn: 'ChartGenie',
    subtitle: 'AI 驅動的智能視覺化推薦系統',
    subtitleEn: 'AI-Powered Visualization System',
    description: '透過 AI 技術降低資料視覺化的使用門檻，使用者可透過中文描述需求，系統自動推薦最適合的圖表類型並生成視覺化結果。',
    descriptionEn: 'AI-powered system lowering visualization barriers. Users describe needs in natural language, system recommends and generates appropriate charts.',
    features: ['LLM 自然語言理解', '30+ 圖表類型', '多格式檔案上傳', '自動報告生成'],
    featuresEn: ['LLM Natural Language', '30+ Chart Types', 'Multi-format Upload', 'Auto Report Generation'],
    tags: ['Vue.js', 'Python', 'LLM', 'Chart.js', 'D3.js'],
    color: 'from-green-500 to-emerald-500',
    icon: '📈',
  },
  {
    title: '德州撲克 AI 決策系統',
    titleEn: 'Texas Poker AI System',
    subtitle: '影像辨識與智能策略建議',
    subtitleEn: 'Image Recognition & Strategy',
    description: '結合影像辨識與人工智慧的德州撲克輔助決策系統，通過整合多種技術實現即時牌局分析和策略建議。',
    descriptionEn: 'Poker decision support combining image recognition and AI, achieving real-time game analysis and strategy recommendations.',
    features: ['95%+ 牌面辨識準確率', 'WebSocket 即時通訊', '500ms 內系統回應', 'MySQL 資料管理'],
    featuresEn: ['95%+ Card Recognition', 'WebSocket Real-time', '500ms Response Time', 'MySQL Data Management'],
    tags: ['Python', 'Node.js', 'Claude API', 'MySQL', 'WebSocket'],
    color: 'from-red-500 to-orange-500',
    icon: '🃏',
  },
]
</script>

<template>
  <section id="projects" class="section-padding bg-primary-700 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container relative">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-white/10 text-white/80 rounded-full text-sm font-medium mb-4">
          {{ t('projects.title') }}
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          {{ t('projects.subtitle') }}
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <!-- Top Gradient Bar -->
            <div :class="['h-1.5 bg-gradient-to-r', project.color]"></div>

            <div class="p-6 lg:p-8">
              <!-- Header -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div :class="['w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br', project.color]">
                    {{ project.icon }}
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
                      {{ locale === 'zh-TW' ? project.title : project.titleEn }}
                    </h3>
                    <p class="text-white/60 text-sm">
                      {{ locale === 'zh-TW' ? project.subtitle : project.subtitleEn }}
                    </p>
                  </div>
                </div>

                <!-- GitHub Link -->
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-accent-500 hover:text-primary-700 transition-all duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <!-- Description -->
              <p class="text-white/70 mb-6 leading-relaxed">
                {{ locale === 'zh-TW' ? project.description : project.descriptionEn }}
              </p>

              <!-- Features -->
              <div class="grid grid-cols-2 gap-2 mb-6">
                <div
                  v-for="(feature, i) in (locale === 'zh-TW' ? project.features : project.featuresEn)"
                  :key="i"
                  class="flex items-center gap-2 text-sm text-white/60"
                >
                  <svg class="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ feature }}
                </div>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Hover Glow Effect -->
            <div :class="['absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br pointer-events-none', project.color]"></div>
          </div>
        </div>
      </div>

      <!-- View More -->
      <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
        <a
          href="https://github.com/timwei0801"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-accent-500 hover:text-primary-700 transition-all duration-300 group"
        >
          {{ locale === 'zh-TW' ? '查看更多專案' : 'View More Projects' }}
          <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
