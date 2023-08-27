/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "mulish": ["Mulish", "sans-serif"]
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.09)'
      }
    },
  },
  plugins: [],
}

