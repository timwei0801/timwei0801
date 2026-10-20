<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

function toggleLocale() {
  locale.value = locale.value === 'zh-TW' ? 'en' : 'zh-TW'
}

// "Index" and "Contact" are anchors on the home page; from any other page we
// route home first and let scrollBehavior handle the hash.
function goHash(hash: string) {
  if (route.name === 'home') {
    const el = document.querySelector(hash)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    router.push({ name: 'home', hash })
  }
}
</script>

<template>
  <nav class="nav">
    <div class="wrap">
      <router-link class="brand" to="/">
        <span class="mk">TW</span>
        <span class="nm">{{ t('nav.name') }}</span>
        <small>{{ t('nav.tag') }}</small>
      </router-link>
      <span class="links">
        <a href="#index" @click.prevent="goHash('#index')">{{ t('nav.index') }}</a>
        <router-link to="/about" class="hm">{{ t('nav.about') }}</router-link>
        <router-link to="/writing" class="hm">{{ t('nav.writing') }}</router-link>
        <a href="#contact" @click.prevent="goHash('#contact')">{{ t('nav.contact') }}</a>
        <button type="button" class="lang" @click="toggleLocale">{{ t('nav.lang') }}</button>
      </span>
    </div>
  </nav>
</template>

<style scoped>
.nav{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--paper) 88%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.nav .wrap{display:flex;justify-content:space-between;align-items:center;height:58px}
.brand{display:flex;align-items:center;gap:12px}
.mk{font-family:var(--display);font-weight:900;font-stretch:62%;font-size:22px;letter-spacing:.02em;background:var(--ink);color:var(--paper);padding:2px 7px 0;line-height:1.2}
.nm{font-family:var(--zh);font-weight:700;font-size:15px}
.brand small{font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:var(--muted);margin-left:4px}
.links{display:flex;align-items:center}
.links a,.links .lang{font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;margin-left:22px;position:relative;background:none;border:0;padding:0;cursor:pointer;color:inherit}
.links a::after,.links .lang::after{content:"";position:absolute;left:0;right:0;bottom:-4px;height:2px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .2s}
.links a:hover::after,.links .lang:hover::after,.links a.router-link-active:not([href="/"])::after{transform:scaleX(1)}
@media (max-width:700px){.brand .nm,.brand small{display:none}.links a,.links .lang{margin-left:13px;font-size:11px;letter-spacing:.08em}}
</style>
