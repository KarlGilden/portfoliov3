/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx}"],
  theme: {
    colors: {
      'black': "#000",
      'white': "#fff",
      'offwhite': "#EDEDED",
      'highlight': "#4CAA51",
      'primary': "#152238",
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
