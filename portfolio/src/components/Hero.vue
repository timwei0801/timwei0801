<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import profileImage from '../assets/images/profile/profile.jpeg'

const { t } = useI18n()

const isVisible = ref(false)
const typedText = ref('')
const roles = ['AI/ML Algorithm Engineer', 'Data Scientist', 'RAG System Architect', 'Full-Stack Developer']
const currentRoleIndex = ref(0)
const isTyping = ref(true)

const typeWriter = () => {
  const currentRole = roles[currentRoleIndex.value] ?? ''

  if (isTyping.value) {
    if (typedText.value.length < currentRole.length) {
      typedText.value = currentRole.slice(0, typedText.value.length + 1)
      setTimeout(typeWriter, 100)
    } else {
      isTyping.value = false
      setTimeout(typeWriter, 2000)
    }
  } else {
    if (typedText.value.length > 0) {
      typedText.value = typedText.value.slice(0, -1)
      setTimeout(typeWriter, 50)
    } else {
      isTyping.value = true
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
      setTimeout(typeWriter, 500)
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  typeWriter()
})

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 gradient-bg">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 bg-hero-pattern opacity-30"></div>

      <!-- Floating Shapes -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-500/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 section-container">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <!-- Text Content -->
        <div
          :class="[
            'flex-1 text-center lg:text-left transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <!-- Greeting -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
            <span class="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            {{ t('hero.greeting') }}
          </div>

          <!-- Name -->
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
            {{ t('hero.name') }}
            <span class="text-accent-500">.</span>
          </h1>

          <!-- Animated Role -->
          <div class="h-12 mb-6">
            <p class="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
              <span class="text-accent-400">{{ typedText }}</span>
              <span class="animate-pulse">|</span>
            </p>
          </div>

          <!-- Tagline -->
          <p class="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            {{ t('hero.description') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              @click="scrollToSection('about')"
              class="btn-primary group"
            >
              {{ t('hero.cta') }}
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              @click="scrollToSection('contact')"
              class="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              {{ t('hero.contact') }}
            </button>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4 justify-center lg:justify-start mt-8">
            <a
              href="https://github.com/timwei0801"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-accent-500 hover:text-primary-700 transition-all duration-300 hover:-translate-y-1"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/timwei0801"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-accent-500 hover:text-primary-700 transition-all duration-300 hover:-translate-y-1"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:chwei9181@gmail.com"
              class="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-accent-500 hover:text-primary-700 transition-all duration-300 hover:-translate-y-1"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="relative">
          <div class="relative">
            <!-- Decorative Ring -->
            <div class="absolute -inset-4 bg-gradient-to-r from-accent-500 to-primary-400 rounded-full opacity-20 blur-xl"></div>

            <!-- Image Container -->
            <div class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden">
              <img
                :src="profileImage"
                alt="Tim Wei"
                style="display: block !important; width: 100% !important; height: 100% !important; object-fit: cover !important; opacity: 1 !important; visibility: visible !important; position: absolute !important; top: 0 !important; left: 0 !important;"
              />
            </div>

            <!-- Floating Badge -->
            <div class="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-xl flex items-center gap-2">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-sm font-medium text-dark-500">Open to Work</span>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-center">
      <p class="text-sm mb-2">{{ t('hero.scrollDown') }}</p>
      <div class="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
        <div class="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>
