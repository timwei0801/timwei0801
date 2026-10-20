<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { images } from '../data/figures'

const { t } = useI18n()
</script>

<template>
  <article class="feature wrap reveal">
    <div class="kicker"><span><b>{{ t('feature.kicker') }}</b> · {{ t('feature.kickerAfter') }}</span><span>{{ t('feature.tech') }}</span></div>
    <div class="text">
      <h3 class="zh9">{{ t('feature.title') }}</h3>
      <p class="sub">{{ t('feature.sub') }}</p>
      <p class="first">{{ t('feature.body') }}</p>
      <router-link class="read" to="/work/adviz">{{ t('feature.read') }}</router-link>
    </div>
    <figure class="figure">
      <img :src="images['adviz-showcase']" :alt="t('feature.figAlt')" loading="lazy" />
      <figcaption class="figcap"><b>{{ t('feature.figNo') }}</b>{{ t('feature.figCap') }}</figcaption>
    </figure>
  </article>
</template>

<style scoped>
.feature{display:grid;grid-template-columns:repeat(12,1fr);gap:0 28px;padding-block:clamp(40px,6vw,72px);border-top:2px solid var(--ink);margin-top:48px}
.kicker{grid-column:1/-1;display:flex;justify-content:space-between;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;gap:12px;flex-wrap:wrap}
.kicker b{color:var(--accent);font-weight:500}
.text{grid-column:1/6}
.figure{grid-column:6/13;margin:0}
h3{margin:0 0 10px;font-size:clamp(28px,3vw,42px)}
.sub{font-family:var(--serif);font-style:italic;color:var(--muted);font-size:17px;margin:0 0 18px}
.first{font-family:var(--serif);font-size:16.5px;line-height:1.8;margin:0 0 14px}
.first::first-letter{font-family:var(--serif);font-size:3em;float:left;line-height:.85;padding:6px 10px 0 0;color:var(--accent);font-weight:700}
.read{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;display:inline-flex;gap:8px;border-bottom:1px solid var(--ink);padding-bottom:2px}
.read:hover{color:var(--accent);border-color:var(--accent)}
.figure img{border:1px solid var(--line);background:#fff;width:100%}
@media (max-width:860px){.text,.figure{grid-column:1/-1}.figure{margin-top:22px}}
</style>
