/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      paleBlue: {
        100: "#efeffa",
        200: "#dfdef5",
        300: "#cfcef1",
        400: "#bfbdec",
        500: "#afade7",
        600: "#8c8ab9",
        700: "#69688b",
        800: "#46455c",
        900: "#23232e",
      },
    },
  },
  plugins: [],
};
