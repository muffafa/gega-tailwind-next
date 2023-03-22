/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        '2xl': "1140px",
      }
    },
    extend: {
      fontFamily: {
        gemunuLibre: ["Gemunu Libre", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "gega-red": "#BC1A45",
        "gega-melon": "#FFD369",
        "gega-gray": "#DDDDDD",
        "gega-white": "#F7F7F7",
      },
    },
  },
  plugins: [],
};
