/** @type {import('tailwindcss').Config} */
// v3 design system — "cover is a poster, inside is a journal".
// One paper, one ink, one cobalt. Poster pages use 2px rules; journal pages use hairlines.
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: '#F4F0E6', 2: '#ECE6D8' },
        ink: { DEFAULT: '#141414' },
        muted: { DEFAULT: '#6A6458' },
        line: { DEFAULT: '#CBC4B4' },
        cobalt: { DEFAULT: '#1E3FDB', soft: '#DDE3F9', ink: '#FFFFFF' },
        // legacy aliases used by the v2 viz components (shown inside dark figure panels)
        bone: { 100: '#F5F7F8', 200: '#E8EEF1', 300: '#C5D0D5', 400: '#8A9BA3', 500: '#8A9BA3' },
        ember: { 500: '#FF6B35' },
        mint: { 500: '#00D9A3' },
      },
      fontFamily: {
        display: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        zh: ['Noto Sans TC', 'sans-serif'],
        serif: ['Noto Serif TC', 'Newsreader', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1320px' },
    },
  },
  plugins: [],
}
