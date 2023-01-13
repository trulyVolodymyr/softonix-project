/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors,
    extend: {
      borderWidth: {
        DEFAULT: '1px'
      },
      boxShadow: {
        '1white': '0px 0px 10px 5px  rgba(255,255,255,0.3);'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
