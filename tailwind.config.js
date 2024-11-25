/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      },
      padding: {
        '6': '1.438rem',
        '8': '1.938rem',
        '9': '2.188rem',
        '20': '4.563rem'
      },
      margin: {
        '7' : '1.813rem',
        '20': '4.625rem'
      },
      space: {
        '8': '1.875rem'
      },
      colors: {
        'links': '#616161',
        'titles': '#1A2E35',
        'main': '#F3F3F3',
        'btn': '#FF4F5B',
        'credits': '#FF3F4C'
      },
      width: {
        '98': '48rem',
        'btn': '15.625rem',
        'info': '32.875rem'
      },
      height: {
        'main': '47.5rem',
        'btn': '3.75rem'
      },
      borderRadius: {
        'lg': '0.938rem'
      }
    },
  },
  plugins: [],
}