<script setup lang="ts">
// Rotating gallery for a project card. A slide is either one of the
// interactive viz components or a real image (screenshot or figure).
// Each slide keeps the 4:3 box the viz components were designed for; the
// caption bar sits below it. A single slide renders exactly as before.
import { ref } from 'vue'
import { useRotation } from '../../composables/useRotation'
import type { Slide } from './galleries'

const props = defineProps<{ slides: Slide[] }>()

const root = ref<HTMLElement | null>(null)
const { index, paused } = useRotation(() => props.slides.length, 4500, root)
</script>

<template>
  <div v-if="slides.length === 1 && slides[0]?.viz" class="relative aspect-[4/3]">
    <component :is="slides[0].viz" />
  </div>

  <div
    v-else
    ref="root"
    class="relative w-full"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <div class="relative aspect-[4/3]">
      <div
        v-for="(s, i) in slides"
        :key="i"
        class="absolute inset-0 transition-opacity duration-700"
        :class="i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        :aria-hidden="i !== index"
      >
        <component v-if="s.viz" :is="s.viz" />
        <div v-else class="relative w-full h-full px-3 pt-8 pb-1">
          <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 flex items-center gap-2">
            <span class="dot-pulse"></span>
            <span>{{ s.label }}</span>
          </div>
          <div
            class="w-full h-full rounded-sm overflow-hidden"
            :class="s.bg === 'paper' ? 'bg-bone-50' : 'bg-ink-900'"
          >
            <img
              :src="s.src"
              :alt="s.alt"
              loading="lazy"
              class="w-full h-full object-contain"
              :class="s.bg === 'paper' ? 'p-3' : ''"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="px-3 pb-3 pt-2 flex items-center justify-between gap-3">
      <p class="font-mono text-[10px] leading-snug text-bone-400 line-clamp-2 sm:line-clamp-1">
        {{ slides[index]?.caption }}
      </p>
      <div class="flex items-center gap-2 shrink-0">
        <span class="font-mono text-[10px] text-ember-500">{{ index + 1 }} / {{ slides.length }}</span>
        <div class="flex gap-1.5">
          <button
            v-for="(s, i) in slides"
            :key="i"
            type="button"
            class="w-1.5 h-1.5 rounded-full transition-colors"
            :class="i === index ? 'bg-ember-500' : 'bg-ink-500 hover:bg-bone-500'"
            :aria-label="`Show slide ${i + 1}: ${s.caption}`"
            @click="index = i"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>
