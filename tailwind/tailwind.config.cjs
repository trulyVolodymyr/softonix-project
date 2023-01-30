/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      modal: 'rgba(255,255,255,0.6)'
    },
    extend: {
      borderWidth: {
        DEFAULT: '1px'
      },
      colors: {
        'modal-bg': 'rgba(0,0,0,0.5)'
      },
      boxShadow: {
        '1white': '0px 0px 10px 5px  rgba(255,255,255,0.3);'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      screens: {
        tablet: '550px',
        laptop: '770px',
        'laptop-wide': '950px',
        desktop: '1180px'
      }
    }
  },
  plugins: []
}
