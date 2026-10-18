<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section-y relative overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-ember-500/[0.06] blur-3xl rounded-full pointer-events-none"></div>

    <div class="container-x relative">
      <div class="text-center max-w-3xl mx-auto reveal">
        <div class="section-num justify-center mx-auto inline-flex">
          {{ t('contact.num') }}
        </div>
        <h2 class="h-display text-display-xl mt-4 mb-6 text-balance">
          {{ t('contact.title') }}<br />
          <em>{{ t('contact.titleEm') }}</em>
        </h2>
        <p class="text-bone-400 text-lg mb-12">{{ t('contact.sub') }}</p>

        <a
          href="mailto:chwei9181@gmail.com"
          class="inline-flex items-center gap-3 font-serif text-2xl md:text-4xl text-bone-100 hover:text-ember-500 transition-colors group"
        >
          <span>chwei9181@gmail.com</span>
          <svg class="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>

        <div class="mt-16 pt-10 border-t border-ink-500">
          <div class="mono-caption mb-6">{{ t('contact.socialLabel') }}</div>
          <div class="flex justify-center gap-4">
            <a
              href="https://github.com/timwei0801"
              target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center border border-ink-500 rounded-md text-bone-300 hover:text-ember-500 hover:border-ember-500 transition-colors"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a
              href="https://linkedin.com/in/timwei0801"
              target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center border border-ink-500 rounded-md text-bone-300 hover:text-ember-500 hover:border-ember-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://medium.com/@chwei9181"
              target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center border border-ink-500 rounded-md text-bone-300 hover:text-ember-500 hover:border-ember-500 transition-colors"
              aria-label="Medium"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            </a>
            <a
              href="https://www.threads.com/@timwei.ai"
              target="_blank" rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center border border-ink-500 rounded-md text-bone-300 hover:text-ember-500 hover:border-ember-500 transition-colors"
              aria-label="Threads"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z"/></svg>
            </a>
            <a
              href="mailto:chwei9181@gmail.com"
              class="w-12 h-12 flex items-center justify-center border border-ink-500 rounded-md text-bone-300 hover:text-ember-500 hover:border-ember-500 transition-colors"
              aria-label="Email"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
