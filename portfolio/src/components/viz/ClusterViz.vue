<script setup lang="ts">
// 5-cluster scatter plot for cyberbullying GAP research
import { computed, ref, onMounted, onUnmounted } from 'vue'

const tick = ref(0)
let raf = 0

const clusters = [
  { cx: 110, cy: 90,  color: '#FF6B35', label: 'High-Risk' },
  { cx: 290, cy: 90,  color: '#FF8E66', label: 'Aggressive' },
  { cx: 200, cy: 160, color: '#00D9A3', label: 'Moderate' },
  { cx: 110, cy: 230, color: '#5DBFA8', label: 'Bystander' },
  { cx: 290, cy: 230, color: '#8A9BA3', label: 'Low-Risk' },
]

interface Pt { cluster: number; dx: number; dy: number; r: number; phase: number }

const points = ref<Pt[]>([])

function init() {
  const out: Pt[] = []
  for (let c = 0; c < clusters.length; c++) {
    for (let i = 0; i < 22; i++) {
      const a = Math.random() * Math.PI * 2
      const r = Math.random() * 32 + 6
      out.push({
        cluster: c,
        dx: Math.cos(a) * r,
        dy: Math.sin(a) * r,
        r: 2 + Math.random() * 2.4,
        phase: Math.random() * Math.PI * 2,
      })
    }
  }
  points.value = out
}

function loop() {
  tick.value++
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  init()
  raf = requestAnimationFrame(loop)
})
onUnmounted(() => cancelAnimationFrame(raf))

const animatedPoints = computed(() => {
  const t = tick.value * 0.015
  return points.value.map((p) => {
    const c = clusters[p.cluster]!
    return {
      ...p,
      x: c.cx + p.dx + Math.sin(t + p.phase) * 1.5,
      y: c.cy + p.dy + Math.cos(t + p.phase * 1.3) * 1.5,
      color: c.color,
    }
  })
})
</script>

<template>
  <div class="relative w-full h-full p-3">
    <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 z-10 flex items-center gap-2">
      <span class="dot-pulse"></span>
      <span>GAP Clusters · N=672</span>
    </div>

    <svg viewBox="0 0 400 320" class="w-full h-full">
      <!-- axis -->
      <line x1="20" y1="290" x2="380" y2="290" stroke="rgba(31,48,56,0.8)" />
      <line x1="20" y1="20"  x2="20"  y2="290" stroke="rgba(31,48,56,0.8)" />

      <!-- cluster halos -->
      <circle
        v-for="(c, i) in clusters"
        :key="`c-${i}`"
        :cx="c.cx" :cy="c.cy" r="42"
        :fill="c.color" opacity="0.06"
      />

      <!-- points -->
      <circle
        v-for="(p, i) in animatedPoints"
        :key="`p-${i}`"
        :cx="p.x" :cy="p.y" :r="p.r"
        :fill="p.color"
        opacity="0.85"
      />

      <!-- labels -->
      <text
        v-for="(c, i) in clusters"
        :key="`l-${i}`"
        :x="c.cx" :y="c.cy - 50"
        text-anchor="middle"
        font-family="JetBrains Mono"
        font-size="9"
        :fill="c.color"
      >{{ c.label }}</text>
    </svg>
  </div>
</template>
