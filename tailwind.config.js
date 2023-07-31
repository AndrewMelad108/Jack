/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js,vue}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#24c6c9",
        "cover-color": "#f3f4f6",
      },
    },
  },
  plugins: [],
};
