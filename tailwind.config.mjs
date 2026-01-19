/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0B0D10',
        surface: '#11151C',
        primary: '#6366f1', // electric blue
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
      },
    },
  },
  plugins: [],
}