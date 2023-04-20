/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "tan": "#F9CAA0",
      },
      width: {
        "82": "25.5rem"
      }
    },
  },
  plugins: [],
}

