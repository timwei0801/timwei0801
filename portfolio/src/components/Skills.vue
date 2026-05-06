<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Group { title: string; items: string[] }

const { t, tm } = useI18n()
const groups = computed(() => tm('skills.groups') as unknown as Group[])
</script>

<template>
  <section id="skills" class="section-y bg-ink-900 relative">
    <div class="container-x">
      <div class="reveal mb-16">
        <div class="section-num">{{ t('skills.num') }}</div>
        <h2 class="h-display text-display-lg text-balance">
          {{ t('skills.title') }}<em>{{ t('skills.titleEm') }}</em>
        </h2>
        <p class="text-bone-400 mt-4 max-w-xl">{{ t('skills.sub') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
        <div
          v-for="(g, i) in groups"
          :key="i"
          class="reveal"
        >
          <div class="flex items-baseline gap-3 mb-5 pb-3 border-b border-ink-500">
            <span class="font-mono text-[10px] text-ember-500">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="font-serif text-xl text-bone-100">{{ g.title }}</h3>
          </div>
          <ul class="space-y-2">
            <li
              v-for="s in g.items"
              :key="s"
              class="font-mono text-sm text-bone-300 hover:text-ember-500 transition-colors flex items-center gap-2.5 cursor-default"
            >
              <span class="text-ember-500/60">▹</span>{{ s }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
