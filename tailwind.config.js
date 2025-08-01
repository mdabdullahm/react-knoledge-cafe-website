// tailwind.config.js

import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Exo 2"', 'sans-serif'], 
        'poppins': ['Poppins', 'sans-serif'], 
        'manrope': ['Manrope', 'sans-serif'], 
      },
    },
  },
  plugins: [
    daisyui,
  ],
}