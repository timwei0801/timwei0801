<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCopy } from '../composables/useCopy'
import type { Social } from '../types'

const { t, tm } = useI18n()
const socials = computed(() => tm('contact.socials') as unknown as Social[])
const mailEl = ref<HTMLElement | null>(null)
const { copied, copy } = useCopy()
</script>

<template>
  <section class="contact" id="contact">
    <div class="wrap">
      <h2 class="cond">{{ t('contact.title1') }}<br />{{ t('contact.title2') }}</h2>
      <p class="zhline">{{ t('contact.line') }}</p>
      <div class="mailrow">
        <a ref="mailEl" :href="`mailto:${t('contact.email')}`">{{ t('contact.email') }}</a>
        <button class="copy" type="button" @click="copy(t('contact.email'), mailEl)">{{ copied ? t('contact.copied') : t('contact.copy') }}</button>
      </div>
      <div class="soc">
        <a v-for="s in socials" :key="s.url" :href="s.url" target="_blank" rel="noopener noreferrer">{{ s.label }}</a>
      </div>
      <div class="foot"><span>{{ t('contact.foot') }}</span><span>{{ t('contact.version') }}</span></div>
    </div>
  </section>
</template>

<style scoped>
.contact{background:var(--accent);color:var(--accent-ink);border-top:2px solid var(--ink)}
.wrap{padding-block:clamp(40px,6vw,80px) 28px}
h2{margin:0;font-size:clamp(64px,13vw,200px)}
.zhline{font-family:var(--serif);font-size:clamp(16px,1.6vw,20px);margin:18px 0 0;max-width:34em;opacity:.95}
.mailrow{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-top:26px;font-family:var(--mono);font-size:clamp(16px,2.4vw,26px)}
.mailrow a{border-bottom:1px solid transparent}.mailrow a:hover{border-color:var(--accent-ink)}
.copy{font-family:var(--mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;background:var(--accent-ink);color:var(--accent);border:0;padding:8px 14px;cursor:pointer}
.soc{display:flex;gap:26px;margin-top:36px;font-family:var(--mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;flex-wrap:wrap}
.soc a{border-bottom:1px solid transparent}.soc a:hover{border-color:var(--accent-ink)}
.foot{display:flex;justify-content:space-between;font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;opacity:.8;margin-top:40px;flex-wrap:wrap;gap:8px}
</style>
