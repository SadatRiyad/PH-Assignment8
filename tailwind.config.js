/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        secondary: "#150B2B99",
        tertiary: "#878787",
        "p-color": "#FFFFFF",
        green: "#23BE0A",
      },
    },
  },
  plugins: [require("daisyui")],
}

