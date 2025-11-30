<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const certifications = [
  {
    name: 'Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    category: 'cloud',
    color: 'from-blue-500 to-cyan-500',
    icon: '☁️',
    description: '雲端基礎概念',
    descriptionEn: 'Cloud Fundamentals',
  },
  {
    name: 'Azure AI Fundamentals',
    code: 'AI-900',
    issuer: 'Microsoft',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
    description: 'AI 服務基礎',
    descriptionEn: 'AI Services Fundamentals',
  },
  {
    name: 'Azure Data Fundamentals',
    code: 'DP-900',
    issuer: 'Microsoft',
    category: 'data',
    color: 'from-green-500 to-emerald-500',
    icon: '📊',
    description: '資料服務基礎',
    descriptionEn: 'Data Services Fundamentals',
  },
  {
    name: 'SAS Base Programming',
    code: 'SAS Base',
    issuer: 'SAS Institute',
    category: 'data',
    color: 'from-blue-600 to-indigo-600',
    icon: '📈',
    description: 'SAS 程式設計認證',
    descriptionEn: 'SAS Programming Certified',
  },
  {
    name: 'AI Specialist',
    code: 'TQC+',
    issuer: 'CSF',
    category: 'ai',
    color: 'from-orange-500 to-red-500',
    icon: '🧠',
    description: '人工智慧專項',
    descriptionEn: 'AI Specialist Certificate',
  },
  {
    name: 'ESG Junior Manager',
    code: 'ESG',
    issuer: 'ESG International',
    category: 'other',
    color: 'from-teal-500 to-green-500',
    icon: '🌱',
    description: 'ESG 初階管理師',
    descriptionEn: 'ESG Junior Manager',
  },
]

const upcomingCerts = [
  { name: 'Red Hat RHCSA', status: 'preparing', icon: '🎩' },
]
</script>

<template>
  <section id="certifications" class="section-padding bg-white relative overflow-hidden">
    <!-- Background -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>

    <div class="section-container relative">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-accent-50 text-accent-600 rounded-full text-sm font-medium mb-4">
          {{ locale === 'zh-TW' ? '專業認證' : 'Certifications' }}
        </span>
        <h2 class="section-title">
          {{ locale === 'zh-TW' ? '持續學習是技術人員的核心競爭力' : 'Continuous Learning is Core Competitiveness' }}
        </h2>
      </div>

      <!-- Certifications Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in certifications"
          :key="cert.code"
          class="group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="card p-6 h-full border border-light-400 hover:border-primary-200 relative overflow-hidden">
            <!-- Background Gradient -->
            <div :class="['absolute top-0 right-0 w-32 h-32 opacity-10 bg-gradient-to-br rounded-bl-full', cert.color]"></div>

            <div class="relative">
              <!-- Header -->
              <div class="flex items-start justify-between mb-4">
                <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br text-white', cert.color]">
                  {{ cert.icon }}
                </div>
                <span class="px-3 py-1 bg-light-300 text-dark-400 rounded-full text-xs font-medium">
                  {{ cert.code }}
                </span>
              </div>

              <!-- Content -->
              <h3 class="font-bold text-primary-700 mb-1 group-hover:text-accent-600 transition-colors">
                {{ cert.name }}
              </h3>
              <p class="text-sm text-dark-300 mb-3">{{ cert.issuer }}</p>
              <p class="text-sm text-dark-400">
                {{ locale === 'zh-TW' ? cert.description : cert.descriptionEn }}
              </p>

              <!-- Verified Badge -->
              <div class="flex items-center gap-1 mt-4 text-green-600">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-xs font-medium">{{ locale === 'zh-TW' ? '已認證' : 'Verified' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming / In Progress -->
      <div class="mt-12" data-aos="fade-up" data-aos-delay="600">
        <div class="card p-6 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm">
                🎯
              </div>
              <div>
                <h4 class="font-bold text-primary-700">
                  {{ locale === 'zh-TW' ? '正在準備中' : 'In Preparation' }}
                </h4>
                <p class="text-sm text-dark-400">
                  {{ locale === 'zh-TW' ? '持續精進技術能力' : 'Continuously improving skills' }}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <div
                v-for="cert in upcomingCerts"
                :key="cert.name"
                class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm"
              >
                <span>{{ cert.icon }}</span>
                <span class="font-medium text-dark-500">{{ cert.name }}</span>
                <span class="px-2 py-0.5 bg-accent-100 text-accent-700 rounded text-xs">
                  {{ locale === 'zh-TW' ? '準備中' : 'Preparing' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
