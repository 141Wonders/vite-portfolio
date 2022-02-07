module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'body': '#000002',
        'selected-text': '#436e5e',
        'theme': '#007046',
        'theme-hover': '#00492e',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'spaceg': ["'Space Grotesk'", 'sans-serif'],
        'rokkitt': ["'Rokkitt'", 'serif']
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
