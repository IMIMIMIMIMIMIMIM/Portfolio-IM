/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kyobo: ["KyoboHandwriting2019", "sans-serif"],
        chosun: ["chosun", "sans-serif"],
      },

      colors: {
        // coral: "#FF6F61", // 코랄 색상 추가
      },
    },
  },
  plugins: [],
};
