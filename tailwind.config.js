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
        primary: '#211859',
        secondary: '#1C3659',
        text: '#EFD',
        accent: '#11CA92',
        glow: '#22DGBA3'
      }
    },
  },
  plugins: [],
}