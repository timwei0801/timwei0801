<script setup lang="ts">
// Animated chart switcher for ChartGenie
import { computed, ref, onMounted, onUnmounted } from 'vue'

const tick = ref(0)
const mode = ref<'bar' | 'line' | 'area'>('bar')
let raf = 0
let modeTimer = 0

const baseValues = [40, 55, 35, 78, 52, 92, 68, 84, 60, 45, 70, 88]

function loop() {
  tick.value++
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  raf = requestAnimationFrame(loop)
  modeTimer = window.setInterval(() => {
    mode.value = mode.value === 'bar' ? 'line' : mode.value === 'line' ? 'area' : 'bar'
  }, 3500)
})
onUnmounted(() => {
  cancelAnimationFrame(raf)
  clearInterval(modeTimer)
})

const animated = computed(() => {
  const t = tick.value * 0.04
  return baseValues.map((v, i) => v + Math.sin(t + i * 0.5) * 4)
})

const W = 360
const H = 200
const PAD = 20

const points = computed(() => {
  return animated.value.map((v, i) => {
    const x = PAD + (i / (animated.value.length - 1)) * (W - PAD * 2)
    const y = H - PAD - (v / 100) * (H - PAD * 2)
    return { x, y, v }
  })
})

const linePath = computed(() => {
  const pts = points.value
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
})

const areaPath = computed(() => {
  const pts = points.value
  if (pts.length === 0) return ''
  const head = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const last = pts[pts.length - 1]!
  const first = pts[0]!
  return `${head} L ${last.x} ${H - PAD} L ${first.x} ${H - PAD} Z`
})
</script>

<template>
  <div class="relative w-full h-full p-3">
    <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 z-10 flex items-center gap-2">
      <span class="dot-pulse"></span>
      <span>Auto Chart Recommender</span>
    </div>
    <div class="absolute top-3 right-3 font-mono text-[10px] text-ember-500 z-10 uppercase">
      {{ mode }}
    </div>

    <svg :viewBox="`0 0 ${W} ${H}`" class="w-full h-full">
      <line :x1="PAD" :y1="H - PAD" :x2="W - PAD" :y2="H - PAD" stroke="rgba(31,48,56,0.8)" />

      <!-- BAR -->
      <g v-if="mode === 'bar'">
        <rect
          v-for="(p, i) in points"
          :key="i"
          :x="p.x - 10"
          :y="p.y"
          width="20"
          :height="H - PAD - p.y"
          :fill="i === 5 || i === 11 ? '#00D9A3' : '#FF6B35'"
          :opacity="0.6 + (p.v / 200)"
          rx="1"
        />
      </g>

      <!-- LINE -->
      <g v-else-if="mode === 'line'">
        <path :d="linePath" stroke="#FF6B35" stroke-width="2" fill="none" />
        <circle v-for="(p, i) in points" :key="i" :cx="p.x" :cy="p.y" r="3" fill="#FF6B35" />
      </g>

      <!-- AREA -->
      <g v-else>
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#FF6B35" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path :d="areaPath" fill="url(#areaGrad)" />
        <path :d="linePath" stroke="#FF6B35" stroke-width="2" fill="none" />
      </g>
    </svg>
  </div>
</template>
