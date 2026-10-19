<script setup lang="ts">
// ADVIZ thesis figures — real figures from thesis-latex/figures, rotated.
// Captions follow the thesis captions (chapters 3 and 5).
import { useRotation } from '../../composables/useRotation'
import taxonomy from '../../assets/images/projects/adviz/taxonomy.webp'
import interfaceBar from '../../assets/images/projects/adviz/interface.webp'
import showcase from '../../assets/images/projects/adviz/showcase-battle.webp'
import blindspot from '../../assets/images/projects/adviz/3d-blindspot.webp'

const figures = [
  {
    src: taxonomy,
    caption: 'Six misleading categories · honest vs. misleading, same data',
    alt: 'Thesis figure: six categories of misleading charts, each shown as an honest version beside a misleading version rendered from the same data',
  },
  {
    src: interfaceBar,
    caption: 'Detection interface · BalAcc 0.57 → 0.70 → 0.83',
    alt: 'Thesis figure: balanced accuracy of three detection interfaces — generative decoding 0.57, classifier head 0.70, classifier head fused with a linter 0.83',
  },
  {
    src: showcase,
    caption: 'Interactive showcase · play Red, try to fool the Critic',
    alt: 'Thesis figure: the Red-vs-Blue showcase page, where the user picks misleading techniques and the Blue Critic scores the altered chart',
  },
  {
    src: blindspot,
    caption: 'Known blind spot · 3D perspective distortion (future work)',
    alt: 'Thesis figure: the same market-share data as an honest 2D pie and a 3D perspective pie that visually enlarges the front slices — a distortion the detectors still cannot reliably catch',
  },
]

const { index, paused } = useRotation(() => figures.length)
</script>

<template>
  <div
    class="relative w-full h-full p-3 flex flex-col"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <div class="font-mono text-[10px] text-bone-500 flex items-center justify-between mb-2">
      <span class="flex items-center gap-2"><span class="dot-pulse"></span>Thesis figures</span>
      <span class="text-ember-500">{{ index + 1 }} / {{ figures.length }}</span>
    </div>

    <div class="relative flex-1 rounded-sm bg-bone-50 overflow-hidden">
      <img
        v-for="(f, i) in figures"
        :key="f.src"
        :src="f.src"
        :alt="f.alt"
        :loading="i === 0 ? 'eager' : 'lazy'"
        class="absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-700"
        :class="i === index ? 'opacity-100' : 'opacity-0'"
        :aria-hidden="i !== index"
      />
    </div>

    <div class="mt-2 flex items-center justify-between gap-3">
      <p class="font-mono text-[10px] leading-snug text-bone-400 line-clamp-2 sm:line-clamp-1">{{ figures[index]?.caption }}</p>
      <div class="flex gap-1.5 shrink-0">
        <button
          v-for="(f, i) in figures"
          :key="f.src"
          type="button"
          class="w-1.5 h-1.5 rounded-full transition-colors"
          :class="i === index ? 'bg-ember-500' : 'bg-ink-500 hover:bg-bone-500'"
          :aria-label="`Show figure ${i + 1}`"
          @click="index = i"
        ></button>
      </div>
    </div>
  </div>
</template>
