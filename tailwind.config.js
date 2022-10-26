/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
      },
      colors: {
        'semiBlack': '#444444'  
      },
      spacing: {
        '5vw': '5vw'
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      zIndex: {
        '60': '60',
        '100': '100'
      },
      dropShadow: {
        'dark1': '0px 0px 3px rgba(0, 0, 0, 0.7)',
        'dark2': '0px 0px 6px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        fadeIn: {
            '0%': {
                opacity: '0'
            },
            '100%': {
                opacity: '1'
            },
        },
        fadeInLong: {
          '0%': {
              opacity: '0'
          },
          '50%': {
            opacity: '0'
          },
          '100%': {
              opacity: '1'
          },
        },
        shrinkGap: {
          '0%': {
              gap: '90px'
          },
          '100%': {
              opacity: '40px'
          },
      }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInLong: 'fadeInLong 4s ease-in-out',
        shrinkGap: 'shrinkGap 2s ease-in-out',
        fadeInText: 'fadeIn 0.7s ease-in',
        fadeInLongText: 'fadeInLong 1s ease-in',
      },
    },
  },
  plugins: [],
}
