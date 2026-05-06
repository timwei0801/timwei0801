<script setup lang="ts">
// Traffic heatmap for Highway project — simulates 24h × 8 lanes intensity.
import { computed, ref, onMounted, onUnmounted } from 'vue'

const tick = ref(0)
let raf = 0

const COLS = 24
const ROWS = 8

const baseCurve = [
  0.18, 0.12, 0.10, 0.10, 0.18, 0.32, 0.62, 0.88,
  0.95, 0.72, 0.52, 0.46, 0.50, 0.55, 0.62, 0.72,
  0.88, 0.96, 0.78, 0.55, 0.42, 0.32, 0.26, 0.20,
]

function loop() {
  tick.value++
  raf = requestAnimationFrame(loop)
}
onMounted(() => { raf = requestAnimationFrame(loop) })
onUnmounted(() => cancelAnimationFrame(raf))

const cells = computed(() => {
  const t = tick.value * 0.02
  const out: { row: number; col: number; v: number }[] = []
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const wave = Math.sin(t + col * 0.3 + row * 0.4) * 0.08
      const intensity = Math.max(0.04, Math.min(1, (baseCurve[col] ?? 0.3) + wave - row * 0.04))
      out.push({ row, col, v: intensity })
    }
  }
  return out
})

function colorFor(v: number) {
  if (v > 0.75) return `rgba(255, 107, 53, ${Math.min(1, v)})`
  if (v > 0.45) return `rgba(255, 142, 102, ${v * 0.85})`
  return `rgba(0, 217, 163, ${v * 0.55})`
}

const hours = ['00', '06', '12', '18', '24']
</script>

<template>
  <div class="relative w-full h-full p-4 pt-10">
    <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 z-10 flex items-center gap-2">
      <span class="dot-pulse"></span>
      <span>Traffic Heatmap · 24h</span>
    </div>
    <div class="absolute top-3 right-3 font-mono text-[9px] text-bone-500 flex items-center gap-2">
      <div class="w-2 h-2 bg-mint-500 rounded-sm"></div><span>Free</span>
      <div class="w-2 h-2 bg-ember-500 rounded-sm ml-1"></div><span>Jam</span>
    </div>

    <div class="grid w-full h-[calc(100%-1.5rem)]" :style="{ gridTemplateColumns: `repeat(${COLS}, 1fr)`, gridTemplateRows: `repeat(${ROWS}, 1fr)`, gap: '2px' }">
      <div
        v-for="c in cells"
        :key="`${c.row}-${c.col}`"
        class="rounded-[1px] transition-colors duration-300"
        :style="{ background: colorFor(c.v) }"
      ></div>
    </div>

    <div class="absolute bottom-1 left-4 right-4 flex justify-between font-mono text-[9px] text-bone-500">
      <span v-for="h in hours" :key="h">{{ h }}</span>
    </div>
  </div>
</template>
