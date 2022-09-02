/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx}"],
  theme: {
    colors: {
      'black': "#000",
      'white': "#fff",
      'offwhite': "#EDEDED",
      'primary': "#5384E4",
      'secondary': "#222",
      'transparent': 'transparent',
      'shade': 'rgba(43, 43, 43, 0.75)'

    },
    fontFamily: {
      'title': ['Alegreya\\ Sans', 'sans-serif']
    }
  },
  plugins: [],
}
