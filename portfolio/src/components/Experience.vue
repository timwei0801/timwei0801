<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface ExpItem {
  period: string
  position: string
  company: string
  location: string
  description: string
  bullets: string[]
  tags: string[]
}

const { t, tm } = useI18n()

const items = computed(() => tm('experience.items') as unknown as ExpItem[])
</script>

<template>
  <section id="experience" class="section-y bg-ink-900 relative">
    <div class="container-x">
      <div class="reveal mb-16">
        <div class="section-num">{{ t('experience.num') }}</div>
        <h2 class="h-display text-display-lg text-balance">
          {{ t('experience.title') }}<em>{{ t('experience.titleEm') }}</em>{{ t('experience.titleAfter') }}
        </h2>
        <p class="text-bone-400 mt-4 max-w-xl">{{ t('experience.sub') }}</p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="reveal relative pl-8 md:pl-10 pb-16 last:pb-0 border-l border-ink-500"
        >
          <!-- Dot -->
          <div class="absolute -left-[7px] top-1 w-3.5 h-3.5 bg-ember-500 rounded-full ring-4 ring-ink-900"></div>

          <!-- Period -->
          <div class="font-mono text-xs text-bone-500 mb-3 tracking-wider">
            {{ item.period }} · {{ item.location }}
          </div>

          <!-- Position -->
          <h3 class="font-serif text-2xl md:text-3xl text-bone-100 font-medium mb-1">
            {{ item.position }}
          </h3>

          <!-- Company -->
          <div v-if="item.company" class="text-ember-500 font-medium text-sm mb-5">
            {{ '@ ' + item.company }}
          </div>

          <!-- Description -->
          <p class="text-bone-300 leading-relaxed mb-5 max-w-2xl">
            {{ item.description }}
          </p>

          <!-- Bullets -->
          <ul v-if="item.bullets.length" class="space-y-3 mb-6 max-w-2xl">
            <li
              v-for="(b, bi) in item.bullets"
              :key="bi"
              class="text-bone-400 text-[15px] leading-relaxed flex items-start gap-3"
            >
              <span class="text-ember-500 mt-1.5 flex-shrink-0">
                <svg class="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M0 6l4 4 8-8-1-1-7 7-3-3z" />
                </svg>
              </span>
              <span v-html="b"></span>
            </li>
          </ul>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in item.tags" :key="tag" class="tag-pill">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
