<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import eyTeamImage from '../assets/images/experience/ey-team.jpeg'

const { t, locale } = useI18n()

const experiences = [
  {
    company: '安永聯合會計師事務所',
    companyEn: 'Ernst & Young',
    position: '全端開發實習生',
    positionEn: 'Full-Stack Developer Intern',
    period: '2025/07 - Present',
    location: 'Taipei',
    description: '於全球四大會計師事務所之一的安永台灣擔任全端開發實習生，參與企業級專案管理系統的開發與維護工作。',
    descriptionEn: 'Working as a Full-Stack Developer Intern at EY Taiwan, developing and maintaining enterprise-level project management systems.',
    achievements: [
      '負責 Vue.js 前端介面開發，從元件設計到 API 串接',
      '進行頁面效能優化，實作懶加載機制',
      '主責 Python 自動化爬蟲腳本開發',
      '取得 Microsoft Azure 三項雲端認證',
    ],
    achievementsEn: [
      'Developed Vue.js frontend interfaces',
      'Optimized page performance with lazy loading',
      'Led Python automation web scraping project',
      'Obtained 3 Microsoft Azure certifications',
    ],
    tags: ['Vue.js', 'Python', 'Spring Boot', 'Linux'],
    logo: 'EY',
    color: 'from-yellow-400 to-yellow-600',
    image: eyTeamImage,
  },
  {
    company: '亨嘉企業有限公司',
    companyEn: 'Heng Jia Enterprise',
    position: 'ESG 永續服務實習生',
    positionEn: 'ESG Services Intern',
    period: '2024/02 - 2024/06',
    location: 'Taipei',
    description: '負責企業客戶開發與 ESG 永續服務推廣，累積 B2B 客戶溝通與提案經驗。',
    descriptionEn: 'Responsible for enterprise client development and ESG sustainability services promotion.',
    achievements: [
      '永續顧問諮詢服務',
      'ESG 報告書撰寫協助',
      '碳盤查認證課程規劃',
    ],
    achievementsEn: [
      'Sustainability consulting services',
      'ESG report writing assistance',
      'Carbon inventory certification planning',
    ],
    tags: ['ESG', 'Project Management', 'B2B'],
    logo: 'HJ',
    color: 'from-green-400 to-emerald-600',
  },
  {
    company: '新北市新店區公所',
    companyEn: 'Xindian District Office',
    position: '行政實習生',
    positionEn: 'Administrative Intern',
    period: '2021/07 - 2021/09',
    location: 'New Taipei',
    description: '政府機關行政實習，學習公部門作業流程。',
    descriptionEn: 'Government administrative internship, learning public sector operations.',
    achievements: [
      '協助行政業務處理',
      '公文系統操作',
    ],
    achievementsEn: [
      'Administrative support',
      'Document system operations',
    ],
    tags: ['Administration', 'Government'],
    logo: 'Gov',
    color: 'from-blue-400 to-blue-600',
  },
]
</script>

<template>
  <section id="experience" class="section-padding bg-light-300 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-hero-pattern opacity-50"></div>

    <div class="section-container relative">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
          {{ t('experience.title') }}
        </span>
        <h2 class="section-title">{{ t('experience.subtitle') }}</h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-300 transform md:-translate-x-1/2"></div>

        <!-- Experience Items -->
        <div class="space-y-12">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.company"
            :class="[
              'relative flex flex-col md:flex-row gap-8',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            ]"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>

            <!-- Content Card -->
            <div :class="['flex-1 ml-16 md:ml-0', index % 2 === 0 ? 'md:pr-12' : 'md:pl-12']">
              <div class="card p-6 md:p-8 group hover:border-primary-200 border border-transparent">
                <div class="flex flex-col sm:flex-row gap-4 mb-4">
                  <!-- Company Logo -->
                  <div
                    :class="[
                      'w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br',
                      exp.color
                    ]"
                  >
                    {{ exp.logo }}
                  </div>

                  <!-- Header -->
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-primary-700">
                      {{ locale === 'zh-TW' ? exp.company : exp.companyEn }}
                    </h3>
                    <p class="text-accent-600 font-medium">
                      {{ locale === 'zh-TW' ? exp.position : exp.positionEn }}
                    </p>
                    <div class="flex items-center gap-4 text-sm text-dark-300 mt-1">
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ exp.period }}
                      </span>
                      <span class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {{ exp.location }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Description -->
                <p class="text-dark-400 mb-4">
                  {{ locale === 'zh-TW' ? exp.description : exp.descriptionEn }}
                </p>

                <!-- Achievements -->
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="(achievement, i) in (locale === 'zh-TW' ? exp.achievements : exp.achievementsEn)"
                    :key="i"
                    class="flex items-start gap-2 text-dark-400"
                  >
                    <svg class="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ achievement }}
                  </li>
                </ul>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in exp.tags"
                    :key="tag"
                    class="tech-tag"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Image (if exists) -->
                <div v-if="exp.image" class="mt-6 rounded-xl overflow-hidden">
                  <img
                    :src="exp.image"
                    :alt="exp.company"
                    class="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <!-- Empty space for timeline alignment -->
            <div class="hidden md:block flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
