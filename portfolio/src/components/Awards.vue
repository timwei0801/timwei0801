<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import highwayAward from '../assets/images/awards/highway-award.jpeg'
import academiaSinicaAward from '../assets/images/awards/academia-sinica-award.jpeg'

const { t, locale } = useI18n()

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
    highlights: ['MT-STNet 深度學習模型', '物理震波理論應用', '受邀年會演講'],
    highlightsEn: ['MT-STNet Deep Learning', 'Shockwave Theory', 'Conference Speaker'],
    image: highwayAward,
    icon: '🥈',
    color: 'from-amber-400 to-yellow-500',
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
    highlights: ['模型準確率 90%+', '創新研究方法', '雙獎肯定'],
    highlightsEn: ['90%+ Accuracy', 'Innovative Methodology', 'Dual Awards'],
    image: academiaSinicaAward,
    icon: '🏆',
    color: 'from-purple-400 to-indigo-500',
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
          class="group"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="card overflow-hidden h-full border border-light-400 hover:border-accent-300">
            <!-- Image -->
            <div class="relative h-56 overflow-hidden">
              <img
                :src="award.image"
                :alt="award.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary-700/80 via-primary-700/20 to-transparent"></div>

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
              <div class="flex flex-wrap gap-2">
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
  </section>
</template>
