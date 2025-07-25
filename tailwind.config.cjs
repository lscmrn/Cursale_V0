/** @type {import('tailwindcss').Config} */
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
          50:  "#ECF1FE",
          100: "#D4DEFD",
          200: "#A2B8FC",
          300: "#7193FA",
          400: "#406DF8",
          500: "#0F48F6",
          600: "#0737CB",
          700: "#062A99",
          800: "#041C68",
          900: "#020F37",
        },
        "cursale-orange": {
          50:  "#FFEBE5",
          100: "#FFD7CC",
          200: "#FFAF99",
          300: "#FF8666",
          400: "#FF5E33",
          500: "#FF3600",
          600: "#CC2B00",
          700: "#992000",
          800: "#661600",
          900: "#330B00",
        },
        "cursale-gray": {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827"
        },
      },
      backgroundImage: {
        "gradient-blue-50": "linear-gradient(-30deg, #ECF1FE, #F3F4F6, #FFFFFF)",
        "gradient-blue-500": "linear-gradient(-45deg, #0F48F6, #0F48F6, #406DF8)",
        "gradient-blue-700": "linear-gradient(-30deg, #041C68, #062A99, #0737CB)",
        "gradient-orange-100": "linear-gradient(to right, #FFEBE5, #FFD7CC)",
        "gradient-orange-500": "linear-gradient(-30deg, #ff4a0499 0%, #fa5300 40%, #db6643 100%)",
        "gradient-orange-700": "linear-gradient(to right, #FF5E33, #FF3600)",
        "gradient-ia-100": "linear-gradient(to right, #e7e5ff, #FFD7CC)",
        "gradient-ia": "linear-gradient(-30deg, #baa7d399 0%, #9000fa 40%, #db4395 100%)",
        'cursale': "url('/src/assets/images/bg-cursale.png')"
      },
      fontSize: {
        "xs": ["0.75rem", "1rem"], // 12px
        "sm": ["0.875rem", "1.25rem"], // 14px
        "base": ["1rem", "1.5rem"], // 16px
        "lg": ["1.125rem", "1.75rem"], // 18px
        "xl": ["1.25rem", "1.75rem"], // 20px
        "2xl": ["1.5rem", "2rem"], // 24px
        "3xl": ["1.875rem", "2.25rem"], // 30px
        "4xl": ["2.25rem", "2.5rem"], // 36px
        "5xl": ["3rem", "1"], // 48px
      },
      screens: {
        "xs": "475px", // mobile pequeno
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
