/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        raisin: "#222326",
        primary: {
          5: "#cd5631"
        },
        textgray: "#787878",
      },
    },
  },
  plugins: [],
};
