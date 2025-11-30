<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import AOS from 'aos'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Awards from './components/Awards.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Certifications from './components/Certifications.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(async () => {
    isLoading.value = false
    // Wait for DOM update then refresh AOS
    await nextTick()
    setTimeout(() => {
      AOS.refresh()
    }, 100)
  }, 1500)
})
</script>

<template>
  <!-- Loading Screen -->
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-primary-700"
    >
      <div class="text-center">
        <div class="relative w-20 h-20 mx-auto mb-4">
          <div class="absolute inset-0 border-4 border-accent-500/30 rounded-full"></div>
          <div class="absolute inset-0 border-4 border-transparent border-t-accent-500 rounded-full animate-spin"></div>
        </div>
        <p class="text-white font-display text-xl">Loading...</p>
      </div>
    </div>
  </Transition>

  <!-- Main Content -->
  <div class="min-h-screen">
    <Navbar />

    <main>
      <Hero />
      <About />
      <Experience />
      <Awards />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>

    <Footer />
    <ScrollToTop />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
