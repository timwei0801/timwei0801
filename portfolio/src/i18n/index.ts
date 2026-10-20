import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import zhTW from './zh-TW'
import en from './en'

type Locale = 'zh-TW' | 'en'

function initialLocale(): Locale {
  try {
    const saved = localStorage.getItem('locale')
    if (saved === 'en' || saved === 'zh-TW') return saved
  } catch { /* storage unavailable */ }
  return 'zh-TW'
}

const i18n = createI18n({
  legacy: false,
  locale: initialLocale(),
  fallbackLocale: 'en',
  messages: { 'zh-TW': zhTW, en },
})

watch(
  i18n.global.locale,
  (l) => {
    document.documentElement.lang = l
    try { localStorage.setItem('locale', l) } catch { /* ignore */ }
  },
  { immediate: true },
)

export default i18n
