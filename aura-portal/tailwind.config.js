/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          background: '#FAF5F2',
          surface: '#FAF5F2',
          'surface-dim': '#E5D8D2',
          'surface-container': '#EDE4DF',
          'surface-container-low': '#F4EDEA',
          'surface-container-high': '#E0D2CB',
          'surface-container-lowest': '#ffffff',
          'on-surface': '#231F20',
          'on-background': '#231F20',
          'on-surface-variant': '#5C4840',
          primary: '#7A3B26',
          'primary-container': '#DEBBA8',
          'on-primary-container': '#3A1A0A',
          outline: '#7A6058',
          'outline-variant': '#CEAFA4',
          dark: '#231F20',
          'dark-surface': '#2D2425',
          'dark-overlay': '#352A27',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '0px',
        DEFAULT: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.35em',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
