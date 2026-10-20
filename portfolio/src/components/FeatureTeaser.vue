<script setup lang="ts">
// Home feature: rotates through the three featured cases, and within each
// case through its figures. Hover pauses; the numbered tabs switch cases.
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { images, vizComponents } from '../data/figures'
import type { FeatureItem } from '../types'

const { t, tm, locale } = useI18n()
const items = computed(() => { void locale.value; return tm('feature.items') as unknown as FeatureItem[] })

// One clock. Every STEP ms it shows the case's next figure; after the last
// figure has had its turn it moves to the next case, starting on figure 1.
const STEP = 4000
const root = ref<HTMLElement | null>(null)
const pi = ref(0)
const fi = ref(0)
const paused = ref(false)
const cur = computed(() => items.value[pi.value % items.value.length] ?? items.value[0])
const fig = computed(() => cur.value?.figs[fi.value % cur.value.figs.length] ?? cur.value?.figs[0])

let timer = 0
let observer: IntersectionObserver | undefined
function tick() {
  if (paused.value) return
  const n = cur.value?.figs.length ?? 1
  if (fi.value < n - 1) fi.value++
  else { pi.value = (pi.value + 1) % items.value.length; fi.value = 0 }
}
function start() { if (!timer) timer = window.setInterval(tick, STEP) }
function restart() { window.clearInterval(timer); timer = 0; start() }
function pick(i: number) { pi.value = i; fi.value = 0; restart() }
function pickFig(k: number) { fi.value = k; restart() }
onMounted(() => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
  const el = root.value
  if (!el || !('IntersectionObserver' in window)) return start()
  observer = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { start(); observer?.disconnect() } }, { threshold: 0.3 })
  observer.observe(el)
})
onUnmounted(() => { window.clearInterval(timer); observer?.disconnect() })
</script>

<template>
  <article class="feature wrap reveal" ref="root" @mouseenter="paused = true" @mouseleave="paused = false">
    <div class="kicker"><span><b>{{ t('feature.kicker') }} · {{ cur?.no }}</b> · {{ cur?.meta }}</span><span>{{ cur?.tech }}</span></div>
    <div class="text">
      <transition name="swap" mode="out-in">
        <div :key="cur?.slug">
          <h3 class="zh9">{{ cur?.title }}</h3>
          <p class="sub">{{ cur?.sub }}</p>
          <p class="first">{{ cur?.body }}</p>
          <router-link class="read" :to="`/work/${cur?.slug}`">{{ t('feature.read') }}</router-link>
        </div>
      </transition>
      <div class="tabs" role="tablist">
        <button v-for="(it, i) in items" :key="it.slug" type="button" role="tab" :aria-selected="i === pi % items.length" :class="{ on: i === pi % items.length }" @click="pick(i)">{{ it.no }}</button>
      </div>
    </div>
    <figure class="figure">
      <div class="stage">
        <template v-for="(f, k) in cur?.figs ?? []" :key="cur?.slug + '-' + k">
          <div class="slide" :class="{ show: k === fi % (cur?.figs.length ?? 1) }" :aria-hidden="k !== fi % (cur?.figs.length ?? 1)">
            <div v-if="f.viz" class="panel"><component :is="vizComponents[f.viz]" /></div>
            <img v-else :src="images[f.img ?? '']" :alt="f.alt ?? f.cap" />
          </div>
        </template>
      </div>
      <figcaption class="figcap">
        <b>{{ t('feature.figNo') }}</b>
        <span v-if="fig?.illustration" class="ill">{{ t('caseUi.illustration') }} · </span>{{ fig?.cap }}
      </figcaption>
      <div class="fdots">
        <button v-for="(f, k) in cur?.figs ?? []" :key="'f' + k" type="button" :class="{ on: k === fi % (cur?.figs.length ?? 1) }" :aria-label="f.cap" @click="pickFig(k)"></button>
      </div>
    </figure>
  </article>
</template>

<style scoped>
.feature{display:grid;grid-template-columns:repeat(12,1fr);gap:0 28px;padding-block:clamp(40px,6vw,72px);border-top:2px solid var(--ink);margin-top:48px}
.kicker{grid-column:1/-1;display:flex;justify-content:space-between;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:18px;gap:12px;flex-wrap:wrap}
.kicker b{color:var(--accent);font-weight:500}
.text{grid-column:1/6;display:flex;flex-direction:column;gap:18px}
.figure{grid-column:6/13;margin:0}
h3{margin:0 0 10px;font-size:clamp(28px,3vw,42px)}
.sub{font-family:var(--serif);font-style:italic;color:var(--muted);font-size:20px;margin:0 0 18px}
.first{font-family:var(--serif);font-size:20px;line-height:1.85;margin:0 0 14px}
.first::first-letter{font-family:var(--serif);font-size:3em;float:left;line-height:.85;padding:6px 10px 0 0;color:var(--accent);font-weight:700}
.read{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;display:inline-flex;gap:8px;border-bottom:1px solid var(--ink);padding-bottom:2px}
.read:hover{color:var(--accent);border-color:var(--accent)}
.tabs{display:flex;gap:8px;margin-top:auto;padding-top:10px}
.tabs button{font-family:var(--mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;background:transparent;border:1px solid var(--line);color:var(--muted);padding:6px 12px;cursor:pointer;transition:all .15s}
.tabs button:hover{border-color:var(--ink);color:var(--ink)}
.tabs button.on{background:var(--ink);color:var(--paper);border-color:var(--ink)}
.stage{position:relative;aspect-ratio:16/10;border:1px solid var(--line);background:#fff;overflow:hidden}
.slide{position:absolute;inset:0;opacity:0;transition:opacity .8s ease}
.slide.show{opacity:1}
.slide img{width:100%;height:100%;object-fit:contain;padding:10px}
.panel{width:100%;height:100%;background:#0e1a1f;color:#e8eef1}
.ill{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase}
.fdots{display:flex;gap:6px;margin-top:8px}
.fdots button{width:22px;height:3px;border:0;background:var(--line);padding:0;cursor:pointer}
.fdots button.on{background:var(--accent)}
.swap-enter-active,.swap-leave-active{transition:opacity .3s ease,transform .3s ease}
.swap-enter-from{opacity:0;transform:translateY(10px)}
.swap-leave-to{opacity:0;transform:translateY(-6px)}
@media (max-width:860px){.text,.figure{grid-column:1/-1}.figure{margin-top:22px}}
</style>
