<script setup lang="ts">
// A journal figure: numbered caption, image or an interactive viz in a dark panel.
import { useI18n } from 'vue-i18n'
import { images, vizComponents } from '../data/figures'

defineProps<{
  n: number
  img?: string
  viz?: string
  cap: string
  alt?: string
  wide?: boolean
  illustration?: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <figure :class="['fig', { wide }]">
    <div v-if="viz" class="panel"><component :is="vizComponents[viz]" /></div>
    <img v-else-if="img" :src="images[img]" :alt="alt ?? cap" loading="lazy" />
    <figcaption class="figcap">
      <b>{{ t('caseUi.figure') }} {{ n }}</b>
      <span v-if="illustration" class="ill">{{ t('caseUi.illustration') }} · </span>{{ cap }}
    </figcaption>
  </figure>
</template>

<style scoped>
.fig{margin:0}
.fig img{width:100%;border:1px solid var(--line);background:#fff}
.panel{aspect-ratio:16/10;background:#0e1a1f;border:1px solid var(--ink);color:#e8eef1;overflow:hidden}
.ill{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase}
</style>
