/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kyobo: ["KyoboHandwriting2019", "sans"],
      },
    },
  },
  plugins: [],
};
