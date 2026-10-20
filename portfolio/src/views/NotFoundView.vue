<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main class="wrap nf">
    <p class="cond">{{ t('notFound.title') }}</p>
    <p class="txt">{{ t('notFound.text') }}</p>
    <router-link class="back" to="/">{{ t('notFound.back') }}</router-link>
  </main>
</template>

<style scoped>
.nf{padding-block:clamp(60px,10vw,140px) clamp(60px,10vw,140px)}
.cond{font-size:clamp(96px,20vw,280px);margin:0}
.txt{font-family:var(--serif);font-size:clamp(18px,2vw,24px);margin:18px 0 26px}
.back{font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid var(--ink);padding-bottom:2px}
.back:hover{color:var(--accent);border-color:var(--accent)}
</style>
