/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        magenta: '#ff00b8',
        cyan: '#00d6ff',
        bg: '#04060d',
        'bg-deep': '#03040a',
        text: '#f6f7fb',
        muted: '#aab4d6',
        panel: 'rgba(3, 6, 18, 0.82)',
        'panel-border': 'rgba(255, 0, 186, 0.95)',
        'danger-bg': 'rgba(98, 29, 45, 0.92)',
        'danger-border': 'rgba(255, 86, 146, 0.9)'
      },
      fontFamily: {
        'mono-game': ['Departure Mono', 'Share Tech Mono', 'JetBrains Mono', 'Courier New', 'monospace']
      },
      boxShadow: {
        'glow-magenta': '0 0 20px rgba(255, 0, 184, 0.4), 0 0 60px rgba(255, 0, 184, 0.1)',
        'glow-cyan': '0 0 20px rgba(0, 208, 255, 0.4), 0 0 60px rgba(0, 208, 255, 0.1)',
        'glow-sm-magenta': '0 0 14px rgba(255, 0, 184, 0.45)',
        'glow-sm-cyan': '0 0 14px rgba(0, 208, 255, 0.45)'
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '75%': { opacity: '0.95' },
          '92%': { opacity: '0.88' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      },
      animation: {
        flicker: 'flicker 2s linear infinite',
        float: 'float 4s ease-in-out infinite',
        scanline: 'scanline 7s linear infinite'
      }
    }
  }
};
