<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Import tech stack icons
import vueIcon from '../assets/images/icons/Vue.png'
import reactIcon from '../assets/images/icons/react.png'
import pythonIcon from '../assets/images/icons/python.png'
import typescriptIcon from '../assets/images/icons/typescript.png'
import deepLearningIcon from '../assets/images/icons/DeepLearning.png'
import dataScienceIcon from '../assets/images/icons/DataScience.png'

const { t } = useI18n()

// Active expanded card
const activeCard = ref<string | null>(null)

const toggleCard = (key: string) => {
  if (activeCard.value === key) {
    // 點擊同一張卡片時，收起
    activeCard.value = null
  } else {
    // 點擊不同卡片時，直接切換（不需要先關閉）
    activeCard.value = key
  }
}

const highlights = [
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>`,
    key: 'education',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 via-white to-cyan-50',
    borderColor: 'border-blue-200/50',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    key: 'awards',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 via-white to-emerald-50',
    borderColor: 'border-green-200/50',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
    key: 'eyWork',
    color: 'from-accent-500 to-yellow-500',
    bgColor: 'from-accent-50 via-white to-yellow-50',
    borderColor: 'border-accent-200/50',
  },
]

const techStack = [
  { name: 'Vue.js', icon: vueIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Deep Learning', icon: deepLearningIcon },
  { name: 'Data Science', icon: dataScienceIcon },
]

// EY Work Responsibilities
const eyWorkItems = [
  { icon: '🤖', key: 'rag' },
  { icon: '🛒', key: 'recommendation' },
  { icon: '📊', key: 'evaluation' },
  { icon: '🎓', key: 'teaching' },
]
</script>

<template>
  <section id="about" class="section-padding bg-white relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-light-300 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

    <div class="section-container relative">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
          {{ t('about.title') }}
        </span>
        <h2 class="section-title">
          {{ t('about.subtitle') }}
        </h2>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
        <!-- Left Content - Introduction -->
        <div data-aos="fade-right" data-aos-delay="100">
          <div class="space-y-6">
            <p class="text-lg text-dark-400 leading-relaxed">
              {{ t('about.intro') }}
            </p>
            <p class="text-lg text-dark-400 leading-relaxed">
              {{ t('about.philosophy') }}
            </p>

            <!-- Tech Stack -->
            <div class="pt-6">
              <p class="text-sm font-medium text-dark-300 mb-4">Tech I work with:</p>
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="tech in techStack"
                  :key="tech.name"
                  class="flex items-center gap-2 px-4 py-2 bg-light-300 rounded-xl hover:bg-primary-50 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <img :src="tech.icon" :alt="tech.name" class="w-6 h-6 object-contain" />
                  <span class="text-sm font-medium text-dark-500">{{ tech.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Clickable Highlight Cards -->
        <div class="space-y-4" data-aos="fade-left" data-aos-delay="200">
          <div
            v-for="(highlight, index) in highlights"
            :key="highlight.key"
            @click="toggleCard(highlight.key)"
            class="group relative p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer border"
            :style="{
              borderColor: activeCard === highlight.key ? 'rgb(96, 165, 250)' : 'rgb(229, 231, 235)',
              boxShadow: activeCard === highlight.key ? '0 0 0 2px rgb(96, 165, 250)' : 'none'
            }"
            :data-aos="'fade-up'"
            :data-aos-delay="200 + index * 100"
          >
            <div class="flex items-start gap-4">
              <!-- Icon -->
              <div
                :class="[
                  'w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br',
                  highlight.color
                ]"
                v-html="highlight.icon"
              ></div>

              <!-- Content -->
              <div class="flex-1">
                <p class="text-sm text-dark-300 mb-1">
                  {{ t(`about.highlights.${highlight.key}.title`) }}
                </p>
                <p class="text-2xl font-bold text-primary-700 mb-1">
                  {{ t(`about.highlights.${highlight.key}.value`) }}
                </p>
                <p class="text-sm text-dark-400">
                  {{ t(`about.highlights.${highlight.key}.description`) }}
                </p>
              </div>

              <!-- Expand Indicator -->
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
                :style="{
                  backgroundColor: activeCard === highlight.key ? 'rgb(219, 234, 254)' : 'rgb(243, 244, 246)'
                }"
              >
                <svg
                  class="w-5 h-5 transition-all duration-300"
                  :style="{
                    color: activeCard === highlight.key ? 'rgb(59, 130, 246)' : 'rgb(156, 163, 175)',
                    transform: activeCard === highlight.key ? 'rotate(180deg)' : 'rotate(0deg)'
                  }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Click hint -->
            <p
              class="text-xs text-dark-300 mt-3 transition-opacity"
              :style="{
                opacity: activeCard === highlight.key ? 1 : 0
              }"
            >
              {{ activeCard === highlight.key ? t('about.clickToCollapse') : t('about.clickToExpand') }}
            </p>

            <!-- Decorative Element -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>

      <!-- Expanded Detail Section -->
      <transition
        mode="out-in"
        enter-active-class="transition-all duration-400 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="activeCard" :key="activeCard" class="mt-8 overflow-hidden">
          <!-- Education Detail -->
          <div
            v-if="activeCard === 'education'"
            class="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl p-8 lg:p-10 border border-blue-200/50 shadow-lg overflow-hidden"
          >
            <!-- Background Pattern -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl"></div>

            <!-- Header -->
            <div class="relative flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-dark-600">{{ t('about.educationDetail.school') }}</h3>
                <p class="text-blue-600 font-medium">{{ t('about.educationDetail.degree') }}</p>
                <p class="text-sm text-dark-300">{{ t('about.educationDetail.period') }}</p>
              </div>
            </div>

            <!-- Grades Grid -->
            <div class="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div
                v-for="(semester, index) in ['first', 'second', 'overall']"
                :key="semester"
                class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-blue-100/50 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div class="text-3xl mb-2">{{ index === 0 ? '📚' : index === 1 ? '📖' : '🏆' }}</div>
                <h4 class="font-semibold text-dark-600 mb-1">{{ t(`about.educationDetail.grades.${semester}.title`) }}</h4>
                <p class="text-2xl font-bold text-blue-600">{{ t(`about.educationDetail.grades.${semester}.score`) }}</p>
                <p class="text-sm text-dark-400">{{ t(`about.educationDetail.grades.${semester}.note`) }}</p>
              </div>
            </div>

            <!-- Courses -->
            <div class="relative">
              <h4 class="font-semibold text-dark-600 mb-3">{{ t('about.educationDetail.coursesTitle') }}</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="course in ['machineLearning', 'deepLearning', 'dataAnalysis', 'statistics', 'optimization']"
                  :key="course"
                  class="px-3 py-1 bg-white/70 text-dark-500 text-sm font-medium rounded-full border border-blue-100/50"
                >
                  {{ t(`about.educationDetail.courses.${course}`) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Awards Detail -->
          <div
            v-if="activeCard === 'awards'"
            class="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-3xl p-8 lg:p-10 border border-green-200/50 shadow-lg overflow-hidden"
          >
            <!-- Background Pattern -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-2xl"></div>

            <!-- Header -->
            <div class="relative flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-dark-600">{{ t('about.awardsDetail.title') }}</h3>
                <p class="text-green-600 font-medium">{{ t('about.awardsDetail.subtitle') }}</p>
              </div>
            </div>

            <!-- Awards Grid -->
            <div class="relative grid sm:grid-cols-2 gap-4">
              <div
                v-for="award in ['highway', 'sinica']"
                :key="award"
                class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-green-100/50 hover:border-green-300 hover:shadow-md transition-all duration-300"
              >
                <div class="flex items-start gap-3 mb-3">
                  <span class="text-3xl">{{ award === 'highway' ? '🥈' : '🏅' }}</span>
                  <div>
                    <h4 class="font-semibold text-dark-600">{{ t(`about.awardsDetail.items.${award}.name`) }}</h4>
                    <p class="text-sm text-green-600 font-medium">{{ t(`about.awardsDetail.items.${award}.award`) }}</p>
                  </div>
                </div>
                <p class="text-sm text-dark-400 mb-3">{{ t(`about.awardsDetail.items.${award}.description`) }}</p>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="(tag, idx) in t(`about.awardsDetail.items.${award}.tags`).split(',')"
                    :key="idx"
                    class="px-2 py-0.5 bg-green-100/50 text-green-700 text-xs font-medium rounded-full"
                  >
                    {{ tag.trim() }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- EY Work Detail -->
          <div
            v-if="activeCard === 'eyWork'"
            class="relative bg-gradient-to-br from-accent-50 via-white to-yellow-50 rounded-3xl p-8 lg:p-10 border border-accent-200/50 shadow-lg overflow-hidden"
          >
            <!-- Background Pattern -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-full blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full blur-2xl"></div>

            <!-- Header -->
            <div class="relative flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-yellow-500 flex items-center justify-center shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-dark-600">{{ t('about.eyWork.company') }}</h3>
                <p class="text-accent-600 font-medium">{{ t('about.eyWork.position') }}</p>
                <p class="text-sm text-dark-300">{{ t('about.eyWork.period') }}</p>
              </div>
            </div>

            <!-- Work Items Grid -->
            <div class="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                v-for="item in eyWorkItems"
                :key="item.key"
                class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-accent-100/50 hover:border-accent-300 hover:shadow-md transition-all duration-300"
              >
                <div class="text-3xl mb-3">{{ item.icon }}</div>
                <h4 class="font-semibold text-dark-600 mb-2">{{ t(`about.eyWork.items.${item.key}.title`) }}</h4>
                <p class="text-sm text-dark-400 leading-relaxed">{{ t(`about.eyWork.items.${item.key}.description`) }}</p>
              </div>
            </div>

            <!-- Tags -->
            <div class="relative mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in ['RAG', 'ML Recommendation', 'Model Fairness', 'LLM', 'Python']"
                :key="tag"
                class="px-3 py-1 bg-white/70 text-dark-500 text-sm font-medium rounded-full border border-accent-100/50"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>
