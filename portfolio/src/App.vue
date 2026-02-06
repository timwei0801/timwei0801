<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import AOS from 'aos'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

onMounted(async () => {
  await nextTick()
  setTimeout(() => {
    AOS.refresh()
  }, 100)
})
</script>

<template>
  <!-- Main Content -->
  <div class="min-h-screen">
    <Navbar />

    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>

    <Footer />
    <ScrollToTop />
  </div>
</template>
