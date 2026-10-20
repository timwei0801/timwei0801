<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const items = computed(() => tm('marquee') as unknown as string[])
</script>

<template>
  <div class="marquee" aria-hidden="true">
    <div class="track">
      <span v-for="(s, i) in items" :key="'a' + i">{{ s }}</span>
      <span v-for="(s, i) in items" :key="'b' + i">{{ s }}</span>
    </div>
  </div>
</template>

<style scoped>
.marquee{background:var(--ink);color:var(--paper);overflow:hidden;white-space:nowrap;border-top:2px solid var(--ink);border-bottom:2px solid var(--ink)}
.track{display:inline-block;animation:marq 30s linear infinite;padding:11px 0;font-family:var(--mono);font-size:12.5px;letter-spacing:.12em;text-transform:uppercase}
.track span{padding:0 26px}
.track span::before{content:"◆";color:var(--accent);margin-right:26px;font-size:8px;vertical-align:middle;filter:brightness(1.6)}
</style>
