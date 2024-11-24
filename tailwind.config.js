
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      colors: {
        dark: "#110606",
        lightGray: "#333333",
        primary: "#ff4d4f",
        gray: "#b3b3b3",
        darkBg:"#443e3e",
        darkBgHover:"#655d5e",
        darkBorder : "#515151",

      },
    },
  },
  plugins: [],
};

