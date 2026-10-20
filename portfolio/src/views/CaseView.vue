<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'
import CaseFigure from '../components/CaseFigure.vue'
import NotFoundView from './NotFoundView.vue'
import type { CaseData, CaseBlock } from '../types'

const props = defineProps<{ slug: string }>()
const { t, te, tm, locale } = useI18n()
useReveal()

const exists = computed(() => te(`cases.${props.slug}.title`))
const data = computed(() => {
  void locale.value
  return tm(`cases.${props.slug}`) as unknown as CaseData
})

// Figure numbers run through the page: the lead figure is 1, then every
// figure block in reading order.
const figNumbers = computed(() => {
  const map = new Map<CaseBlock, number>()
  let n = 1
  for (const s of data.value.sections) for (const b of s.blocks) if (b.type === 'fig') map.set(b, ++n)
  return map
})

// TOC shows the part before the colon (問題 / 方法 / ...)
const shortTitle = (title: string) => title.split('：')[0]?.split(':')[0] ?? title
const siblingTitle = (slug: string | null) => (slug && te(`cases.${slug}.title`) ? t(`cases.${slug}.title`) : '')
const siblingNo = (slug: string | null) => (slug && te(`cases.${slug}.no`) ? t(`cases.${slug}.no`) : '')

// Active section in the sticky TOC.
const active = ref('')
let io: IntersectionObserver | null = null
function observeHeadings() {
  io?.disconnect()
  if (!('IntersectionObserver' in window)) return
  io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) active.value = (e.target as HTMLElement).id }),
    { rootMargin: '-20% 0px -70% 0px' },
  )
  document.querySelectorAll<HTMLElement>('.prose h2[id]').forEach((h) => io?.observe(h))
}
onMounted(() => nextTick(observeHeadings))
watch(() => props.slug, () => nextTick(observeHeadings))
onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <NotFoundView v-if="!exists" />
  <main v-else class="wrap case">
    <div class="crumb"><router-link to="/#index">{{ t('caseUi.crumbIndex') }}</router-link> &nbsp;/&nbsp; {{ t('caseUi.crumbCase') }} {{ data.no }}</div>
    <header class="ch">
      <div class="kicker"><span>{{ data.kicker }}</span><span>{{ data.tech }}</span></div>
      <h1 class="zh9">{{ data.title }}<small>{{ data.sub }}</small></h1>
      <div class="meta">
        <div v-for="m in data.meta" :key="m.k">
          <b>{{ m.k }}</b>
          <template v-if="m.links">
            <template v-for="(l, i) in m.links" :key="l.u"><a :href="l.u" target="_blank" rel="noopener noreferrer">{{ l.t }}</a><span v-if="i < (m.links?.length ?? 0) - 1"> · </span></template>
          </template>
          <template v-else>{{ m.v }}</template>
        </div>
      </div>
    </header>

    <div class="lead reveal">
      <CaseFigure :n="1" :img="data.lead.img" :cap="data.lead.cap" :alt="data.lead.alt" />
    </div>

    <div class="body">
      <aside class="toc">
        <ol>
          <li v-for="s in data.sections" :key="s.id"><a :href="'#' + s.id" :class="{ on: active === s.id }"><span>{{ s.no }}</span>{{ shortTitle(s.title) }}</a></li>
        </ol>
        <router-link class="back" to="/#index">{{ t('caseUi.back') }}</router-link>
      </aside>
      <div class="prose">
        <template v-for="s in data.sections" :key="s.id">
          <h2 :id="s.id"><span>{{ s.no }}</span>{{ s.title }}</h2>
          <template v-for="(b, i) in s.blocks" :key="s.id + i">
            <p v-if="b.type === 'p'" :class="{ dc: b.dropcap }">{{ b.text }}</p>
            <ul v-else-if="b.type === 'ul'"><li v-for="li in b.items" :key="li">{{ li }}</li></ul>
            <div v-else-if="b.type === 'pull'" class="pull">{{ b.text }}</div>
            <CaseFigure v-else-if="b.type === 'fig'" class="reveal figblock" :n="figNumbers.get(b) ?? 0" :img="b.img" :viz="b.viz" :cap="b.cap" :alt="b.alt" :wide="b.wide" :illustration="b.illustration" />
            <table v-else-if="b.type === 'table'" class="res">
              <thead><tr><th v-for="h in b.head" :key="h">{{ h }}</th></tr></thead>
              <tbody>
                <tr v-for="(r, ri) in b.rows" :key="ri" :class="{ hi: b.hi?.includes(ri) }">
                  <td v-for="(c, ci) in r" :key="ci" :class="{ n: ci > 0 && /^[0-9.]+$/.test(c) }">{{ c }}</td>
                </tr>
              </tbody>
            </table>
          </template>
        </template>
      </div>
    </div>
  </main>
  <nav v-if="exists" class="next wrap">
    <router-link v-if="data.prev" :to="`/work/${data.prev}`"><span class="mono">← {{ t('caseUi.prev') }} {{ siblingNo(data.prev) }}</span><b>{{ siblingTitle(data.prev) }}</b></router-link>
    <router-link v-else to="/#index"><span class="mono">{{ t('caseUi.back') }}</span><b>{{ t('caseUi.allWork') }}</b></router-link>
    <router-link v-if="data.next" :to="`/work/${data.next}`"><span class="mono">{{ t('caseUi.next') }} {{ siblingNo(data.next) }} →</span><b>{{ siblingTitle(data.next) }}</b></router-link>
    <router-link v-else to="/#index"><span class="mono">{{ t('caseUi.allWork') }} →</span><b>{{ t('caseUi.crumbIndex') }}</b></router-link>
  </nav>
</template>

<style scoped>
.crumb{font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);padding:18px 0 0}
.crumb a:hover{color:var(--accent)}
.ch{padding-block:22px 0;border-bottom:1px solid var(--rule)}
.kicker{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.kicker span:first-child{color:var(--accent)}
h1{margin:14px 0 0;font-size:clamp(36px,6vw,84px);line-height:1.1;text-wrap:balance;max-width:14em}
h1 small{display:block;font-family:var(--serif);font-weight:400;font-style:italic;font-size:clamp(18px,2vw,26px);color:var(--muted);margin-top:14px;line-height:1.4;letter-spacing:0}
.meta{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;border-top:1px solid var(--rule);margin-top:34px;padding:16px 0 24px;font-family:var(--serif);font-size:14.5px}
.meta b{display:block;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:500;margin-bottom:6px}
.meta a{border-bottom:1px solid var(--line)}.meta a:hover{color:var(--accent);border-color:var(--accent)}
@media (max-width:760px){.meta{grid-template-columns:1fr 1fr}}
.lead{padding-block:34px 0}
.body{display:grid;grid-template-columns:repeat(12,1fr);gap:0 28px;padding-block:clamp(36px,5vw,64px)}
.toc{grid-column:1/4;position:sticky;top:76px;align-self:start}
.toc ol{list-style:none;margin:0;padding:0;border-top:2px solid var(--ink)}
.toc li a{display:grid;grid-template-columns:28px 1fr;gap:8px;padding:10px 0;border-bottom:1px solid var(--line);font-size:14px;font-family:var(--zh);font-weight:500;transition:padding-left .2s}
.toc li a:hover,.toc li a.on{color:var(--accent);padding-left:6px}
.toc li a span{font-family:var(--serif);font-style:italic;color:var(--accent)}
.back{display:block;margin-top:18px;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.back:hover{color:var(--accent)}
.prose{grid-column:4/12;font-family:var(--serif);font-size:17.5px;line-height:1.9;min-width:0}
.prose h2{font-family:var(--zh);font-weight:900;font-size:clamp(24px,2.6vw,34px);line-height:1.25;margin:clamp(36px,5vw,64px) 0 16px;letter-spacing:-.01em;display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:baseline;scroll-margin-top:80px}
.prose h2:first-child{margin-top:0}
.prose h2 span{font-family:var(--serif);font-style:italic;font-weight:400;font-size:.8em;color:var(--accent)}
.prose p{margin:0 0 18px}
.prose p.dc::first-letter{font-size:3.4em;float:left;line-height:.82;padding:8px 12px 0 0;color:var(--accent);font-weight:700}
.prose .figblock{margin:28px 0 32px}
.prose :deep(.fig.wide){margin-left:calc(-1 * clamp(0px,8vw,120px));margin-right:calc(-1 * clamp(0px,8vw,120px))}
.prose ul{list-style:disc;padding-left:1.2em;margin:0 0 18px}
.prose li{margin-bottom:6px}
.pull{margin:40px 0;padding:28px 0;border-top:2px solid var(--ink);border-bottom:1px solid var(--ink);font-family:var(--serif);font-weight:700;font-size:clamp(22px,2.6vw,32px);line-height:1.45;text-wrap:balance}
.pull::before{content:"「";color:var(--accent)}.pull::after{content:"」";color:var(--accent)}
table.res{width:100%;border-collapse:collapse;font-family:var(--display);font-size:14.5px;margin:10px 0 30px}
table.res th{text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:500;padding:0 0 10px;border-bottom:2px solid var(--ink)}
table.res td{padding:12px 12px 12px 0;border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums}
table.res td.n{font-family:var(--display);font-weight:700;font-stretch:75%;font-size:20px}
table.res tr.hi td{background:var(--accent-soft)}
table.res td:first-child{font-family:var(--zh)}
@media (max-width:900px){.toc,.prose{grid-column:1/-1}.toc{position:static;margin-bottom:28px}.prose :deep(.fig.wide){margin-left:0;margin-right:0}}
.next{border-top:2px solid var(--ink);display:grid;grid-template-columns:1fr 1fr}
.next a{padding:34px var(--gutter) 34px 0;display:flex;flex-direction:column;gap:8px;transition:background .15s,color .15s}
.next a+a{border-left:1px solid var(--ink);padding-left:28px;text-align:right;align-items:flex-end}
.next a:hover{background:var(--ink);color:var(--paper);padding-left:16px}
.next a+a:hover{padding-left:28px;padding-right:16px}
.next .mono{color:inherit;opacity:.7}
.next b{font-family:var(--zh);font-weight:900;font-size:clamp(20px,2.4vw,30px);line-height:1.2}
@media (max-width:600px){.next{grid-template-columns:1fr}.next a+a{border-left:0;border-top:1px solid var(--ink);padding-left:0;text-align:left;align-items:flex-start}}
</style>
