import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(i18n)

app.mount('#app')

// Initialize AOS after app is mounted
setTimeout(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  })
  // Refresh AOS to detect elements already in viewport
  AOS.refresh()
}, 100)
