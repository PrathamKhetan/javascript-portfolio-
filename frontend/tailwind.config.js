/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0b0b0f',
          surface: '#14141b',
          card: '#1a1a24',
          border: '#272736',
          text: '#f3f3f6',
          muted: '#8e8ea0',
          accent: '#c6ff3d',
          accentHover: '#b5ef2c',
        },
        light: {
          bg: '#f0f4f1',
          surface: '#e3ebe5',
          card: '#ffffff',
          border: '#d0ddd4',
          text: '#0e1111',
          muted: '#5c6460',
          accent: '#5a3dff',
          accentHover: '#4627eb',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        }
      }
    },
  },
  plugins: [],
}
