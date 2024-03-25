/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0F9FF",
          200: "#E0F2FE",
          300: "#BAE6FD",
          400: "#7DD3FC",
          500: "#38BDF8",
          600: "#0EA5E9",
          700: "#0284C7",
          800: "#0369A1",
          900: "#075985",
        },
        secondary: {
          100: "#FDF2F8",
          200: "#FCE7F3",
          300: "#FBCFE8",
          400: "#F9A8D4",
          500: "#F472B6",
          600: "#EC4899",
          700: "#DB2777",
          800: "#BE185D",
          900: "#9D174D",
        },
        neutral: {
          100: "#F5F7FA",
          200: "#E4E7EB",
          300: "#CBD2D9",
          400: "#9AA5B1",
          500: "#7B8794",
          600: "#616E7C",
          700: "#52606D",
          800: "#3E4C59",
          900: "#323F4B",
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

