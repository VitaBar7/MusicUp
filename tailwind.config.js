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
      
      backgroundImage: {
        'album-playing' : "url('/images/pexels-anton-album.jpg')",
        'close-icon' : "url('/images/icons8-effacer-24.png')"
        /* 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', */
      },
    },
  },
  plugins: [],
}
