/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily:{
      body: ['Montserrat']
    },
    extend: {
      colors: {
        primary: '#111',
        accent: '#0C5'
      }
    },
  },
  plugins: [],
}