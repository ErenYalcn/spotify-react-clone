module.exports = {
  mode:'jit',
  purge: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      rotate: {
        '25': '25deg',
        '150':'150deg'
      },
      colors:{
        backcolor: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer:'#181818',
        gra1: '#450af5',
        gra2: '#c4efd9',
        brenk:'#000000b3',
        menubg:'#3E3E3E',
        topbutton:'#333333',
        dortboxact:'#ffffff4d',
        dortbox:'#ffffff33',
        firstbox:'#5028f0',
        purplebox:'#8d67ab',
        orangebox:'#ba5d07',
        redbox:'#e61e32',
        gra3:'#501FF2',
        gra4:'#867FE7',
        gribottom: '#a7a7a7',
        tartist: '#575757'

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')

  ],
}
