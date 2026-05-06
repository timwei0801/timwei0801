<script setup lang="ts">
// Animated poker decision viz: cards + confidence meter
import { computed, ref, onMounted, onUnmounted } from 'vue'

const tick = ref(0)
let raf = 0

const cards = [
  { rank: 'A', suit: '♠', red: false },
  { rank: 'K', suit: '♥', red: true },
  { rank: 'Q', suit: '♣', red: false },
  { rank: '10', suit: '♦', red: true },
  { rank: 'J', suit: '♠', red: false },
]

function loop() {
  tick.value++
  raf = requestAnimationFrame(loop)
}
onMounted(() => { raf = requestAnimationFrame(loop) })
onUnmounted(() => cancelAnimationFrame(raf))

const confidence = computed(() => {
  return 0.78 + Math.sin(tick.value * 0.03) * 0.08
})

const action = computed(() => {
  const c = confidence.value
  if (c > 0.78) return { text: 'RAISE', color: '#FF6B35' }
  if (c > 0.65) return { text: 'CALL', color: '#00D9A3' }
  return { text: 'FOLD', color: '#8A9BA3' }
})
</script>

<template>
  <div class="relative w-full h-full p-3">
    <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 z-10 flex items-center gap-2">
      <span class="dot-pulse"></span>
      <span>Decision Engine · 95%+ OCR</span>
    </div>

    <div class="flex flex-col items-center justify-center h-full gap-4">
      <!-- Cards -->
      <div class="flex gap-1.5">
        <div
          v-for="(c, i) in cards"
          :key="i"
          :style="{ transform: `translateY(${Math.sin(tick * 0.04 + i) * 3}px)` }"
          class="w-10 h-14 bg-ink-900 border border-ink-500 rounded flex flex-col items-center justify-center text-[11px] font-mono transition-transform"
        >
          <span :class="c.red ? 'text-ember-500' : 'text-bone-200'">{{ c.rank }}</span>
          <span :class="c.red ? 'text-ember-500' : 'text-bone-200'" class="text-base leading-none">{{ c.suit }}</span>
        </div>
      </div>

      <!-- Confidence meter -->
      <div class="w-3/4">
        <div class="flex justify-between font-mono text-[10px] text-bone-500 mb-1.5">
          <span>WIN PROBABILITY</span>
          <span class="text-bone-200">{{ (confidence * 100).toFixed(1) }}%</span>
        </div>
        <div class="h-1.5 bg-ink-500 rounded-full overflow-hidden">
          <div
            class="h-full transition-all duration-300 rounded-full"
            :style="{
              width: `${confidence * 100}%`,
              background: `linear-gradient(to right, #00D9A3, #FF6B35)`
            }"
          ></div>
        </div>
      </div>

      <!-- Action -->
      <div class="font-mono text-xs text-bone-500 flex items-center gap-2">
        <span>RECOMMEND →</span>
        <span :style="{ color: action.color }" class="font-bold tracking-widest">{{ action.text }}</span>
      </div>
    </div>
  </div>
</template>
