/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors : {
        "brandColor" : '#E4FF66'
      },
      fontFamily: {
        'primary-outfit': ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

