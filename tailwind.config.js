
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation:{
        fade:'fade 5s ease-in-out'
      },
      keyframes:{
        fade:{
          '0%': {opacity:0, left:'50%', transform:'translateX(-50%) scale(0)'},
          '5%': {opacity:1, left:'50%', transform:'translateX(-50%)'},
          '95%': {opacity:1, left:'50%', transform:'translateX(-50%)'},
          '100%': {opacity:0, left:'50%', transform:'translateX(-50%) scale(0)'},
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scroll-behavior')
  ],
}
