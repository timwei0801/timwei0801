// Slides for each project card, keyed by the project's `viz` key in i18n.
// Images are Tim's own work only (his dashboards, his figures, his analysis
// outputs, all in his public repos or already published) — never third-party
// figures. Captions come from each image's own context (README, article, thesis).
import type { Component } from 'vue'
import ArchitectureViz from './ArchitectureViz.vue'
import HeatmapViz from './HeatmapViz.vue'
import ClusterViz from './ClusterViz.vue'
import ChartViz from './ChartViz.vue'
import PokerViz from './PokerViz.vue'

import advizTaxonomy from '../../assets/images/projects/adviz/taxonomy.webp'
import advizInterface from '../../assets/images/projects/adviz/interface.webp'
import advizShowcase from '../../assets/images/projects/adviz/showcase-battle.webp'
import adviz3d from '../../assets/images/projects/adviz/3d-blindspot.webp'
import bitoDashboard from '../../assets/images/projects/bitoguard/dashboard.webp'
import bitoF1 from '../../assets/images/projects/bitoguard/f1-before-after.webp'
import bitoShap from '../../assets/images/projects/bitoguard/shap-reranking.webp'
import hwDriver from '../../assets/images/projects/highway/driver-dashboard.webp'
import hwAdmin from '../../assets/images/projects/highway/admin-dashboard.webp'
import cbGap from '../../assets/images/projects/cyberbullying/gap.webp'
import cbRegion from '../../assets/images/projects/cyberbullying/region-map.webp'

export interface Slide {
  viz?: Component
  src?: string
  alt?: string
  label?: string
  caption: string
  /** 'paper' puts a white-background figure on a light panel; 'dark' shows a dark screenshot as is */
  bg?: 'paper' | 'dark'
}

export const galleries: Record<string, Slide[]> = {
  // ADVIZ — captions follow the thesis captions (chapters 3 and 5)
  adviz: [
    {
      src: advizTaxonomy, bg: 'paper', label: 'Thesis figure',
      caption: 'Six misleading categories · honest vs. misleading, same data',
      alt: 'Thesis figure: six categories of misleading charts, each shown as an honest version beside a misleading version rendered from the same data',
    },
    {
      src: advizInterface, bg: 'paper', label: 'Thesis figure',
      caption: 'Detection interface · BalAcc 0.57 → 0.70 → 0.83',
      alt: 'Thesis figure: balanced accuracy of three detection interfaces — generative decoding 0.57, classifier head 0.70, classifier head fused with a linter 0.83',
    },
    {
      src: advizShowcase, bg: 'paper', label: 'Thesis figure',
      caption: 'Interactive showcase · play Red, try to fool the Critic',
      alt: 'Thesis figure: the Red-vs-Blue showcase page, where the user picks misleading techniques and the Blue Critic scores the altered chart',
    },
    {
      src: adviz3d, bg: 'paper', label: 'Thesis figure',
      caption: 'Known blind spot · 3D perspective distortion (future work)',
      alt: 'Thesis figure: the same market-share data as an honest 2D pie and a 3D perspective pie that visually enlarges the front slices — a distortion the detectors still cannot reliably catch',
    },
  ],

  // BitoGuard — figures from the published Medium article (series part 3)
  architecture: [
    { viz: ArchitectureViz, caption: 'System pipeline · graph learning → ensemble → explainable risk score' },
    {
      src: bitoDashboard, bg: 'dark', label: 'Dashboard',
      caption: 'Fraud-detection dashboard · top-20 feature importance',
      alt: 'BitoGuard fraud-detection dashboard with account statistics, a confusion matrix and the top-20 feature importance chart',
    },
    {
      src: bitoF1, bg: 'paper', label: 'Figure',
      caption: 'F1 0.37 → 0.83 · six metrics jump together',
      alt: 'Bar chart comparing the baseline with the LOO-toxicity model: F1, AUC-PR, AUC-ROC, precision, recall and base-learner scores all rise, F1 from 0.37 to 0.83',
    },
    {
      src: bitoShap, bg: 'paper', label: 'Figure',
      caption: 'SHAP top-10 · 3 LOO features carry 43% of the model weight',
      alt: 'SHAP top-10 feature ranking in which three LOO toxicity features account for 43 percent of the model decision weight',
    },
  ],

  // Highway — screenshots from the Highway_trafficwave README
  heatmap: [
    { viz: HeatmapViz, caption: 'Illustration · simulated 24h lane congestion' },
    {
      src: hwDriver, bg: 'dark', label: 'Dashboard',
      caption: 'Driver view · live congestion map, shockwave alerts, AI routing',
      alt: 'Driver dashboard with a live highway congestion map, shockwave alerts and an AI route-suggestion panel',
    },
    {
      src: hwAdmin, bg: 'dark', label: 'Dashboard',
      caption: 'Admin control center · network monitoring & AI decision support',
      alt: 'Admin control center with network-wide traffic monitoring, prediction status and an AI decision-support panel',
    },
  ],

  // Cyberbullying — analysis outputs from the MVA repo (Taiwan Communication Survey 2021, N=672)
  cluster: [
    { viz: ClusterViz, caption: 'Illustration · 5 user clusters (N=672)' },
    {
      src: cbGap, bg: 'paper', label: 'Figure',
      caption: 'GAP · user groups surface as blocks along the diagonal',
      alt: 'Generalized Association Plot heatmap of survey respondents, with user groups appearing as blocks along the diagonal',
    },
    {
      src: cbRegion, bg: 'paper', label: 'Figure',
      caption: 'Sample profile by region · Taiwan Communication Survey 2021',
      alt: 'Map of Taiwan showing the survey sample’s demographic profile by region',
    },
  ],

  // No images of Tim's own to add yet — the viz alone, unchanged
  chart: [{ viz: ChartViz, caption: '' }],
  poker: [{ viz: PokerViz, caption: '' }],
}
