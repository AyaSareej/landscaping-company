/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if you're using a different structure
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        inten: ["Inter" , "sans-serif"]
      },
      fontWeight: {
        normal: 500,
        bold: 700,
      },
      colors: {
        'custom-light': '#EEF9F3', // 60%
        'custom-teal': '#0E7E83',   // 30%
        'custom-dark-teal': '#074143', // 30%
        'custom-green-light': '#4DF89E', // 10%
        'custom-green': '#1BF783', // 10%
        'custom-green-dark': '#05BE5D', // 10%
        'custom-dark': '#031C1D', // 30%
      }
    },
  },
  plugins: [],
};
