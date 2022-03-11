module.exports = {
  content: ["./public/**/*.{html,js}",],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'bannerMobile':"url('../img/banner_mobile.jpg')",
        'bannerDesktop':"url('../img/banner_Desktop.jpg')",
        'tAdventure':"url('../img/Travel_Adventure.jpg')",
        'tFamily':"url('../img/Travel_Family.jpg')",
        'tRomantic':"url('../img/Travel_Romantic.jpg')",
      },
      backgroundColor:theme=>({
        ...theme('colors'),
        'primary':'#7900FF',
        'secondary':'#548CFF',
        'tertiary':'#0E185F',
      }),
      textColor:theme=>({
        ...theme('colors'),
        'primary':'#7900FF',
        'secondary':'#548CFF',
        'tertiary':'#0E185F',
      }),
      fontFamily:{
        'Montserrat':['Montserrat','sans-serif'],
      }
    },
  },
  plugins: [],
}
