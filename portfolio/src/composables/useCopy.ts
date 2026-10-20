import { ref } from 'vue'

export function useCopy() {
  const copied = ref(false)

  async function copy(text: string, fallbackEl?: HTMLElement | null) {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      setTimeout(() => (copied.value = false), 1600)
    } catch {
      if (fallbackEl) {
        const r = document.createRange()
        r.selectNodeContents(fallbackEl)
        const s = getSelection()
        s?.removeAllRanges()
        s?.addRange(r)
      }
    }
  }

  return { copied, copy }
}
