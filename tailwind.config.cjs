/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3rem',
      },
      screens: {
        xs: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
        '3xl': '100%',
      },
    },
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        rubik: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'cursale-white': '#FFFFFF',
        'cursale-black': '#000000',
        ia: {
          classic: {
            light: '#00AEEF',
            primary: '#007BFF',
            deep: '#072CA4',
            cyan: '#00DDD4',
          },
          futurist: {
            cyan: '#00DDD4',
            blue: '#0178C6',
            purple: '#6C00FF',
            magenta: '#FF007A',
          },
          cyberpunk: {
            neonPurple: '#9D00FF',
            neonMagenta: '#FF007A',
            pink: '#E385EC',
            neonBlue: '#00C2FF',
            darkBlue: '#0A1A3C',
          },
        },
      },
      backgroundImage: {
        'gradient-ia-classic': 'linear-gradient(90deg, #00AEEF, #00DDD4)',
        'gradient-ia-futurist': 'linear-gradient(90deg, rgba(72, 0, 255, 1), rgba(149, 0, 255, 1), rgba(221, 0, 255, 1) );',
        'gradient-ia-cyberpunk': 'linear-gradient(90deg, #0A1A3C, #00C2FF, #FF007A, #9D00FF)',
        'gradient-ia-glass': 'linear-gradient(135deg, rgba(0,194,255,0.15), rgba(255,0,122,0.2))',
        'gradient-ia-mirror': 'linear-gradient(90deg, #6C00FF, #00C2FF, #6C00FF)',
        'gradient-ia-cyberpunk-neonBlue': 'linear-gradient(90deg, #00C2FF, #E385EC)',
        'gradient-ia-light':
          'linear-gradient(90deg, rgba(236, 241, 254, 0.7), rgba(243, 244, 246, 0.7), rgba(255, 255, 255, 0.5))',
      },
      fontSize: {
        xs: ['clamp(0.8rem, 0.7vw, 0.875rem)', '1.25rem'],
        sm: ['clamp(0.9rem, 0.8vw, 1rem)', '1.4rem'],
        base: ['clamp(1rem, 0.9vw, 1.125rem)', '1.6rem'],
        lg: ['clamp(1.125rem, 1vw, 1.25rem)', '1.8rem'],
        xl: ['clamp(1.25rem, 1.1vw, 1.5rem)', '2rem'],
        '2xl': ['clamp(1.5rem, 1.4vw, 1.75rem)', '2.4rem'],
        '3xl': ['clamp(1.75rem, 2vw, 2rem)', '2.8rem'],
        '4xl': ['clamp(2rem, 2.5vw, 2.5rem)', '3.2rem'],
        '5xl': ['clamp(2.5rem, 3vw, 3.25rem)', '1'],
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1900px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
};
