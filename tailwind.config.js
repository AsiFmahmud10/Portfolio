/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors:{
              'dark':'#0b1120',
               'start':'#00264D',
               'end' : '#00172D',
               'mdl': '#02386E',
               'glass':'#1e293b'
         }

    },
  },
  plugins: [],
};
