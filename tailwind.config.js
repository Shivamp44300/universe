/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue:{
          10:"#4b61a1",
          400:"#122353",
          500:"#8f9dc5",
          600:"#0c1737",
        }
      },
    },
  },
  plugins: [],
};
