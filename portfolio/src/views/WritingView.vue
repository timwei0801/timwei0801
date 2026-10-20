<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'
import type { Article, Channel, ThreadsPost } from '../types'

const { t, tm, locale } = useI18n()
useReveal()
const articles = computed(() => { void locale.value; return tm('writing.articles') as unknown as Article[] })
const channels = computed(() => { void locale.value; return tm('writing.channels') as unknown as Channel[] })
const threads = computed(() => { void locale.value; return tm('writing.threads') as unknown as ThreadsPost[] })
// Threads shows big counts rounded to the thousand (e.g. 4.6 萬), so format the same way.
function fmtViews(n: number) {
  if (locale.value === 'zh-TW') return n >= 10000 ? `${(n / 10000).toFixed(1)} 萬` : n.toLocaleString('en-US')
  return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : String(n)
}
const platformLabel: Record<string, string> = { medium: 'Medium', ithome: 'iThome', github: 'GitHub' }
</script>

<template>
  <main class="wrap writing">
    <div class="crumb"><router-link to="/">Tim Wei</router-link> &nbsp;/&nbsp; {{ t('writing.crumb') }}</div>
    <header class="wh">
      <h1 class="zh9">{{ t('writing.pageTitle') }}</h1>
      <p class="lede">{{ t('writing.pageSub') }}</p>
    </header>
    <section class="channels reveal">
      <h2 class="sect">{{ t('writing.channelsTitle') }}</h2>
      <div class="chgrid">
        <a v-for="c in channels" :key="c.url" class="ch" :href="c.url" target="_blank" rel="noopener noreferrer">
          <span class="mono">{{ c.k }}</span>
          <h3>{{ c.title }}</h3>
          <p>{{ c.p }}</p>
        </a>
      </div>
    </section>
    <section class="threads reveal">
      <h2 class="sect">{{ t('writing.threadsTitle') }}<small>{{ t('writing.threadsSub') }}</small></h2>
      <ol class="list tlist">
        <li v-for="(p, i) in threads" :key="p.url + i">
          <a :href="p.url" target="_blank" rel="noopener noreferrer">
            <span class="no">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="t">{{ p.title }}<small>Threads · {{ p.label }}</small></span>
            <span class="v" v-if="p.views"><b>{{ fmtViews(p.views) }}</b>{{ t('writing.views') }}</span>
            <span class="v" v-else></span>
            <span class="y">{{ p.date.slice(5).replace('-', '/') }}</span>
          </a>
        </li>
      </ol>
    </section>
    <h2 class="sect">{{ t('writing.listTitle') }}</h2>
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
.lede{font-family:var(--serif);font-size:clamp(19px,1.7vw,22px);color:var(--muted);margin:14px 0 0;max-width:36em}
.sect{font-family:var(--serif);font-weight:500;font-style:italic;font-size:26px;margin:clamp(28px,4vw,48px) 0 18px}
.channels{border-bottom:1px solid var(--rule);padding-bottom:clamp(20px,3vw,36px)}
.chgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
.ch{border-top:2px solid var(--rule);padding-top:14px}
.ch h3{margin:8px 0 6px;font-family:var(--zh);font-weight:700;font-size:21px;line-height:1.4}
.ch:hover h3{color:var(--accent)}
.ch p{margin:0;font-family:var(--serif);font-size:18px;color:var(--muted)}
@media (max-width:960px){.chgrid{grid-template-columns:1fr 1fr}}
@media (max-width:560px){.chgrid{grid-template-columns:1fr}}
.sect small{display:block;font-style:normal;font-family:var(--serif);font-size:16px;color:var(--muted);margin-top:6px}
.threads{border-bottom:1px solid var(--rule)}
.tlist{padding-bottom:clamp(20px,3vw,36px)}
.v{font-family:var(--mono);font-size:12px;color:var(--muted);white-space:nowrap;text-align:right}
.v b{font-family:var(--display);font-weight:700;font-stretch:75%;font-size:20px;color:var(--ink);margin-right:6px}
.list{list-style:none;margin:0;padding:0 0 clamp(40px,6vw,80px)}
.list a{display:grid;grid-template-columns:48px 1fr 130px 60px;gap:16px;align-items:baseline;padding:20px 0;border-bottom:1px solid var(--line);transition:padding-left .25s,color .15s}
.list a:hover{padding-left:8px;color:var(--accent)}
.no{font-family:var(--serif);font-style:italic;color:var(--accent)}
.t{font-family:var(--zh);font-weight:700;font-size:clamp(18px,1.8vw,22px);line-height:1.4}
.t small{display:block;font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-top:6px;font-weight:400}
.p{font-family:var(--mono);font-size:12px;color:var(--muted)}
.y{font-family:var(--display);font-weight:700;font-stretch:75%;font-size:18px;text-align:right}
@media (max-width:640px){.list a{grid-template-columns:36px 1fr 50px}.p,.v{display:none}}
</style>
