/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-220': 'repeat(auto-fit, minmax(220px, 1fr))'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
    },
  },
  plugins: [],
}