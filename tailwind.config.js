/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': ['Droid Sans', 'ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    colors: {
      'white':'#ffffff',
      'taupe': '#5E5252',
      'grey':'#9EA1A2',
      'semidark-green': '#204d49d1',
      'dark-green':'#204d49fa',
      'deep-magenta':'#900253',
      'orange':'#FFA500',
      'light-pink':'#f4c2c2',
      'dirty-white':'#f5f7f6',
      'dark-grey':'#2e2e2c',
      'charbon':'#060606'
    },
    extend: {
      animation: {
        liquid: 'liquid 12s ease-in-out alternate infinite',
        wobble: 'wobble 8s ease-in-out alternate infinite'
      },
      keyframes: {
        liquid: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', backgroundSize: '100% 100%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%', backgroundSize: '300% 150%' },
          '100%': { borderRadius: '60% 30% 70% 40% / 60% 40% 30% 70%'}
        },
        wobble: {
          '50%': { borderRadius: '750px 550px 350px 750px / 350px 750px 550px 450px'
          },
          '100%': { borderRadius: '750px 250px 750px 250px / 250px 750px 250px 750px'
          }
        }
      },
      backgroundImage: {
        'album-playing' : "url('/images/pexels-anton-album.jpg')",
        'close-icon' : "url('/images/icons8-effacer-24.png')"
      },
    },
  },
  plugins: [],
}
