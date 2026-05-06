<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Article { title: string; date: string; tag: string; url: string }

const { t, tm } = useI18n()
const articles = computed(() => tm('writing.articles') as unknown as Article[])
</script>

<template>
  <section class="section-y bg-ink-900 relative">
    <div class="container-x">
      <div class="reveal mb-12">
        <div class="section-num">{{ t('writing.num') }}</div>
        <h2 class="h-display text-display-md text-balance">
          {{ t('writing.title') }}<em>{{ t('writing.titleEm') }}</em>
        </h2>
        <p class="text-bone-400 mt-3 max-w-xl">{{ t('writing.sub') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 reveal">
        <a
          v-for="(a, i) in articles"
          :key="i"
          :href="a.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group block bg-ink-700 border border-ink-500 rounded-md p-7 hover:border-ember-500 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div class="flex items-center justify-between mb-5">
            <div class="font-mono text-[10px] text-ember-500 tracking-[0.16em]">{{ a.tag }}</div>
            <div class="font-mono text-[10px] text-bone-500">{{ a.date }} · MEDIUM</div>
          </div>
          <h3 class="font-serif text-xl md:text-2xl text-bone-100 leading-snug mb-6 text-balance group-hover:text-ember-500 transition-colors">
            {{ a.title }}
          </h3>
          <div class="flex items-center gap-2 text-bone-400 text-sm font-medium">
            <span>Read on Medium</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
