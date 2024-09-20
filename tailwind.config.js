/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos dentro de la carpeta src
    "./public/index.html", // Opcionalmente, también puedes incluir el archivo index.html
  ],
  theme: {
    extend: {
      colors: {
        // Aquí puedes extender la paleta de colores, si quieres personalizarla más
        purple: {
          800: '#6B21A8',
          200: '#E9D8FD',
          300: '#D6BCFA',
          700: '#6B46C1',
          900: '#44337A',
        },
        blue: {
          400: '#60A5FA',
        },
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
