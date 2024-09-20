/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sofadiOne: ["Sofadi One", "cursive"],
      },
      colors: {
        primary: "#00c2ff",
        secondary: "#dd0bff",
        dark: "#111111",
        designColor: "#ff014f",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },
    },
  },
  plugins: [],
}
