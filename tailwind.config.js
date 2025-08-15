// tailwind.config.js
/** @type {import('tailwindcss/types').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hooker: '#49796B',
        citrine: '#E1C16E',
        alabaster: '#EDEADE',
        darkyellow: '#8B8000',
        eggshell: '#F0EAD6',
      },
      fontFamily: {
        header: ['Lora', 'Sumana', 'Faustina', 'serif'],
        fancy: ['"Great Vibes"', 'cursive'],
      }      
    },
  },
  plugins: [],
}
