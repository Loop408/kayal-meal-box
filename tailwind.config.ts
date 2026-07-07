import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC503', // Primary Yellow/Gold
        secondary: '#0B0C10', // Deep Charcoal/Black
        accent: '#FFC503', // Yellow/Gold Accent
        background: '#FFFBF0', // Off-White/Cream Background
        text: '#0B0C10', // Deep Charcoal/Black
        'text-light': '#475569', // optional secondary text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 20px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '15px',
      }
    },
  },
  plugins: [],
}

export default config;
