const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        verde: "#0E8784",
        text: "#333D4B",
        gris: "#83888F",
        blanco: "#FEFCF7",
        background: "#2C343E",
        numero: "#FDD6BA",
        textfooter: "#83888F",
      },
      // backgroundImage: (theme) => ({
      //   "hero-pattern":
      //     "url('./src/assets/static/home/desktop/image-danche.png')",
      // }),
    },
    fontFamily: {
      title: ["Fraunces"],
      text: ["Barlow"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
