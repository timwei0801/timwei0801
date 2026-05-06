<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import phiTauPhi from '../assets/images/awards/phi-tau-phi.png'
import hackathon from '../assets/images/awards/hackathon-team.jpeg'
import highway from '../assets/images/awards/highway-award.jpeg'
import transportSpeak from '../assets/images/experience/transport-conference-speaking.jpg'
import sinica from '../assets/images/awards/academia-sinica-award.jpeg'
import aiExpo from '../assets/images/awards/ai-expo-2026.jpeg'

interface AwardItem {
  year: string; name: string; nameZh: string; org: string; desc: string; tag: string;
}

const { t, tm } = useI18n()
const items = computed(() => tm('awards.items') as unknown as AwardItem[])

// Map images to award index in the order they appear in i18n
const images = [
  phiTauPhi,
  hackathon,
  highway,
  transportSpeak,
  sinica,
  aiExpo,
]
</script>

<template>
  <section id="awards" class="section-y relative">
    <div class="container-x">
      <div class="reveal mb-16">
        <div class="section-num">{{ t('awards.num') }}</div>
        <h2 class="h-display text-display-lg text-balance">
          {{ t('awards.title') }}<em>{{ t('awards.titleEm') }}</em>
        </h2>
        <p class="text-bone-400 mt-4 max-w-xl">{{ t('awards.sub') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="(a, i) in items"
          :key="i"
          class="reveal group bg-ink-700 border border-ink-500 rounded-md overflow-hidden hover:border-ember-500 transition-all duration-300"
        >
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden bg-ink-900 relative">
            <img
              v-if="images[i]"
              :src="images[i]"
              :alt="a.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-3 left-3 font-mono text-[10px] px-2 py-1 bg-ink-900/80 backdrop-blur-sm border border-ink-500 rounded text-ember-500">
              {{ a.tag }}
            </div>
            <div class="absolute top-3 right-3 font-mono text-[10px] px-2 py-1 bg-ink-900/80 backdrop-blur-sm border border-ink-500 rounded text-bone-300">
              {{ a.year }}
            </div>
          </div>

          <!-- Body -->
          <div class="p-6">
            <h3 class="font-serif text-xl text-bone-100 font-medium leading-tight mb-1">
              {{ a.name }}
            </h3>
            <div class="text-bone-400 text-sm mb-3">{{ a.nameZh }}</div>
            <div class="font-mono text-[11px] text-ember-500 mb-3">{{ a.org }}</div>
            <p class="text-bone-400 text-sm leading-relaxed">{{ a.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
