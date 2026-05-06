<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Awards from './components/Awards.vue'
import Skills from './components/Skills.vue'
import Writing from './components/Writing.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

let observer: IntersectionObserver | null = null

onMounted(() => {
  // Graceful degradation: if IntersectionObserver isn't supported, show all
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -5% 0px', threshold: 0.01 }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el))

  // Failsafe: any reveal still hidden 4s after load gets force-revealed
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
      const rect = el.getBoundingClientRect()
      // If element is above viewport (already scrolled past), reveal it
      if (rect.top < window.innerHeight) {
        el.classList.add('is-visible')
      }
    })
  }, 4000)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="min-h-screen bg-ink-800 text-bone-200">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Skills />
      <Writing />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
</template>
