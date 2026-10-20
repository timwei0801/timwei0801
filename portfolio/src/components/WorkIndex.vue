<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { images } from '../data/figures'
import type { IndexItem } from '../types'

const { t, tm } = useI18n()
const items = computed(() => tm('index.items') as unknown as IndexItem[])

// Cursor-follow preview on fine pointers; on touch the row simply links through.
const fine = ref(false)
onMounted(() => { fine.value = matchMedia('(hover:hover)').matches && window.innerWidth > 860 })

const preview = ref<{ src: string; cap: string } | null>(null)
const pos = ref({ x: 0, y: 0 })

function enter(it: IndexItem) {
  if (fine.value && it.img) preview.value = { src: images[it.img] ?? '', cap: it.title }
}
function move(e: MouseEvent) { pos.value = { x: e.clientX, y: e.clientY } }
function leave() { preview.value = null }

// Only bind the attributes each kind of row needs: an explicit `href: undefined`
// would fall through onto RouterLink's own <a> and wipe its computed href.
function linkAttrs(it: IndexItem) {
  if (it.slug) return { to: `/work/${it.slug}` }
  if (it.href) return { href: it.href, target: '_blank', rel: 'noopener noreferrer' }
  return {}
}
</script>

<template>
  <section class="index wrap" id="index">
    <div class="head reveal">
      <h2 class="cond">{{ t('index.title') }}<small>{{ t('index.sub') }}</small></h2>
      <span class="mono">{{ t('index.count') }}</span>
    </div>
    <div class="rows" @mousemove="move">
      <component
        v-for="it in items"
        :key="it.no"
        :is="it.slug ? RouterLink : 'a'"
        v-bind="linkAttrs(it)"
        :class="['row', { static: !it.slug && !it.href }]"
        @mouseenter="enter(it)"
        @mouseleave="leave"
      >
        <span class="no">{{ it.no }}</span>
        <span class="t">{{ it.title }}<small>{{ it.sub }}</small></span>
        <span class="k">{{ it.kind }}</span>
        <span class="k">{{ it.tech }}</span>
        <span class="y">{{ it.year }}</span>
      </component>
    </div>
    <p class="more">{{ t('index.hint') }}</p>
    <div class="preview" :class="{ on: preview }" :style="{ left: pos.x + 'px', top: pos.y + 'px' }" aria-hidden="true">
      <img v-if="preview" :src="preview.src" alt="" />
      <span class="pc">{{ preview?.cap }}</span>
    </div>
  </section>
</template>

<style scoped>
.index{padding-block:clamp(40px,6vw,80px) 0}
.head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:14px;padding-bottom:12px;border-bottom:2px solid var(--rule);gap:16px;flex-wrap:wrap}
h2{margin:0;font-size:clamp(44px,7.5vw,110px)}
h2 small{display:block;font-family:var(--zh);font-weight:700;font-size:clamp(13px,1.3vw,17px);letter-spacing:.3em;text-transform:none;line-height:1.4;margin-top:10px}
.row{display:grid;grid-template-columns:64px 1.6fr 1fr 1fr 84px;gap:16px;align-items:center;padding:20px 0;border-bottom:1px solid var(--ink);font-size:15px;transition:background .15s,color .15s,padding .25s;cursor:pointer;position:relative}
.row.static{cursor:default}
.row:hover,.row:focus-visible{background:var(--ink);color:var(--paper);padding-left:14px;padding-right:14px}
.no{font-family:var(--serif);font-style:italic;font-size:15px;color:var(--accent)}
.row:hover .no{color:var(--paper)}
.t{font-family:var(--zh);font-weight:900;font-size:clamp(20px,2.3vw,30px);line-height:1.2}
.t small{display:block;font-family:var(--serif);font-weight:400;font-size:17px;color:var(--muted);margin-top:4px}
.row:hover .t small{color:var(--paper);opacity:.7}
.k{font-family:var(--mono);font-size:12px;letter-spacing:.06em}
.y{font-family:var(--display);font-weight:700;font-stretch:75%;font-size:22px;text-align:right}
@media (max-width:860px){.row{grid-template-columns:40px 1fr 60px}.k{display:none}}
.preview{position:fixed;left:0;top:0;width:360px;aspect-ratio:16/10;pointer-events:none;z-index:30;opacity:0;transform:translate(-50%,-50%) scale(.9) rotate(-2deg);transition:opacity .2s,transform .3s cubic-bezier(.2,.8,.2,1);border:2px solid var(--ink);background:#fff;overflow:hidden}
.preview.on{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(-2deg)}
.preview img{width:100%;height:100%;object-fit:cover;object-position:top left}
.pc{position:absolute;left:0;right:0;bottom:0;background:var(--ink);color:var(--paper);font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;padding:5px 8px}
@media (hover:none),(max-width:860px){.preview{display:none}}
.more{text-align:right;padding:16px 0 0;margin:0;font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
</style>
