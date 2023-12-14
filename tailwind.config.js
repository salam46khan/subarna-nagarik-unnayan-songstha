/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        normalText: ['Libre Bodoni', 'serif'],
        titleText: ['Shrikhand', 'serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

