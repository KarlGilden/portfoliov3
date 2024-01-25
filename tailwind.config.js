/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx}"],
  theme: {
    colors: {
      'black': "#000",
      'white': "#fff",
      'offwhite': "#191919",
      'highlight': "#0B60B0",
      'primary': "#000",
      'secondary': "#222",
      'transparent': 'transparent',
      'shade': 'rgba(0, 0, 0, 0.90)'

    },
    fontFamily: {
      'title': ['Alegreya\\ Sans', 'sans-serif']
    }
  },
  plugins: [],
}
