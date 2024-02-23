/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#e28525",
        cyan: "#016972",
        darkcyan: "#00403f",
        paragraphs: "#ffffffbf",
        other: "#f2f2f2",
      },
      fontSize: {
        default: "15px",
      },
      fontFamily: {
        "big-shoulders-display": '"Big Shoulders Display", sans-serif',
        "lexend-deca": '"Lexend Deca", sans-serif',
      },
      gridTemplateRows: {
        default: "auto auto 1fr 100px",
      },
    },
  },
  plugins: [],
};
