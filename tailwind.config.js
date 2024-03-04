/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#050038",
        "navy-blue-light": "#05003880",
        black: "#090909",
        gray: "#F2F2F2",
        blue: "#4262FF",
        "blue-dark": "#0029F1",
        "royal-blue": "#02033B",
        gold: "#FF9D48",
      },
    },
  },
  plugins: [],
};
