<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Import skill icons
import pythonIcon from '../assets/images/icons/python.png'
import tensorflowIcon from '../assets/images/icons/TensorFlow.png'
import deepLearningIcon from '../assets/images/icons/DeepLearning.png'
import machineLearningIcon from '../assets/images/icons/MachineLearning.png'
import ragIcon from '../assets/images/icons/RAG.png'
import llmIcon from '../assets/images/icons/LLM.png'
import scikitLearnIcon from '../assets/images/icons/Scikit-learn.png'
import vueIcon from '../assets/images/icons/Vue.png'
import reactIcon from '../assets/images/icons/react.png'
import typescriptIcon from '../assets/images/icons/typescript.png'
import javascriptIcon from '../assets/images/icons/JavaScript.png'
import tailwindIcon from '../assets/images/icons/TailwindCSS.png'
import htmlCssIcon from '../assets/images/icons/HTML-CSS.png'
import nodeIcon from '../assets/images/icons/Node.png'
import javaIcon from '../assets/images/icons/Java.png'
import springBootIcon from '../assets/images/icons/SpringBoot.png'
import fastApiIcon from '../assets/images/icons/FastAPI.png'
import restfulApiIcon from '../assets/images/icons/RESTfulAPI.png'
import rIcon from '../assets/images/icons/R.png'
import sasIcon from '../assets/images/icons/SAS.png'
import pandasIcon from '../assets/images/icons/Pandas.png'
import numpyIcon from '../assets/images/icons/NumPy.png'
import statisticalModelingIcon from '../assets/images/icons/StatisticalModeling.png'
import gitIcon from '../assets/images/icons/Git.png'
import dockerIcon from '../assets/images/icons/Docker.png'
import linuxIcon from '../assets/images/icons/Linux.png'
import sqlServerIcon from '../assets/images/icons/SQLServer.png'
import mysqlIcon from '../assets/images/icons/MySQL.png'

const { t, locale } = useI18n()

const activeCategory = ref('all')

const categories = [
  { key: 'all', label: '全部', labelEn: 'All' },
  { key: 'ai', label: 'AI 與機器學習', labelEn: 'AI & ML' },
  { key: 'frontend', label: '前端開發', labelEn: 'Frontend' },
  { key: 'backend', label: '後端開發', labelEn: 'Backend' },
  { key: 'data', label: '數據分析', labelEn: 'Data Analysis' },
  { key: 'tools', label: '工具與其他', labelEn: 'Tools' },
]

const skills = [
  // AI & ML
  { name: 'Python', category: 'ai', icon: pythonIcon },
  { name: 'Machine Learning', category: 'ai', icon: machineLearningIcon },
  { name: 'TensorFlow', category: 'ai', icon: tensorflowIcon },
  { name: 'Deep Learning', category: 'ai', icon: deepLearningIcon },
  { name: 'RAG', category: 'ai', icon: ragIcon },
  { name: 'LLM', category: 'ai', icon: llmIcon },
  { name: 'Scikit-learn', category: 'ai', icon: scikitLearnIcon },

  // Frontend
  { name: 'Vue.js', category: 'frontend', icon: vueIcon },
  { name: 'React', category: 'frontend', icon: reactIcon },
  { name: 'TypeScript', category: 'frontend', icon: typescriptIcon },
  { name: 'JavaScript', category: 'frontend', icon: javascriptIcon },
  { name: 'Tailwind CSS', category: 'frontend', icon: tailwindIcon },
  { name: 'HTML/CSS', category: 'frontend', icon: htmlCssIcon },

  // Backend
  { name: 'Node.js', category: 'backend', icon: nodeIcon },
  { name: 'Java', category: 'backend', icon: javaIcon },
  { name: 'Spring Boot', category: 'backend', icon: springBootIcon },
  { name: 'FastAPI', category: 'backend', icon: fastApiIcon },
  { name: 'RESTful API', category: 'backend', icon: restfulApiIcon },

  // Data
  { name: 'R', category: 'data', icon: rIcon },
  { name: 'SAS', category: 'data', icon: sasIcon },
  { name: 'Pandas', category: 'data', icon: pandasIcon },
  { name: 'NumPy', category: 'data', icon: numpyIcon },
  { name: 'Statistical Modeling', category: 'data', icon: statisticalModelingIcon },

  // Tools
  { name: 'Git', category: 'tools', icon: gitIcon },
  { name: 'Docker', category: 'tools', icon: dockerIcon },
  { name: 'Linux', category: 'tools', icon: linuxIcon },
  { name: 'SQL Server', category: 'tools', icon: sqlServerIcon },
  { name: 'MySQL', category: 'tools', icon: mysqlIcon },
]

const filteredSkills = () => {
  if (activeCategory.value === 'all') return skills
  return skills.filter(skill => skill.category === activeCategory.value)
}

// Certifications data (merged from standalone section)
const certifications = [
  { name: 'AZ-900', issuer: 'Microsoft', color: 'from-blue-500 to-cyan-500' },
  { name: 'AI-900', issuer: 'Microsoft', color: 'from-purple-500 to-pink-500' },
  { name: 'DP-900', issuer: 'Microsoft', color: 'from-green-500 to-emerald-500' },
  { name: 'SAS Base', issuer: 'SAS Institute', color: 'from-blue-600 to-indigo-600' },
  { name: 'TQC+ AI', issuer: 'CSF', color: 'from-orange-500 to-red-500' },
  { name: 'ESG Manager', issuer: 'ESG International', color: 'from-teal-500 to-green-500' },
]
</script>

<template>
  <section id="skills" class="section-padding bg-light-300 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>

    <div class="section-container relative">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <span class="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">
          {{ t('skills.title') }}
        </span>
        <h2 class="section-title">{{ t('skills.subtitle') }}</h2>
      </div>

      <!-- Category Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
        <button
          v-for="category in categories"
          :key="category.key"
          @click="activeCategory = category.key"
          :class="[
            'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300',
            activeCategory === category.key
              ? 'bg-primary-500 text-white shadow-lg'
              : 'bg-white text-dark-400 hover:bg-primary-50 hover:text-primary-600'
          ]"
        >
          {{ locale === 'zh-TW' ? category.label : category.labelEn }}
        </button>
      </div>

      <!-- Skills Grid - Clean icon + name cards -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <TransitionGroup name="skill">
          <div
            v-for="skill in filteredSkills()"
            :key="skill.name"
            class="group"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <div class="card p-4 hover:border-primary-300 hover:shadow-lg border border-transparent cursor-default transition-all duration-300 text-center">
              <!-- Icon -->
              <div class="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
              </div>
              <!-- Name -->
              <h4 class="font-medium text-dark-600 text-sm">{{ skill.name }}</h4>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Certifications Strip -->
      <div class="mt-16" data-aos="fade-up" data-aos-delay="200">
        <h3 class="text-center text-lg font-semibold text-dark-500 mb-6">
          {{ locale === 'zh-TW' ? '專業認證' : 'Certifications' }}
        </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-light-400 hover:border-primary-200 transition-all duration-300"
          >
            <div :class="['w-2 h-2 rounded-full bg-gradient-to-br', cert.color]"></div>
            <span class="text-sm font-medium text-dark-600">{{ cert.name }}</span>
            <span class="text-xs text-dark-300">{{ cert.issuer }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-enter-active,
.skill-leave-active {
  transition: all 0.3s ease;
}

.skill-enter-from,
.skill-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.skill-move {
  transition: transform 0.3s ease;
}
</style>
