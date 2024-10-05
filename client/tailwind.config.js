/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#000080',
        'dark-blue-2': '#000080d8',
        'dark-yellow': '#ffa600d8',
        'dark-yellow-hover': '#ffa700',
      },
      borderRadius: {
        'lg': '5px',
      },
    },
  },
  plugins: [],
}

