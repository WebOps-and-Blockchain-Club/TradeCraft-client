/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      sizing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
      },
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
