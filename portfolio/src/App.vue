<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SiteNav from './components/SiteNav.vue'
import ContactBand from './components/ContactBand.vue'

const route = useRoute()
const { t, te, locale } = useI18n()

watchEffect(() => {
  // touch locale so the title re-computes on language switch
  void locale.value
  let title = t('meta.home')
  if (route.name === 'case') {
    const key = `cases.${String(route.params.slug)}.title`
    title = te(key) ? `${t(key)} · Tim Wei` : t('meta.notFound')
  } else if (route.name === 'about') title = t('meta.about')
  else if (route.name === 'writing') title = t('meta.writing')
  else if (route.name === 'not-found') title = t('meta.notFound')
  document.title = title
})
</script>

<template>
  <div class="min-h-screen">
    <SiteNav />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath.split('#')[0]" />
      </transition>
    </router-view>
    <ContactBand />
  </div>
</template>
