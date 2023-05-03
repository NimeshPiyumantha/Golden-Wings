/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        accent: {
          green: {
            50: "#1abc9c",
            100: "#2ecc71",
            200: "#16a085",
          },
          red: {
            50: "#fc5c65",
            100: "#eb3b5a",
            200: "#EA2027",
          },
          white: {
            50: "#f1f2f6",
            100: "#ced6e0",
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
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
