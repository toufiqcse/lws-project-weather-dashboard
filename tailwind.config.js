/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundColor: {
        darkBg: "#0B1120", // Define your custom dark background color
      },
    },
  },
  plugins: [],
};
