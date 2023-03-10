/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fdfdff",
          200: "#fbfbff",
          300: "#f9faff",
          400: "#f7f8ff",
          500: "#f5f6ff",
          600: "#c4c5cc",
          700: "#939499",
          800: "#626266",
          900: "#313133",
        },
        secondary: {
          100: "#d2d7ef",
          200: "#a5b0de",
          300: "#7988ce",
          400: "#4c61bd",
          500: "#1f39ad",
          600: "#192e8a",
          700: "#132268",
          800: "#0c1745",
          900: "#060b23",
        },
        accent: {
          100: "#d3fbfe",
          200: "#a7f6fd",
          300: "#7bf2fc",
          400: "#4fedfb",
          500: "#23e9fa",
          600: "#1cbac8",
          700: "#158c96",
          800: "#0e5d64",
          900: "#072f32",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
