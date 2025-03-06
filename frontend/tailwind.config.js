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
      green: {
        100: "#ddeadf",
        200: "#bad5bf",
        300: "#98c0a0",
        400: "#75ab80",
        500: "#539660",
        600: "#42784d",
        700: "#325a3a",
        800: "#213c26",
        900: "#111e13",
      },
    },
  },
  plugins: [],
};
