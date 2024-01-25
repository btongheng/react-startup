/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'text': '#fefefe',
        'background': '#0c0c0c',
        'primary': '#239540',
        'secondary': '#f7ed2c',
        'accent': '#34e160',
        
      },

    },
  },
  plugins: [],
}