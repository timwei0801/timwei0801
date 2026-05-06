<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = computed(() => [
  { value: t('stats.rank.value'), label: t('stats.rank.label') },
  { value: t('stats.systems.value'), label: t('stats.systems.label') },
  { value: t('stats.awards.value'), label: t('stats.awards.label') },
  { value: t('stats.teaching.value'), label: t('stats.teaching.label') },
])

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="top"
    class="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
  >
    <!-- Animated grid background -->
    <div class="absolute inset-0 grid-bg pointer-events-none"></div>

    <!-- Soft glow blobs -->
    <div class="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-ember-500/[0.06] blur-3xl rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-mint-500/[0.05] blur-3xl rounded-full pointer-events-none"></div>

    <div class="container-x relative">
      <!-- Tag -->
      <div class="font-mono text-xs text-ember-500 mb-7 inline-flex items-center gap-3">
        <span class="w-8 h-px bg-ember-500"></span>
        {{ t('hero.tag') }}
      </div>

      <!-- Headline (serif, italic accent) -->
      <h1 class="h-display text-display-xl mb-7 text-balance">
        {{ t('hero.headline1') }}<br />
        {{ t('hero.headline2') }}
        <em>{{ t('hero.headlineEm') }}</em>
      </h1>

      <!-- Mono subline -->
      <p class="font-mono text-sm md:text-base text-bone-400 mb-7 max-w-2xl">
        {{ t('hero.subline') }}
      </p>

      <!-- Description -->
      <p class="text-base md:text-lg text-bone-300 max-w-xl leading-relaxed mb-12 text-pretty">
        {{ t('hero.description') }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap gap-4 mb-20">
        <button @click="scrollTo('projects')" class="btn-ember">
          {{ t('hero.ctaWork') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <button @click="scrollTo('contact')" class="btn-ghost">
          {{ t('hero.ctaContact') }}
        </button>
      </div>

      <!-- Stats Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 border-t border-ink-500">
        <div
          v-for="(s, i) in stats"
          :key="i"
          :class="[
            'py-7 pr-6',
            i < 3 ? 'md:border-r border-ink-500' : '',
            i < 2 ? 'border-r border-ink-500' : '',
            i >= 2 ? 'md:border-t-0 border-t border-ink-500 md:border-t' : '',
          ]"
        >
          <div class="font-serif text-4xl md:text-5xl font-light text-bone-100 mb-2 leading-none">
            {{ s.value }}
          </div>
          <div class="mono-caption">{{ s.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-bone-500 font-mono text-[10px] tracking-[0.2em] uppercase flex flex-col items-center gap-2">
      <span>{{ t('hero.scrollHint') }}</span>
      <div class="w-px h-8 bg-bone-500/50"></div>
    </div>
  </section>
</template>
