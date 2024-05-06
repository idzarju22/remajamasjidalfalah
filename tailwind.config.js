// @type {import('tailwindcss').Config} 
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary : '#037740',
        secondary :'#298C5D',
        dark : '#020617',

      },
      screens :{
        '2xl' :'1320px',
      }
    },
  },
  plugins: [],
}