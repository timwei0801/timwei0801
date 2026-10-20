<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { images } from '../data/figures'
import type { CoverLine } from '../types'

const { t, tm } = useI18n()
const lines = computed(() => tm('cover.lines') as unknown as CoverLine[])
</script>

<template>
  <header class="cover wrap">
    <div class="left">
      <div class="name">
        <p class="cond big">{{ t('cover.nameEn1') }}<br />{{ t('cover.nameEn2') }}</p>
        <div class="zhname">{{ t('cover.nameZh') }}<small>{{ t('cover.sub') }}</small></div>
      </div>
      <p class="tagline">{{ t('cover.tagline1') }}<span>{{ t('cover.taglineEm') }}</span>{{ t('cover.tagline2') }}</p>
      <div class="lines">
        <router-link v-for="(l, i) in lines" :key="i" :to="l.to">
          <span class="mono">{{ l.k }}</span>
          <span><b v-if="l.b">{{ l.b }}</b>{{ l.t }}</span>
          <span class="arr">→</span>
        </router-link>
      </div>
    </div>
    <div class="right">
      <img :src="images.tim" :alt="t('cover.photoAlt')" fetchpriority="high" />
      <div class="issue">{{ t('cover.issue') }}<small>{{ t('cover.issueSub') }}</small></div>
      <span class="cap"><b>{{ t('caseUi.figure') }} 1</b>{{ t('cover.photoCap') }}</span>
    </div>
  </header>
</template>

<style scoped>
.cover{display:grid;grid-template-columns:7fr 5fr;border-bottom:2px solid var(--ink)}
.left{padding:clamp(28px,4vw,56px) clamp(20px,3vw,48px) clamp(28px,4vw,56px) 0;display:flex;flex-direction:column;gap:clamp(20px,3vw,40px);min-width:0}
.name{display:flex;align-items:flex-end;gap:clamp(12px,2vw,28px);flex-wrap:wrap}
.big{font-size:clamp(84px,15vw,230px);margin:0;animation:slide-in 1s cubic-bezier(.2,.8,.2,1) both}
.zhname{font-family:var(--serif);font-weight:900;font-size:clamp(28px,4vw,60px);line-height:1;padding-bottom:.1em;animation:slide-in 1s .1s cubic-bezier(.2,.8,.2,1) both}
.zhname small{display:block;font-family:var(--mono);font-weight:400;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-top:10px}
.tagline{font-family:var(--serif);font-weight:700;font-size:clamp(24px,3vw,42px);line-height:1.3;margin:0;text-wrap:balance}
.tagline span{color:var(--accent)}
.lines{border-top:2px solid var(--ink)}
.lines a{display:grid;grid-template-columns:110px 1fr auto;gap:16px;align-items:baseline;padding:14px 0;border-bottom:1px solid var(--line);font-family:var(--serif);font-size:16px;transition:padding-left .25s}
.lines a:hover{padding-left:8px;color:var(--accent)}
.lines a .mono{color:var(--accent)}
.lines a b{font-family:var(--zh);font-weight:700}
.lines a .arr{font-family:var(--display);transition:transform .2s}
.lines a:hover .arr{transform:translateX(4px)}
.right{position:relative;border-left:2px solid var(--ink);min-height:520px}
.right img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:62% 30%;filter:contrast(1.05)}
.issue{position:absolute;top:18px;right:18px;background:var(--accent);color:var(--accent-ink);font-family:var(--display);font-weight:900;font-stretch:62%;text-transform:uppercase;font-size:clamp(28px,3vw,44px);line-height:.9;padding:10px 12px 8px;text-align:right}
.issue small{display:block;font-family:var(--mono);font-weight:400;font-size:10px;letter-spacing:.14em;margin-top:6px;font-stretch:100%;text-transform:none}
.cap{position:absolute;left:14px;bottom:14px;background:var(--paper);padding:6px 10px;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase}
.cap b{color:var(--accent);margin-right:8px}
@media (max-width:900px){.cover{grid-template-columns:1fr}.right{border-left:0;border-top:2px solid var(--ink);min-height:420px}.lines a{grid-template-columns:1fr auto}.lines a .mono{display:none}}
</style>
