<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'
import type { Article } from '../types'

const { t, tm, locale } = useI18n()
useReveal()
const articles = computed(() => { void locale.value; return tm('writing.articles') as unknown as Article[] })
const platformLabel: Record<string, string> = { medium: 'Medium', ithome: 'iThome', github: 'GitHub' }
</script>

<template>
  <main class="wrap writing">
    <div class="crumb"><router-link to="/">Tim Wei</router-link> &nbsp;/&nbsp; {{ t('writing.crumb') }}</div>
    <header class="wh">
      <h1 class="zh9">{{ t('writing.pageTitle') }}</h1>
      <p class="lede">{{ t('writing.pageSub') }}</p>
    </header>
    <ol class="list reveal">
      <li v-for="(a, i) in articles" :key="a.url">
        <a :href="a.url" target="_blank" rel="noopener noreferrer">
          <span class="no">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="t">{{ a.title }}<small>{{ a.tag }}</small></span>
          <span class="p">{{ platformLabel[a.platform ?? 'medium'] }}</span>
          <span class="y">{{ a.date }}</span>
        </a>
      </li>
    </ol>
  </main>
</template>

<style scoped>
.crumb{font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);padding:18px 0 0}
.crumb a:hover{color:var(--accent)}
.wh{padding-block:22px clamp(28px,4vw,48px);border-bottom:2px solid var(--ink)}
h1{margin:0;font-size:clamp(36px,5.5vw,76px)}
.lede{font-family:var(--serif);font-size:clamp(16px,1.4vw,19px);color:var(--muted);margin:14px 0 0;max-width:36em}
.list{list-style:none;margin:0;padding:0 0 clamp(40px,6vw,80px)}
.list a{display:grid;grid-template-columns:48px 1fr 90px 60px;gap:16px;align-items:baseline;padding:20px 0;border-bottom:1px solid var(--line);transition:padding-left .25s,color .15s}
.list a:hover{padding-left:8px;color:var(--accent)}
.no{font-family:var(--serif);font-style:italic;color:var(--accent)}
.t{font-family:var(--zh);font-weight:700;font-size:clamp(16px,1.6vw,20px);line-height:1.4}
.t small{display:block;font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-top:6px;font-weight:400}
.p{font-family:var(--mono);font-size:12px;color:var(--muted)}
.y{font-family:var(--display);font-weight:700;font-stretch:75%;font-size:18px;text-align:right}
@media (max-width:640px){.list a{grid-template-columns:36px 1fr 50px}.p{display:none}}
</style>
