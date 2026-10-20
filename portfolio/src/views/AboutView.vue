<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'
import { useRotation } from '../composables/useRotation'
import { images, imageHints } from '../data/figures'
import type { ExperienceItem, AwardItem, SkillGroup, Cert } from '../types'

const { t, tm, locale } = useI18n()
useReveal()

const exp = computed(() => { void locale.value; return tm('about.experience.items') as unknown as ExperienceItem[] })
const awards = computed(() => { void locale.value; return tm('about.awards.items') as unknown as AwardItem[] })
const groups = computed(() => { void locale.value; return tm('about.skills.groups') as unknown as SkillGroup[] })
const certs = computed(() => { void locale.value; return tm('about.certs.items') as unknown as Cert[] })
const toc = computed(() => { void locale.value; return tm('about.toc') as unknown as string[] })
const ids = ['experience', 'awards', 'skills', 'certs']

// Awards with several photos crossfade on one shared clock.
const { index: tick } = useRotation(() => 2, 4500)
</script>

<template>
  <main class="wrap about">
    <div class="crumb"><router-link to="/">Tim Wei</router-link> &nbsp;/&nbsp; {{ t('about.crumb') }}</div>
    <header class="ah">
      <div class="text">
        <h1 class="zh9">{{ t('about.title') }}</h1>
        <p class="lede">{{ t('about.sub') }}</p>
        <ol class="toc">
          <li v-for="(s, i) in toc" :key="s"><a :href="'#' + ids[i]"><span>{{ ['i.', 'ii.', 'iii.', 'iv.'][i] }}</span>{{ s }}</a></li>
        </ol>
      </div>
      <figure class="photo">
        <img :src="images.tim" :alt="t('cover.photoAlt')" />
        <figcaption class="figcap"><b>{{ t('about.photoNo') }}</b>{{ t('about.photoCap') }}</figcaption>
      </figure>
    </header>

    <section class="sec reveal" id="experience">
      <h2><span>i.</span>{{ t('about.experience.title') }}</h2>
      <article v-for="e in exp" :key="e.position" class="job">
        <div class="when">{{ e.period }}</div>
        <div>
          <h3>{{ e.position }}</h3>
          <div class="org">{{ e.company }}</div>
          <p class="desc">{{ e.description }}</p>
          <ul v-if="e.bullets.length"><li v-for="b in e.bullets" :key="b" v-html="b"></li></ul>
        </div>
      </article>
    </section>

    <section class="sec reveal" id="awards">
      <h2><span>ii.</span>{{ t('about.awards.title') }}</h2>
      <p class="secsub">{{ t('about.awards.sub') }}</p>
      <div class="awards">
        <figure v-for="(a, i) in awards" :key="a.name" class="award">
          <div class="frame">
            <img
              v-for="(key, k) in a.images"
              :key="key"
              :src="images[key]"
              :alt="a.name"
              :class="{ contain: imageHints[key]?.contain, show: k === tick % a.images.length }"
              :style="imageHints[key]?.position ? { objectPosition: imageHints[key].position } : undefined"
              loading="lazy"
            />
            <span class="tag">{{ a.tag }} · {{ a.year }}</span>
          </div>
          <figcaption>
            <b class="figno">{{ t('caseUi.figure') }} {{ i + 2 }}</b>
            <span class="nm">{{ a.name }}</span>
            <span class="org">{{ a.org }}</span>
            <span class="desc">{{ a.desc }}</span>
            <a v-if="a.link" :href="a.link" target="_blank" rel="noopener noreferrer" class="lnk">{{ a.linkLabel }}</a>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="sec reveal" id="skills">
      <h2><span>iii.</span>{{ t('about.skills.title') }}</h2>
      <p class="secsub">{{ t('about.skills.sub') }}</p>
      <table class="tbl">
        <tbody>
          <tr v-for="g in groups" :key="g.title"><th>{{ g.title }}</th><td>{{ g.items.join(' · ') }}</td></tr>
        </tbody>
      </table>
    </section>

    <section class="sec reveal" id="certs">
      <h2><span>iv.</span>{{ t('about.certs.title') }}</h2>
      <table class="tbl">
        <tbody>
          <tr v-for="c in certs" :key="c.name"><th>{{ c.name }}</th><td>{{ c.org }} · {{ c.cat }}</td></tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style scoped>
.crumb{font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);padding:18px 0 0}
.crumb a:hover{color:var(--accent)}
.ah{display:grid;grid-template-columns:7fr 5fr;gap:clamp(24px,4vw,56px);padding-block:22px clamp(36px,5vw,64px);border-bottom:2px solid var(--ink);align-items:start}
h1{margin:0;font-size:clamp(40px,6vw,84px)}
.lede{font-family:var(--serif);font-size:clamp(17px,1.5vw,20px);line-height:1.8;margin:18px 0 0;max-width:34em}
.toc{list-style:none;margin:28px 0 0;padding:0;border-top:2px solid var(--ink);max-width:420px}
.toc a{display:grid;grid-template-columns:32px 1fr;gap:8px;padding:10px 0;border-bottom:1px solid var(--line);font-family:var(--zh);font-weight:500;font-size:15px;transition:padding-left .2s}
.toc a:hover{color:var(--accent);padding-left:6px}
.toc a span{font-family:var(--serif);font-style:italic;color:var(--accent)}
.photo{margin:0}
.photo img{width:100%;aspect-ratio:4/5;object-fit:cover;object-position:62% 30%;border:1px solid var(--line)}
@media (max-width:860px){.ah{grid-template-columns:1fr}.photo{max-width:420px}}
.sec{padding-block:clamp(36px,5vw,64px);border-bottom:1px solid var(--rule)}
.sec h2{font-family:var(--zh);font-weight:900;font-size:clamp(26px,3vw,40px);margin:0 0 10px;display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:baseline;scroll-margin-top:80px}
.sec h2 span{font-family:var(--serif);font-style:italic;font-weight:400;font-size:.8em;color:var(--accent)}
.secsub{font-family:var(--serif);color:var(--muted);margin:0 0 26px}
.job{display:grid;grid-template-columns:150px 1fr;gap:20px;padding:22px 0;border-top:1px solid var(--line)}
.job:first-of-type{margin-top:16px}
.when{font-family:var(--mono);font-size:12px;color:var(--muted)}
.job h3{margin:0;font-family:var(--zh);font-weight:700;font-size:19px}
.job .org{font-family:var(--serif);color:var(--muted);font-size:14px;margin-top:2px}
.job .desc{font-family:var(--serif);font-size:15.5px;line-height:1.8;margin:12px 0 0}
.job ul{list-style:disc;font-family:var(--serif);font-size:15px;line-height:1.8;padding-left:1.1em;margin:12px 0 0}
.job li{margin-bottom:8px}
.job :deep(strong){font-family:var(--zh);font-weight:700}
@media (max-width:640px){.job{grid-template-columns:1fr}}
.awards{display:grid;grid-template-columns:repeat(3,1fr);gap:28px 24px}
@media (max-width:960px){.awards{grid-template-columns:repeat(2,1fr)}}
@media (max-width:560px){.awards{grid-template-columns:1fr}}
.award{margin:0}
.frame{position:relative;aspect-ratio:4/3;border:1px solid var(--line);background:var(--paper-2);overflow:hidden}
.frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .7s}
.frame img.show{opacity:1}
.frame img.contain{object-fit:contain;padding:28px;background:#fff}
.frame .tag{position:absolute;top:10px;left:10px;font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;background:var(--ink);color:var(--paper);padding:3px 8px}
.award figcaption{margin-top:10px;font-family:var(--serif);font-size:13.5px;line-height:1.6;color:var(--muted)}
.award .figno{font-family:var(--mono);color:var(--accent);font-weight:500;margin-right:8px}
.award .nm{font-family:var(--zh);font-weight:700;color:var(--ink)}
.award .org,.award .desc{display:block}
.award .lnk{display:inline-block;margin-top:4px;font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink);border-bottom:1px solid var(--ink)}
.award .lnk:hover{color:var(--accent);border-color:var(--accent)}
.tbl{width:100%;border-collapse:collapse;margin-top:10px;font-size:14.5px}
.tbl th{text-align:left;font-family:var(--zh);font-weight:700;padding:12px 16px 12px 0;border-bottom:1px solid var(--line);width:220px;vertical-align:top}
.tbl td{font-family:var(--mono);font-size:12.5px;padding:12px 0;border-bottom:1px solid var(--line);color:var(--muted);line-height:1.8}
@media (max-width:640px){.tbl th{width:40%}}
</style>
