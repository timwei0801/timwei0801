/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Tech palette
        ink: {
          900: '#0A1418', // deepest bg
          800: '#0E1A1F', // primary bg
          700: '#122229', // surface
          600: '#1A2C34', // raised surface
          500: '#1F3038', // border
          400: '#2A3D45', // strong border
        },
        bone: {
          50:  '#FFFFFF',
          100: '#F5F7F8',
          200: '#E8EEF1', // primary fg
          300: '#C5D0D5',
          400: '#8A9BA3', // dimmed fg
          500: '#5A6B73', // muted fg
          600: '#3D4D55',
        },
        ember: {
          // signature accent — warm orange
          50:  '#FFF1EA',
          100: '#FFD9C4',
          200: '#FFB495',
          300: '#FF8E66',
          400: '#FF6B35',
          500: '#FF6B35',
          600: '#E85420',
          700: '#C0411A',
        },
        mint: {
          // secondary accent — electric green
          400: '#00D9A3',
          500: '#00D9A3',
          600: '#00B888',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Noto Serif TC', 'serif'],
        display: ['Fraunces', 'Noto Sans TC', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Editorial display sizes
        'display-xl': ['clamp(48px, 8vw, 112px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(40px, 6vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(32px, 4.5vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(28px, 3.5vw, 40px)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-ember': '0 0 32px rgba(255, 107, 53, 0.25)',
        'glow-mint': '0 0 32px rgba(0, 217, 163, 0.25)',
      },
    },
  },
  plugins: [],
}
