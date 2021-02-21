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
        foco: "#333D4B",
      },
      // backgroundImage: (theme) => ({
      //   "hero-pattern":
      //     "url('./src/assets/static/home/desktop/image-danche.png')",
      // }),
      maxWidth: {
        "tablet-hero": "392px",
        "work-title": "190px",
      },
      fontSize: {
        our: "5.5rem",
        grande: "7rem",
      },
      zIndex: {
        negativo: "-99",
      },
      gridTemplateColumns: {
        miti: "30% 70%",
        taqui: "40% 50%",
      },
      inset: {
        "-quality": "-70px",
      },
      fontSize: {
        "28px": "28px",
      },
      gap: {
        "10%": "10%",
      },
      width: {
        "40%": "40%",
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
