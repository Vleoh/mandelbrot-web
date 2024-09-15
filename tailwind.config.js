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
        },
        blue: {
          400: '#60A5FA',
        },
      },
    },
  },
  plugins: [],
}
