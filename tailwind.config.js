/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1B2223',
        'secondary': '#3A4F50',
        'tertiary': '#0EF6CC',
        'quarternary': '#F4FEFD'
      }
    },
  },
  plugins: [],
}