/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'custom1':'960px',
      'custom2':'600px',
      'custom3':'1300px'
    },
    fontFamily: {
     "Netflix":[ "Netflix Sans", "Helvetica Neue", "Segoe UI", "Roboto", "Ubuntu", "sans-serif"]
     
    }
  },
  plugins: [
    require('flowbite/plugin')

  ],
}