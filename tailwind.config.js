module.exports = {
  mode:'jit',
  purge: ["./src/**/*.{html,js}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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
        topbutton:'#333333'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')

  ],
}
