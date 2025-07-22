module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        rubik: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        "cursale-blue": {
          900: "#004576",
          700: "#2c658d",
          500: "#5986a5",
          300: "#85a6bd",
          100: "#b2c7d5",
        },
      },
    },
  },
  plugins: [],
};
