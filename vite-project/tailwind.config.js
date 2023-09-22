/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-sky': '#F0F2EE',
        'custom-pink': '#f50963',
        'custon-font': '#525258',
        'custom-font1': '#03041c'
      },
      width: {
        'custom-width': '34.375rem'
      }
    },
  },
  plugins: [],
}

