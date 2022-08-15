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
              'dark-bg':'#334155',
              'dark-grid':'#59637042',
               'dark-color':'#f8fafc',
               'start':'#00264D',
               'end' : '#00172D',
               'mdl': '#02386E',
               'glass':'#1e293b'
         }

    },
  },
  plugins: [],
};
