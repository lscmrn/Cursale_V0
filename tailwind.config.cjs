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
        "cursale-white": "#FFFFFF",
        "cursale-black": "#000000",
        "cursale-blue": {
          900: "#020F37",
          700: "#1F40A3",
          500: "#4F70D4",
          300: "#869EF6",
          200: "#C9D3F8",
          100: "#E6EAF8",
          50:  "#F6F8FF",
        },
        "cursale-orange": {
          900: "#FF3600",
          300: "#F4542A",
          100: "#F6A489",
        },
      },
    },
  },
  plugins: [],
};
