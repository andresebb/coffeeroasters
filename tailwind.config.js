const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        verde: "#0E8784",
        text: "#333D4B",
        blanco: "#FEFCF7",
        numero: "#FDD6BA",
        textfooter: "#83888F",
      },
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
