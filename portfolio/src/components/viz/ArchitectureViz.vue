<script setup lang="ts">
// BitoGuard system architecture diagram — pipeline view
// Shows: Raw TX → Feature Engineering → Heterogeneous GNN → Stacking Ensemble → Explainability + Fairness → Risk Score
import { ref, onMounted, onUnmounted } from 'vue'

const tick = ref(0)
let raf = 0

function loop() {
  tick.value++
  raf = requestAnimationFrame(loop)
}

onMounted(() => { raf = requestAnimationFrame(loop) })
onUnmounted(() => cancelAnimationFrame(raf))
</script>

<template>
  <div class="relative w-full h-full p-3">
    <div class="absolute top-3 left-3 font-mono text-[10px] text-bone-500 z-10 flex items-center gap-2">
      <span class="dot-pulse"></span>
      <span>System Architecture</span>
    </div>
    <div class="absolute top-3 right-3 font-mono text-[9px] text-ember-500 z-10">
      770K+ TX · AUC 0.861
    </div>

    <svg viewBox="0 0 460 340" class="w-full h-full">
      <defs>
        <linearGradient id="emberGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#FF6B35" stop-opacity="0.5" />
        </linearGradient>
        <linearGradient id="mintGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#00D9A3" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#00D9A3" stop-opacity="0.5" />
        </linearGradient>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" fill="#5A6B73" />
        </marker>
      </defs>

      <!-- ========== STAGE 1: Data ========== -->
      <g>
        <rect x="20" y="30" width="90" height="50" rx="3" fill="#0A1418" stroke="#1F3038" />
        <text x="65" y="50" text-anchor="middle" font-family="Inter" font-size="11" font-weight="600" fill="#E8EEF1">Raw TX</text>
        <text x="65" y="65" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#5A6B73">770K records</text>
      </g>
      <text x="65" y="20" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">01 INPUT</text>

      <!-- arrow -->
      <line x1="115" y1="55" x2="138" y2="55" stroke="#5A6B73" stroke-width="1" marker-end="url(#arrow)" />

      <!-- ========== STAGE 2: Feature Engineering ========== -->
      <g>
        <rect x="145" y="30" width="100" height="50" rx="3" fill="#0A1418" stroke="#1F3038" />
        <text x="195" y="48" text-anchor="middle" font-family="Inter" font-size="11" font-weight="600" fill="#E8EEF1">Feature Eng.</text>
        <text x="195" y="62" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#5A6B73">81 → 65 dims</text>
        <text x="195" y="74" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">behavioral · graph</text>
      </g>
      <text x="195" y="20" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">02 ETL</text>

      <line x1="250" y1="55" x2="273" y2="55" stroke="#5A6B73" stroke-width="1" marker-end="url(#arrow)" />

      <!-- ========== STAGE 3: GNN ========== -->
      <g>
        <rect x="280" y="20" width="160" height="80" rx="3" fill="#122229" stroke="#FF6B35" stroke-width="1.5" />
        <text x="360" y="38" text-anchor="middle" font-family="Inter" font-size="11" font-weight="700" fill="#FF6B35">Heterogeneous GNN</text>

        <!-- Mini graph icon -->
        <g transform="translate(296, 50)">
          <line x1="20" y1="20" x2="6" y2="6" stroke="#5A6B73" stroke-width="0.8" />
          <line x1="20" y1="20" x2="34" y2="6" stroke="#5A6B73" stroke-width="0.8" />
          <line x1="20" y1="20" x2="6" y2="34" stroke="#5A6B73" stroke-width="0.8" />
          <line x1="20" y1="20" x2="34" y2="34" stroke="#5A6B73" stroke-width="0.8" />
          <circle cx="20" cy="20" r="3.5" fill="#FF6B35"><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/></circle>
          <circle cx="6" cy="6" r="2.5" fill="#00D9A3" />
          <circle cx="34" cy="6" r="2.5" fill="#00D9A3" />
          <circle cx="6" cy="34" r="2.5" fill="#FF6B35" opacity="0.7" />
          <circle cx="34" cy="34" r="2.5" fill="#00D9A3" />
        </g>

        <text x="380" y="62" font-family="JetBrains Mono" font-size="8.5" fill="#E8EEF1">HeteroSAGE</text>
        <text x="380" y="74" font-family="JetBrains Mono" font-size="8.5" fill="#E8EEF1">+ GAT layers</text>
        <text x="380" y="92" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">node embeddings</text>
      </g>
      <text x="360" y="115" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">03 GRAPH LEARNING</text>

      <!-- arrow down to ensemble -->
      <line x1="360" y1="125" x2="360" y2="148" stroke="#5A6B73" stroke-width="1" marker-end="url(#arrow)" />

      <!-- ========== STAGE 4: Stacking Ensemble ========== -->
      <g>
        <rect x="270" y="155" width="180" height="65" rx="3" fill="#122229" stroke="#FF6B35" stroke-width="1.5" />
        <text x="360" y="173" text-anchor="middle" font-family="Inter" font-size="11" font-weight="700" fill="#FF6B35">Stacking Ensemble</text>

        <!-- 3 base learners -->
        <rect x="282" y="183" width="48" height="22" rx="2" fill="#0A1418" stroke="#1F3038" />
        <text x="306" y="197" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#E8EEF1">XGBoost</text>

        <rect x="336" y="183" width="48" height="22" rx="2" fill="#0A1418" stroke="#1F3038" />
        <text x="360" y="197" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#E8EEF1">LightGBM</text>

        <rect x="390" y="183" width="48" height="22" rx="2" fill="#0A1418" stroke="#1F3038" />
        <text x="414" y="197" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#E8EEF1">CatBoost</text>

        <text x="360" y="216" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">→ meta learner</text>
      </g>
      <text x="360" y="237" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">04 ENSEMBLE</text>

      <!-- ========== STAGE 5: Explainability + Fairness (parallel) ========== -->
      <line x1="270" y1="190" x2="245" y2="190" stroke="#5A6B73" stroke-width="1" stroke-dasharray="3,2" />
      <line x1="245" y1="190" x2="245" y2="270" stroke="#5A6B73" stroke-width="1" stroke-dasharray="3,2" />
      <line x1="245" y1="270" x2="225" y2="270" stroke="#5A6B73" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arrow)" />

      <g>
        <rect x="20" y="245" width="100" height="50" rx="3" fill="#0A1418" stroke="#00D9A3" stroke-width="1" />
        <text x="70" y="263" text-anchor="middle" font-family="Inter" font-size="10" font-weight="600" fill="#00D9A3">SHAP</text>
        <text x="70" y="276" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">local + global</text>
        <text x="70" y="287" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">explainability</text>
      </g>

      <g>
        <rect x="125" y="245" width="100" height="50" rx="3" fill="#0A1418" stroke="#00D9A3" stroke-width="1" />
        <text x="175" y="263" text-anchor="middle" font-family="Inter" font-size="10" font-weight="600" fill="#00D9A3">Fairness Audit</text>
        <text x="175" y="276" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">gender · age</text>
        <text x="175" y="287" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="#5A6B73">career · income</text>
      </g>
      <text x="120" y="312" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#00D9A3">05 GOVERNANCE</text>

      <!-- ========== STAGE 6: Risk Score Output ========== -->
      <line x1="360" y1="227" x2="360" y2="245" stroke="#5A6B73" stroke-width="1" marker-end="url(#arrow)" />

      <g>
        <rect x="270" y="252" width="180" height="50" rx="3" fill="url(#emberGrad)" stroke="#FF6B35" stroke-width="1.5" />
        <text x="360" y="272" text-anchor="middle" font-family="Inter" font-size="12" font-weight="700" fill="#0A1418">Risk Score + Reason</text>
        <text x="360" y="288" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#0A1418">counterfactual recommendation</text>
      </g>
      <text x="360" y="316" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#FF6B35">06 OUTPUT</text>
    </svg>
  </div>
</template>
