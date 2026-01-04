<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Import tech stack icons
import vueIcon from '../assets/images/icons/Vue.png'
import reactIcon from '../assets/images/icons/react.png'
import pythonIcon from '../assets/images/icons/python.png'
import typescriptIcon from '../assets/images/icons/typescript.png'
import deepLearningIcon from '../assets/images/icons/DeepLearning.png'
import dataScienceIcon from '../assets/images/icons/DataScience.png'

const { t } = useI18n()

const highlights = [
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>`,
    key: 'education',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
    key: 'awards',
    color: 'from-green-500 to-emerald-500',
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
  { icon: '💻', key: 'frontend' },
  { icon: '⚙️', key: 'backend' },
  { icon: '🤖', key: 'ai' },
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
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
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

        <!-- Right Content - Highlight Cards (Education & Awards) -->
        <div class="space-y-4" data-aos="fade-left" data-aos-delay="200">
          <div
            v-for="(highlight, index) in highlights"
            :key="highlight.key"
            class="group relative p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-light-400 hover:border-primary-200"
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
            </div>

            <!-- Decorative Element -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>

      <!-- EY Work Experience Section -->
      <div class="mt-8" data-aos="fade-up" data-aos-delay="300">
        <div class="relative bg-gradient-to-br from-accent-50 via-white to-primary-50 rounded-3xl p-8 lg:p-10 border border-accent-200/50 shadow-lg overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-full blur-2xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-2xl"></div>

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
              v-for="(item, index) in eyWorkItems"
              :key="item.key"
              class="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-light-400/50 hover:border-accent-300 hover:shadow-md transition-all duration-300"
              :data-aos="'zoom-in'"
              :data-aos-delay="400 + index * 100"
            >
              <div class="text-3xl mb-3">{{ item.icon }}</div>
              <h4 class="font-semibold text-dark-600 mb-2">{{ t(`about.eyWork.items.${item.key}.title`) }}</h4>
              <p class="text-sm text-dark-400 leading-relaxed">{{ t(`about.eyWork.items.${item.key}.description`) }}</p>
            </div>
          </div>

          <!-- Tags -->
          <div class="relative mt-6 flex flex-wrap gap-2">
            <span
              v-for="tag in ['Vue.js', 'Python', 'Spring Boot', 'AI/RAG', 'LLM']"
              :key="tag"
              class="px-3 py-1 bg-white/70 text-dark-500 text-sm font-medium rounded-full border border-light-400/50"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
