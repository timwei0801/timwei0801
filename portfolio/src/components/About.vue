<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const techList = computed(() => tm('about.techList') as string[])
</script>

<template>
  <section id="about" class="section-y relative">
    <div class="container-x">
      <!-- Section header -->
      <div class="reveal mb-16">
        <div class="section-num">{{ t('about.num') }}</div>
        <h2 class="h-display text-display-lg text-balance max-w-4xl">
          {{ t('about.title') }}<em>{{ t('about.titleEm1') }}</em>{{ t('about.titleSep') }}<em>{{ t('about.titleEm2') }}</em>
        </h2>
      </div>

      <!-- Two-column narrative -->
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <!-- Left: bio -->
        <div class="lg:col-span-7 reveal space-y-6">
          <p class="text-lg text-bone-300 leading-[1.85]" v-html="t('about.intro1')"></p>
          <p class="text-lg text-bone-300 leading-[1.85]" v-html="t('about.intro2')"></p>
          <p class="text-lg text-bone-300 leading-[1.85]" v-html="t('about.intro3')"></p>

          <!-- Tech list -->
          <div class="pt-8">
            <div class="mono-caption mb-5">{{ t('about.techHeader') }}</div>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              <li
                v-for="(tech, i) in techList"
                :key="i"
                class="font-mono text-[13px] text-bone-400 flex items-start gap-2.5"
              >
                <span class="text-ember-500 mt-0.5">▸</span>
                <span>{{ tech }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: pull quote + secondary text -->
        <div class="lg:col-span-5 reveal">
          <div class="border-l-2 border-ember-500 pl-6 lg:pl-8 mb-8">
            <p class="font-serif text-2xl md:text-3xl font-light italic text-bone-100 leading-snug text-balance">
              {{ t('about.quote') }}
            </p>
          </div>
          <p class="text-base text-bone-400 leading-relaxed pl-6 lg:pl-8">
            {{ t('about.quote2') }}
          </p>

          <!-- Decorative meta strip -->
          <div class="mt-12 pl-6 lg:pl-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div class="mono-caption mb-2">Currently</div>
              <div class="text-bone-200">EY Taiwan</div>
              <div class="text-bone-500 text-xs">AI/ML Engineer</div>
            </div>
            <div>
              <div class="mono-caption mb-2">Studying</div>
              <div class="text-bone-200">Tamkang University</div>
              <div class="text-bone-500 text-xs">M.S. Data Science</div>
            </div>
            <div>
              <div class="mono-caption mb-2">Teaching</div>
              <div class="text-bone-200">NTU Accounting</div>
              <div class="text-bone-500 text-xs">RAG · 2026 Spring</div>
            </div>
            <div>
              <div class="mono-caption mb-2">Based in</div>
              <div class="text-bone-200">Taipei · Taiwan</div>
              <div class="text-bone-500 text-xs">UTC+8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
