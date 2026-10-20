import { onMounted, onBeforeUnmount, nextTick } from 'vue'

// Elements with .reveal are visible at rest; when one enters the viewport it
// gets .in and plays its entrance once. Call once per view.
export function useReveal() {
  let io: IntersectionObserver | null = null

  onMounted(async () => {
    await nextTick()
    if (!('IntersectionObserver' in window)) return
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io?.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io?.observe(el))
  })

  onBeforeUnmount(() => io?.disconnect())
}
