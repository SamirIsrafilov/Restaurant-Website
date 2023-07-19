/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      margin: '2rem',
    },
    screens: {
      '2xl': {'min': '1535px'},
     
      'xl': {'min': '1279px'},
     
      'lg': {'min': '1024px'},
      
      'md': {'min': '800px'},
     
      'sm': {'min': '639px'},
     
    }
  },
  plugins: [],
}