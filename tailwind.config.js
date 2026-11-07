/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Old multi-section site, not used by the live app. Excluded so its classes don't bloat the CSS.
    "!./src/legacy/**",
  ],
  future: {
    // Hover styles only apply on devices that can actually hover, so touch screens never get "stuck" hover states.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        void: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#0f0f0f',
          800: '#141414',
        },
        panel: {
          DEFAULT: '#111111',
          hover: '#161616',
          active: '#1c1c1c',
          border: '#262626',
          'border-light': '#333333',
        },
        electric: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          DEFAULT: '#6f00ff',
          700: '#6f00ff',
          800: '#5b00d6',
          900: '#4c00b0',
        },
        muted: {
          slate: '#94a3b8',
          subtle: '#64748b',
          dark: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'whiteboard-grid': 'radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
        'electric-glow': 'radial-gradient(circle at 50% 0%, rgba(111, 0, 255, 0.15) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid-pattern': '24px 24px',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
