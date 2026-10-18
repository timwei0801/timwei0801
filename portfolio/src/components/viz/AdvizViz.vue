<script setup lang="ts">
// ADVIZ two-phase system diagram
// Phase 1: Red ⇄ Blue adversarial self-evolution (Dual-GRPO) → Critic
// Phase 2: Generator + frozen Critic → honest chart
// Finding: the bottleneck is the decoding interface — JSON decoding 0.57 → sigmoid head 0.70 → + rule linter 0.83
</script>

<template>
  <div class="relative w-full h-full p-3">
    <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 z-10 flex items-center gap-2">
      <span class="dot-pulse"></span>
      <span>Two-Phase System</span>
    </div>
    <div class="absolute top-3 right-3 font-mono text-[9px] text-ember-500 z-10">
      BalAcc 0.57 → 0.83
    </div>

    <svg viewBox="0 0 460 340" class="w-full h-full">
      <defs>
        <linearGradient id="advizEmberGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#FF6B35" stop-opacity="0.5" />
        </linearGradient>
        <marker id="advizArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#5A6B73" />
        </marker>
        <marker id="advizArrowEmber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#FF6B35" />
        </marker>
      </defs>

      <!-- ========== PHASE 1: Adversarial self-evolution ========== -->
      <text x="20" y="34" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">01 ADVERSARIAL SELF-EVOLUTION</text>

      <!-- Red agent -->
      <g>
        <rect x="20" y="42" width="115" height="56" rx="3" fill="#122229" stroke="#FF6B35" stroke-width="1.5" />
        <text x="77.5" y="63" text-anchor="middle" font-family="Inter" font-size="11" font-weight="700" fill="#FF6B35">Red Agent</text>
        <text x="77.5" y="77" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">creates misleading</text>
        <text x="77.5" y="88" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">charts</text>
      </g>

      <!-- Red ⇄ Blue loop -->
      <line x1="138" y1="62" x2="168" y2="62" stroke="#FF6B35" stroke-width="1" marker-end="url(#advizArrowEmber)" />
      <line x1="169" y1="78" x2="139" y2="78" stroke="#5A6B73" stroke-width="1" marker-end="url(#advizArrow)" />
      <circle r="2" fill="#FF6B35">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M138,62 L168,62 L168,78 L139,78 Z" />
      </circle>

      <!-- Blue agent -->
      <g>
        <rect x="172.5" y="42" width="115" height="56" rx="3" fill="#0A1418" stroke="#8A9BA3" stroke-width="1.2" />
        <text x="230" y="63" text-anchor="middle" font-family="Inter" font-size="11" font-weight="700" fill="#E8EEF1">Blue Agent</text>
        <text x="230" y="77" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">detects misleading</text>
        <text x="230" y="88" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">charts</text>
      </g>

      <text x="153.75" y="112" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#FF6B35">co-evolve via Dual-GRPO</text>

      <!-- Blue → Critic -->
      <line x1="290" y1="70" x2="321" y2="70" stroke="#5A6B73" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#advizArrow)" />

      <!-- Critic -->
      <g>
        <rect x="325" y="42" width="115" height="56" rx="3" fill="#0A1418" stroke="#00D9A3" stroke-width="1.2" />
        <text x="382.5" y="63" text-anchor="middle" font-family="Inter" font-size="11" font-weight="700" fill="#00D9A3">Critic</text>
        <text x="382.5" y="77" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">evolves from the</text>
        <text x="382.5" y="88" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">adversarial game</text>
      </g>

      <!-- Critic is frozen and carried into phase 2 -->
      <polyline points="382.5,101 382.5,124 230,124 230,146" fill="none" stroke="#5A6B73" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#advizArrow)" />
      <text x="306" y="120" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">freeze</text>

      <!-- ========== PHASE 2: Critic-guided generation ========== -->
      <text x="20" y="140" font-family="JetBrains Mono" font-size="8" fill="#00D9A3">02 CRITIC-GUIDED GENERATION</text>

      <g>
        <rect x="20" y="150" width="115" height="48" rx="3" fill="#0A1418" stroke="#1F3038" />
        <text x="77.5" y="170" text-anchor="middle" font-family="Inter" font-size="11" font-weight="600" fill="#E8EEF1">Generator</text>
        <text x="77.5" y="184" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">generates charts</text>
      </g>

      <text x="153.75" y="179" text-anchor="middle" font-family="Inter" font-size="14" fill="#5A6B73">+</text>

      <g>
        <rect x="172.5" y="150" width="115" height="48" rx="3" fill="#0A1418" stroke="#00D9A3" stroke-width="1.2" stroke-dasharray="4,2" />
        <text x="230" y="170" text-anchor="middle" font-family="Inter" font-size="11" font-weight="600" fill="#00D9A3">Critic · frozen</text>
        <text x="230" y="184" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#5A6B73">feedback &amp; guidance</text>
      </g>

      <line x1="290" y1="174" x2="321" y2="174" stroke="#5A6B73" stroke-width="1" marker-end="url(#advizArrow)" />

      <g>
        <rect x="325" y="150" width="115" height="48" rx="3" fill="url(#advizEmberGrad)" stroke="#FF6B35" stroke-width="1.5" />
        <text x="382.5" y="170" text-anchor="middle" font-family="Inter" font-size="11" font-weight="700" fill="#0A1418">Honest Chart</text>
        <text x="382.5" y="184" text-anchor="middle" font-family="JetBrains Mono" font-size="7.5" fill="#0A1418">clear · accurate</text>
      </g>

      <!-- ========== KEY FINDING: decoding interface ========== -->
      <text x="20" y="224" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">03 KEY FINDING · BOTTLENECK = DECODING INTERFACE</text>

      <!-- baseline at 0 (bars are drawn to scale from zero) -->
      <line x1="120" y1="232" x2="120" y2="292" stroke="#1F3038" stroke-width="1" />

      <text x="112" y="243" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#8A9BA3">JSON decoding</text>
      <rect x="120" y="234" width="148" height="12" rx="1.5" fill="#1F3038" />
      <text x="274" y="243.5" font-family="JetBrains Mono" font-size="9" fill="#8A9BA3">0.57</text>

      <text x="112" y="265" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#E8EEF1">sigmoid head</text>
      <rect x="120" y="256" width="182" height="12" rx="1.5" fill="#5A6B73" />
      <text x="308" y="265.5" font-family="JetBrains Mono" font-size="9" fill="#E8EEF1">0.70</text>

      <text x="112" y="287" text-anchor="end" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">+ rule linter</text>
      <rect x="120" y="278" width="216" height="12" rx="1.5" fill="url(#advizEmberGrad)" />
      <text x="342" y="287.5" font-family="JetBrains Mono" font-size="9" font-weight="700" fill="#FF6B35">0.83</text>

      <text x="20" y="312" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">balanced accuracy · same vision-language features · axis starts at 0</text>
      <text x="20" y="326" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">3.7M-param detector · BalAcc 0.943 on synthetic adversarial charts</text>
    </svg>
  </div>
</template>
