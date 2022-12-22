/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dcRed: {
          200: "#A12727",
          300: "#CE6666",
          400: "#BC5151",
          500: "#AC3838",
          600: "#A12727",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
