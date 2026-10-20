// Scroll the window to `top` over `duration` ms with an ease-in-out curve.
// Native `behavior: 'smooth'` is browser-paced and cannot be slowed down.
export function glideTo(top: number, duration = 900): Promise<void> {
  return new Promise((resolve) => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const start = window.scrollY
    const delta = top - start
    if (reduce || Math.abs(delta) < 2 || duration <= 0) {
      window.scrollTo(0, top)
      return resolve()
    }
    const root = document.documentElement
    const prev = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto' // keep the per-frame scrollTo from being re-smoothed
    const t0 = performance.now()
    const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      window.scrollTo(0, start + delta * ease(p))
      if (p < 1) requestAnimationFrame(step)
      else { root.style.scrollBehavior = prev; resolve() }
    }
    requestAnimationFrame(step)
  })
}
