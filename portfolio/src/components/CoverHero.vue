<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { images, imageHints } from '../data/figures'
import { useRotation } from '../composables/useRotation'
import type { CoverLine, CoverPhoto } from '../types'

const { t, tm, locale } = useI18n()
const lines = computed(() => { void locale.value; return tm('cover.lines') as unknown as CoverLine[] })
const photos = computed(() => { void locale.value; return tm('cover.photos') as unknown as CoverPhoto[] })

// The cover photo cycles through Tim's own event photos; hover pauses it.
const stage = ref<HTMLElement | null>(null)
const { index, paused } = useRotation(() => photos.value.length, 5200, stage)
const cur = computed(() => photos.value[index.value % photos.value.length] ?? photos.value[0])
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
    <div class="right" ref="stage" @mouseenter="paused = true" @mouseleave="paused = false">
      <img
        v-for="(ph, k) in photos"
        :key="ph.img"
        :src="images[ph.img]"
        :alt="ph.alt ?? ph.cap"
        :class="{ show: k === index % photos.length }"
        :style="{ objectPosition: ph.img === 'tim' ? '62% 30%' : (imageHints[ph.img]?.position ?? 'center 40%') }"
        :fetchpriority="k === 0 ? 'high' : undefined"
        :aria-hidden="k !== index % photos.length"
      />
      <div class="issue">{{ t('cover.issue') }}<small>{{ t('cover.issueSub') }}</small></div>
      <span class="cap"><b>{{ t('caseUi.figure') }} 1</b>{{ cur?.cap }}</span>
      <div class="dots" role="tablist">
        <button v-for="(ph, k) in photos" :key="'d' + k" type="button" :class="{ on: k === index % photos.length }" :aria-label="ph.cap" @click="index = k"></button>
      </div>
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
.lines a{display:grid;grid-template-columns:110px 1fr auto;gap:16px;align-items:baseline;padding:14px 0;border-bottom:1px solid var(--line);font-family:var(--serif);font-size:19.5px;transition:padding-left .25s}
.lines a:hover{padding-left:8px;color:var(--accent)}
.lines a .mono{color:var(--accent)}
.lines a b{font-family:var(--zh);font-weight:700}
.lines a .arr{font-family:var(--display);transition:transform .2s}
.lines a:hover .arr{transform:translateX(4px)}
.right{position:relative;border-left:2px solid var(--ink);min-height:520px;overflow:hidden;background:var(--paper-2)}
.right img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:contrast(1.05);opacity:0;transform:scale(1.04);transition:opacity 1.1s ease,transform 6s linear}
.right img.show{opacity:1;transform:scale(1)}
.issue{position:absolute;top:18px;right:18px;background:var(--accent);color:var(--accent-ink);font-family:var(--display);font-weight:900;font-stretch:62%;text-transform:uppercase;font-size:clamp(28px,3vw,44px);line-height:.9;padding:10px 12px 8px;text-align:right}
.issue small{display:block;font-family:var(--mono);font-weight:400;font-size:10px;letter-spacing:.14em;margin-top:6px;font-stretch:100%;text-transform:none}
.cap{position:absolute;left:14px;bottom:14px;background:var(--paper);padding:6px 10px;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;max-width:calc(100% - 120px)}
.cap b{color:var(--accent);margin-right:8px}
.dots{position:absolute;right:14px;bottom:18px;display:flex;gap:6px}
.dots button{width:8px;height:8px;border-radius:50%;border:1px solid var(--paper);background:transparent;padding:0;cursor:pointer;opacity:.85}
.dots button.on{background:var(--paper)}
@media (max-width:900px){.cover{grid-template-columns:1fr}.right{border-left:0;border-top:2px solid var(--ink);min-height:420px}.lines a{grid-template-columns:1fr auto}.lines a .mono{display:none}}
</style>
