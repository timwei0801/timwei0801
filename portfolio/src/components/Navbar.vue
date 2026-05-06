<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const scrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const items = computed(() => [
  { id: 'about', num: '01', label: t('nav.about') },
  { id: 'experience', num: '02', label: t('nav.experience') },
  { id: 'projects', num: '03', label: t('nav.projects') },
  { id: 'awards', num: '04', label: t('nav.awards') },
  { id: 'skills', num: '05', label: t('nav.skills') },
  { id: 'contact', num: '06', label: t('nav.contact') },
])

const scrollTo = (id: string) => {
  mobileOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const toggleLocale = () => {
  locale.value = locale.value === 'zh-TW' ? 'en' : 'zh-TW'
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-ink-800/85 backdrop-blur-md border-b border-ink-500' : 'bg-transparent border-b border-transparent',
    ]"
  >
    <div class="container-x flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <a
        href="#top"
        @click.prevent="scrollTo('top')"
        class="font-serif text-lg md:text-xl tracking-tight text-bone-100 hover:text-ember-500 transition-colors"
      >
        Tim Wei<span class="text-ember-500">.</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <button
          v-for="item in items"
          :key="item.id"
          @click="scrollTo(item.id)"
          class="group font-mono text-[12px] text-bone-400 hover:text-bone-100 transition-colors"
        >
          <span class="text-ember-500 mr-1.5">{{ item.num }}.</span>
          <span>{{ item.label }}</span>
        </button>

        <!-- Locale toggle -->
        <button
          @click="toggleLocale"
          class="font-mono text-[12px] text-bone-400 hover:text-ember-500 transition-colors border border-ink-500 hover:border-ember-500 px-2.5 py-1 rounded"
        >
          {{ locale === 'zh-TW' ? 'EN' : '中' }}
        </button>
      </nav>

      <!-- Mobile button -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden text-bone-200"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-ink-800/95 backdrop-blur-md border-t border-ink-500"
    >
      <div class="container-x py-6 flex flex-col gap-4">
        <button
          v-for="item in items"
          :key="item.id"
          @click="scrollTo(item.id)"
          class="text-left font-mono text-sm text-bone-300 hover:text-ember-500"
        >
          <span class="text-ember-500 mr-2">{{ item.num }}.</span>{{ item.label }}
        </button>
        <button
          @click="toggleLocale"
          class="text-left font-mono text-sm text-bone-400 hover:text-ember-500 mt-2"
        >
          {{ locale === 'zh-TW' ? 'Switch to English' : '切換至中文' }}
        </button>
      </div>
    </div>
  </header>
</template>
