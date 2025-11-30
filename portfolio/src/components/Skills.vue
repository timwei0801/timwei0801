<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

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
  { name: 'Python', level: 95, category: 'ai', icon: '🐍' },
  { name: 'PyTorch', level: 85, category: 'ai', icon: '🔥' },
  { name: 'TensorFlow', level: 80, category: 'ai', icon: '🧠' },
  { name: 'Deep Learning', level: 88, category: 'ai', icon: '🤖' },
  { name: 'GNN', level: 85, category: 'ai', icon: '🕸️' },
  { name: 'RAG', level: 82, category: 'ai', icon: '📚' },
  { name: 'LLM', level: 85, category: 'ai', icon: '💬' },
  { name: 'Scikit-learn', level: 90, category: 'ai', icon: '📊' },

  // Frontend
  { name: 'Vue.js', level: 92, category: 'frontend', icon: '💚' },
  { name: 'React', level: 78, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: '📘' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: '💛' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: '🎨' },
  { name: 'HTML/CSS', level: 92, category: 'frontend', icon: '🌐' },

  // Backend
  { name: 'Node.js', level: 82, category: 'backend', icon: '🟢' },
  { name: 'Java', level: 75, category: 'backend', icon: '☕' },
  { name: 'Spring Boot', level: 72, category: 'backend', icon: '🍃' },
  { name: 'FastAPI', level: 80, category: 'backend', icon: '⚡' },
  { name: 'RESTful API', level: 88, category: 'backend', icon: '🔌' },

  // Data
  { name: 'R', level: 88, category: 'data', icon: '📈' },
  { name: 'SAS', level: 85, category: 'data', icon: '📉' },
  { name: 'Pandas', level: 92, category: 'data', icon: '🐼' },
  { name: 'NumPy', level: 90, category: 'data', icon: '🔢' },
  { name: 'Statistical Modeling', level: 88, category: 'data', icon: '📊' },

  // Tools
  { name: 'Git', level: 90, category: 'tools', icon: '🔧' },
  { name: 'Docker', level: 70, category: 'tools', icon: '🐳' },
  { name: 'Linux', level: 75, category: 'tools', icon: '🐧' },
  { name: 'SQL Server', level: 82, category: 'tools', icon: '🗄️' },
  { name: 'MySQL', level: 85, category: 'tools', icon: '💾' },
]

const filteredSkills = () => {
  if (activeCategory.value === 'all') return skills
  return skills.filter(skill => skill.category === activeCategory.value)
}
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

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <TransitionGroup name="skill">
          <div
            v-for="skill in filteredSkills()"
            :key="skill.name"
            class="group"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <div class="card p-4 text-center hover:border-primary-200 border border-transparent cursor-default">
              <!-- Icon -->
              <div class="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {{ skill.icon }}
              </div>

              <!-- Name -->
              <h4 class="font-semibold text-dark-500 text-sm mb-2">{{ skill.name }}</h4>

              <!-- Progress Bar -->
              <div class="skill-bar">
                <div
                  class="skill-bar-fill"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>

              <!-- Level -->
              <p class="text-xs text-dark-300 mt-1">{{ skill.level }}%</p>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
        <div class="card p-6 text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl">
            🎓
          </div>
          <h4 class="font-bold text-primary-700 mb-2">{{ locale === 'zh-TW' ? '持續學習' : 'Continuous Learning' }}</h4>
          <p class="text-sm text-dark-400">{{ locale === 'zh-TW' ? '目前正在學習 Linux 系統管理，備考 RHCSA 認證' : 'Currently learning Linux admin, preparing for RHCSA' }}</p>
        </div>

        <div class="card p-6 text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-500 to-yellow-500 flex items-center justify-center text-white text-2xl">
            💡
          </div>
          <h4 class="font-bold text-primary-700 mb-2">{{ locale === 'zh-TW' ? '關注前沿' : 'Cutting Edge' }}</h4>
          <p class="text-sm text-dark-400">{{ locale === 'zh-TW' ? '持續關注 AI Agent、多模態模型、生成式 AI 等技術' : 'Following AI Agent, Multimodal, Generative AI trends' }}</p>
        </div>

        <div class="card p-6 text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl">
            🔧
          </div>
          <h4 class="font-bold text-primary-700 mb-2">{{ locale === 'zh-TW' ? '實戰經驗' : 'Practical Experience' }}</h4>
          <p class="text-sm text-dark-400">{{ locale === 'zh-TW' ? '在 EY 累積企業級開發經驗，將學術轉化為實務' : 'Enterprise development experience at EY' }}</p>
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
