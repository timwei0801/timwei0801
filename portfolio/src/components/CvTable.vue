<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { CvRow } from '../types'

const { t, tm } = useI18n()
const rows = computed(() => tm('cv.rows') as unknown as CvRow[])
const cols = computed(() => tm('cv.cols') as unknown as string[])
</script>

<template>
  <section class="cv wrap reveal" id="cv">
    <div>
      <h3>{{ t('cv.title') }}<small>{{ t('cv.sub') }}</small></h3>
      <router-link class="more" to="/about">{{ t('cv.more') }}</router-link>
    </div>
    <table>
      <thead><tr><th v-for="c in cols" :key="c">{{ c }}</th></tr></thead>
      <tbody>
        <tr v-for="r in rows" :key="r.role">
          <td>{{ r.when }}</td>
          <td><b>{{ r.role }}</b><span class="org">{{ r.org }}</span></td>
          <td>{{ r.note }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.cv{display:grid;grid-template-columns:1fr 3fr;gap:28px;padding-block:clamp(36px,5vw,64px)}
h3{margin:0;font-family:var(--serif);font-weight:500;font-style:italic;font-size:26px}
h3 small{display:block;font-style:normal;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-top:6px}
.more{display:inline-block;margin-top:16px;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid var(--ink);padding-bottom:2px}
.more:hover{color:var(--accent);border-color:var(--accent)}
table{width:100%;border-collapse:collapse;font-size:18px}
th{text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:500;padding:0 0 10px;border-bottom:1px solid var(--rule)}
td{padding:14px 16px 14px 0;border-bottom:1px solid var(--line);vertical-align:top}
td:first-child{font-family:var(--mono);font-size:12px;color:var(--muted);white-space:nowrap}
td b{display:block;font-family:var(--zh);font-weight:700}
.org{color:var(--muted);font-size:16.5px;font-family:var(--serif)}
td:last-child{color:var(--muted);font-size:17px;font-family:var(--serif)}
tr:hover td{background:var(--paper-2)}
@media (max-width:760px){.cv{grid-template-columns:1fr}td:last-child{display:none}}
</style>
