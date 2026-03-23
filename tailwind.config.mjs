/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // ── Colors ────────────────────────────────────────────────
      colors: {
        bg:      '#070b12',
        surface: '#0d1420',
        dark:    '#1b2535',
        accent:  '#00e5ff',
        muted:   '#64748b',
        ok:      '#22c55e',
      },
      // ── Fonts ─────────────────────────────────────────────────
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      // ── Keyframes ─────────────────────────────────────────────
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1',  transform: 'scale(1)'   },
          '50%':      { opacity: '0.5', transform: 'scale(0.7)' },
        },
      },
      // ── Animations ────────────────────────────────────────────
      animation: {
        'fade-up':          'fadeUp 0.6s ease both',
        'fade-up-delayed':  'fadeUp 0.6s 0.1s ease both',
        'pulse-dot':        'pulseDot 2s ease-in-out infinite',
        'pulse-dot-fast':   'pulseDot 1.5s ease-in-out infinite',
      },
      // ── Border radius ─────────────────────────────────────────
      borderRadius: {
        '2xl': '20px',
      },
      // ── Box shadow ─────────────────────────────────────────────
      boxShadow: {
        'glow-accent': '0 0 12px #00e5ff',
        'glow-card':   '0 0 30px rgba(0,229,255,0.06)',
      },
      // ── Backdrop blur ─────────────────────────────────────────
      backdropBlur: {
        '4.5xl': '18px',
      },
    },
  },
  plugins: [],
};
