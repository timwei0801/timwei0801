import { onMounted, onUnmounted, ref } from 'vue'

// Cycles an index through `count` items every `intervalMs`.
// Stays on the first item when the viewer prefers reduced motion,
// and can be paused (e.g. while hovered).
export function useRotation(count: () => number, intervalMs = 4500) {
  const index = ref(0)
  const paused = ref(false)
  let timer = 0

  onMounted(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    timer = window.setInterval(() => {
      const n = count()
      if (!paused.value && n > 1) index.value = (index.value + 1) % n
    }, intervalMs)
  })
  onUnmounted(() => window.clearInterval(timer))

  return { index, paused }
}
