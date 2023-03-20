/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/index.jsx",
    "./src/components/App.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Form.jsx",
    "./src/components/Technologies.jsx",
    "./src/components/Title.jsx",
    "./src/components/Navbar.jsx"
  ],

  theme: {
    extend: {

      colors: {
        "background": "#012A4A",
        "heading": "#E4C988"
      },

      fontFamily: {
        "body": ["Open Sans"],
        "nav": ["Playfair Display"]
      }

    },
  },
  plugins: [],
}
