<script setup lang="ts">
// Animated force-directed-style network graph for BitoGuard
// Pure SVG, no D3 needed for this scale.
import { computed, ref, onMounted, onUnmounted } from 'vue'

interface Node { id: number; x: number; y: number; r: number; fraud: boolean }
interface Edge { a: number; b: number }

const nodes = ref<Node[]>([])
const edges = ref<Edge[]>([])
const tick = ref(0)
let raf = 0

const W = 400
const H = 300

function init() {
  const seed: Node[] = [
    { id: 0, x: 200, y: 150, r: 14, fraud: true },
    { id: 1, x: 120, y: 80,  r: 8,  fraud: false },
    { id: 2, x: 290, y: 100, r: 8,  fraud: false },
    { id: 3, x: 100, y: 220, r: 8,  fraud: false },
    { id: 4, x: 320, y: 220, r: 8,  fraud: false },
    { id: 5, x: 220, y: 60,  r: 8,  fraud: false },
    { id: 6, x: 60,  y: 140, r: 6,  fraud: true  },
    { id: 7, x: 340, y: 60,  r: 6,  fraud: false },
    { id: 8, x: 160, y: 260, r: 6,  fraud: false },
    { id: 9, x: 280, y: 270, r: 6,  fraud: true  },
    { id: 10,x: 240, y: 200, r: 5,  fraud: false },
    { id: 11,x: 80,  y: 60,  r: 5,  fraud: false },
  ]
  const e: Edge[] = [
    { a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 0, b: 5 },
    { a: 1, b: 6 }, { a: 2, b: 7 }, { a: 3, b: 8 }, { a: 4, b: 9 },
    { a: 1, b: 5 }, { a: 5, b: 11 }, { a: 0, b: 10 }, { a: 10, b: 4 }, { a: 6, b: 11 },
  ]
  nodes.value = seed
  edges.value = e
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

const animatedNodes = computed(() => {
  return nodes.value.map((n, i) => {
    const dx = Math.sin((tick.value + i * 30) * 0.02) * 2.4
    const dy = Math.cos((tick.value + i * 22) * 0.025) * 2.4
    return { ...n, ax: n.x + dx, ay: n.y + dy }
  })
})

const animatedEdges = computed(() => {
  const map = new Map(animatedNodes.value.map(n => [n.id, n]))
  return edges.value.map(e => {
    const a = map.get(e.a)!
    const b = map.get(e.b)!
    return { x1: a.ax, y1: a.ay, x2: b.ax, y2: b.ay, fraudLink: a.fraud && b.fraud }
  })
})
</script>

<template>
  <div class="relative w-full h-full">
    <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 z-10 flex items-center gap-2">
      <span class="dot-pulse"></span>
      <span>Fraud Network · Live</span>
    </div>
    <div class="absolute top-3 right-3 font-mono text-[10px] text-bone-500 z-10">
      <span class="text-ember-500">●</span> Fraud
      <span class="text-mint-500 ml-3">●</span> Normal
    </div>
    <svg :viewBox="`0 0 ${W} ${H}`" class="w-full h-full">
      <line
        v-for="(e, i) in animatedEdges"
        :key="`e-${i}`"
        :x1="e.x1" :y1="e.y1" :x2="e.x2" :y2="e.y2"
        :stroke="e.fraudLink ? 'rgba(255,107,53,0.5)' : 'rgba(31,48,56,0.8)'"
        stroke-width="1"
      />
      <circle
        v-for="n in animatedNodes"
        :key="`n-${n.id}`"
        :cx="n.ax" :cy="n.ay" :r="n.r"
        :fill="n.fraud ? '#FF6B35' : '#00D9A3'"
        :opacity="n.fraud ? 0.95 : 0.85"
      />
      <circle
        v-for="n in animatedNodes.filter(x => x.fraud)"
        :key="`p-${n.id}`"
        :cx="n.ax" :cy="n.ay" :r="n.r + 6"
        fill="none"
        stroke="#FF6B35"
        stroke-width="1"
        opacity="0.4"
      >
        <animate attributeName="r" :from="n.r + 4" :to="n.r + 14" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
</template>
