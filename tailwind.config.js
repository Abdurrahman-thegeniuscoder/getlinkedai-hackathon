/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}"],
  theme: {
    colors: {
      line: "rgba(255, 255, 255, 0.18)",
      primary: "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      purple: "#D434FE"
    },
    fontFamily: {
      montserrat: "Montserrat, serif",
      inter: "Inter",
    },
    extend: {},

  },
  plugins: [],
}