import { onMounted, onUnmounted, ref, type Ref } from 'vue'

// Cycles an index through `count` items every `intervalMs`.
// Stays on the first item when the viewer prefers reduced motion,
// and can be paused (e.g. while hovered). When `startWhenVisible` is given,
// rotation begins only after that element first scrolls into view, so a
// visitor sees slide 1 first and cards further down don't all switch in step.
export function useRotation(
  count: () => number,
  intervalMs = 4500,
  startWhenVisible?: Ref<HTMLElement | null>,
) {
  const index = ref(0)
  const paused = ref(false)
  let timer = 0
  let observer: IntersectionObserver | undefined

  const start = () => {
    if (timer) return
    timer = window.setInterval(() => {
      const n = count()
      if (!paused.value && n > 1) index.value = (index.value + 1) % n
    }, intervalMs)
  }

  onMounted(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const el = startWhenVisible?.value
    if (!el || !('IntersectionObserver' in window)) return start()
    observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        start()
        observer?.disconnect()
      }
    }, { threshold: 0.4 })
    observer.observe(el)
  })
  onUnmounted(() => {
    window.clearInterval(timer)
    observer?.disconnect()
  })

  // Reset to the first item and restart the clock from now (used when an
  // outer rotation changes the set of items).
  const restart = () => {
    index.value = 0
    if (!timer) return
    window.clearInterval(timer)
    timer = 0
    start()
  }

  return { index, paused, restart }
}
