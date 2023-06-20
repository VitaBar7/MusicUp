/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Droid Sans', 'ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    colors: {
      
      'taupe': '#5E5252',
      'semidark-green': '#204d49d1',
      'dark-green':'#204d49fa',
      'magenta':'#e803fc',
      'dirty-white':'#f5f7f6',
      'dark-grey':'2e2e2c',
      'charbon':'060606'
    },
    extend: {
      
      backgroundImage: {
        'album-playing' : 'url("https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        /* 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', */
      },
    },
  },
  plugins: [],
}
