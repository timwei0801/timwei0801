// Every image the site shows, keyed so i18n copy can reference a figure by
// name instead of by path. Only Tim's own work: his figures, dashboards and
// photos. Other people's names in award photos are already blurred.
import type { Component } from 'vue'
import ArchitectureViz from '../components/viz/ArchitectureViz.vue'
import HeatmapViz from '../components/viz/HeatmapViz.vue'

import tim from '../assets/images/experience/transport-conference-speaking.jpg'

import advizTaxonomy from '../assets/images/projects/adviz/taxonomy.webp'
import advizInterface from '../assets/images/projects/adviz/interface.webp'
import advizShowcase from '../assets/images/projects/adviz/showcase-battle.webp'
import adviz3d from '../assets/images/projects/adviz/3d-blindspot.webp'
import bitoDashboard from '../assets/images/projects/bitoguard/dashboard.webp'
import bitoF1 from '../assets/images/projects/bitoguard/f1-before-after.webp'
import bitoShap from '../assets/images/projects/bitoguard/shap-reranking.webp'
import hwDriver from '../assets/images/projects/highway/driver-dashboard.webp'
import hwAdmin from '../assets/images/projects/highway/admin-dashboard.webp'
import cbGap from '../assets/images/projects/cyberbullying/gap.webp'

import phiTauPhi from '../assets/images/awards/phi-tau-phi.png'
import hackathon from '../assets/images/awards/hackathon-team.jpeg'
import highwayAward from '../assets/images/awards/highway-award.jpeg'
import sinica from '../assets/images/awards/academia-sinica-award.jpeg'
import aiExpo from '../assets/images/awards/ai-expo-2026.jpeg'
import academicAward from '../assets/images/awards/academic-award.webp'
import scholarshipList from '../assets/images/awards/scholarship-list.webp'

export const images: Record<string, string> = {
  tim,
  'adviz-taxonomy': advizTaxonomy,
  'adviz-interface': advizInterface,
  'adviz-showcase': advizShowcase,
  'adviz-3d': adviz3d,
  'bito-dashboard': bitoDashboard,
  'bito-f1': bitoF1,
  'bito-shap': bitoShap,
  'hw-driver': hwDriver,
  'hw-admin': hwAdmin,
  'cb-gap': cbGap,
  'award-phitauphi': phiTauPhi,
  'award-hackathon': hackathon,
  'award-aiexpo': aiExpo,
  'award-highway': highwayAward,
  'award-speaker': tim,
  'award-sinica': sinica,
  'award-rank': academicAward,
  'award-scholarship': scholarshipList,
}

// Interactive figures reuse the v2 viz components inside a journal figure frame.
export const vizComponents: Record<string, Component> = {
  architecture: ArchitectureViz,
  heatmap: HeatmapViz,
}

// Per-image presentation hints (object-fit / position) for awards and photos.
export const imageHints: Record<string, { contain?: boolean; position?: string }> = {
  'award-phitauphi': { contain: true },
  'award-hackathon': { position: 'center 35%' },
  'award-aiexpo': { position: 'center 70%' },
  'award-speaker': { position: 'center 45%' },
  'award-rank': { position: 'center 40%' },
  'award-scholarship': { position: 'center 70%' },
}
