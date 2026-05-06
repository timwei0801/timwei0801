<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-ink-500 py-10 bg-ink-900">
    <div class="container-x flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="font-mono text-[11px] text-bone-500">
        {{ t('footer.copyright') }}
      </div>
      <div class="font-mono text-[11px] text-bone-500 flex items-center gap-2">
        <span class="dot-pulse"></span>
        <span>{{ t('footer.version') }}</span>
      </div>
    </div>
  </footer>
</template>
