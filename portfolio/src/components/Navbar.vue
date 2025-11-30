<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'awards', href: '#awards' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'certifications', href: '#certifications' },
  { key: 'contact', href: '#contact' },
]

const toggleLanguage = () => {
  locale.value = locale.value === 'zh-TW' ? 'en' : 'zh-TW'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section
  const sections = navItems.map(item => item.key)
  for (const section of sections.reverse()) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

const scrollToSection = (href: string) => {
  isMobileMenuOpen.value = false
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      isScrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#home"
          class="flex items-center gap-2 group"
          @click.prevent="scrollToSection('#home')"
        >
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-110 transition-transform">
            T
          </div>
          <span :class="['font-display font-bold text-xl transition-colors', isScrolled ? 'text-primary-700' : 'text-white']">
            Tim Wei
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.href"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeSection === item.key
                ? 'bg-accent-500 text-primary-700'
                : isScrolled
                  ? 'text-dark-400 hover:text-primary-500 hover:bg-light-300'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
            ]"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ t(`nav.${item.key}`) }}
          </a>
        </div>

        <!-- Right Section -->
        <div class="flex items-center gap-3">
          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            :class="[
              'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              isScrolled
                ? 'text-dark-400 hover:text-primary-500 hover:bg-light-300'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            {{ locale === 'zh-TW' ? 'EN' : '中文' }}
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="[
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-dark-500 hover:bg-light-300' : 'text-white hover:bg-white/10'
            ]"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden mt-4 p-4 bg-white rounded-2xl shadow-xl"
        >
          <div class="flex flex-col gap-1">
            <a
              v-for="item in navItems"
              :key="item.key"
              :href="item.href"
              :class="[
                'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                activeSection === item.key
                  ? 'bg-accent-500 text-primary-700'
                  : 'text-dark-400 hover:text-primary-500 hover:bg-light-300'
              ]"
              @click.prevent="scrollToSection(item.href)"
            >
              {{ t(`nav.${item.key}`) }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
