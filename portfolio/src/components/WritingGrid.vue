<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Channel } from '../types'

const { t, tm } = useI18n()
const posts = computed(() => tm('writing.channels') as unknown as Channel[])
</script>

<template>
  <section class="writing wrap reveal" id="writing">
    <div class="head"><h3>{{ t('writing.title') }}</h3><router-link class="mono all" to="/writing">{{ t('writing.all') }}</router-link></div>
    <div class="posts">
      <a v-for="p in posts" :key="p.url" class="post" :href="p.url" target="_blank" rel="noopener noreferrer">
        <span class="mono">{{ p.k }}</span>
        <h4>{{ p.title }}</h4>
        <p>{{ p.p }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.writing{padding-block:clamp(36px,5vw,64px);border-top:1px solid var(--rule)}
.head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:22px}
h3{margin:0;font-family:var(--serif);font-weight:500;font-style:italic;font-size:26px}
.all:hover{color:var(--accent)}
.posts{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
.post{border-top:2px solid var(--rule);padding-top:14px}
.post h4{margin:8px 0 6px;font-family:var(--zh);font-weight:700;font-size:18px;line-height:1.4}
.post:hover h4{color:var(--accent)}
.post p{margin:0;font-family:var(--serif);font-size:14px;color:var(--muted)}
@media (max-width:960px){.posts{grid-template-columns:1fr 1fr}}
@media (max-width:560px){.posts{grid-template-columns:1fr}}
</style>
