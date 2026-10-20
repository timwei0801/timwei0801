import { createRouter, createWebHistory } from 'vue-router'
import { glideTo } from './composables/glide'

// History mode on GitHub Pages: the build copies index.html to 404.html so
// deep links (e.g. /timwei0801/work/adviz) resolve to the app.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('./views/HomeView.vue') },
    { path: '/work/:slug', name: 'case', component: () => import('./views/CaseView.vue'), props: true },
    { path: '/about', name: 'about', component: () => import('./views/AboutView.vue') },
    { path: '/writing', name: 'writing', component: () => import('./views/WritingView.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('./views/NotFoundView.vue') },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
    // Let the out-in page transition swap views first (a scroll issued during
    // the swap is dropped in Safari), then glide to the top at our own pace.
    return new Promise((resolve) => setTimeout(() => { void glideTo(0, 900); resolve(false) }, 260))
  },
})

export default router
