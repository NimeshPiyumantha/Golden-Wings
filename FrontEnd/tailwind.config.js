/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: {
            50: "#f6e58d",
            100: "#fed330",
            200: "#f7b731",
          },
          red: {
            50: "#fc5c65",
            100: "#eb3b5a",
            200: "#EA2027",
          },
          white: {
            50: "#f1f2f6",
            100: "#f1f2f6",
            200: "#dfe4ea",
          },
          gray: {
            50: "#a4b0be",
            100: "#747d8c",
            200: "#57606f",
          },
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};
