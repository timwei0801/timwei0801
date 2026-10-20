<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'
import CoverHero from '../components/CoverHero.vue'
import MarqueeBand from '../components/MarqueeBand.vue'
import WorkIndex from '../components/WorkIndex.vue'
import FeatureTeaser from '../components/FeatureTeaser.vue'
import CvTable from '../components/CvTable.vue'
import WritingGrid from '../components/WritingGrid.vue'

const { t } = useI18n()
useReveal()
</script>

<template>
  <main id="home">
    <div class="mast"><div class="wrap"><span>{{ t('mast.vol') }}</span><span>{{ t('mast.who') }}</span></div></div>
    <CoverHero />
    <MarqueeBand />
    <WorkIndex />
    <FeatureTeaser />
    <CvTable />
    <WritingGrid />
  </main>
</template>

<style scoped>
.mast{border-bottom:1px solid var(--line)}
.mast .wrap{display:flex;justify-content:space-between;align-items:center;height:36px;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);gap:12px}
@media (max-width:600px){.mast .wrap span:last-child{display:none}}
</style>
