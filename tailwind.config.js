/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'klein-blue': '#002FA7',
        'klein-light': '#0038c8',
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'plex': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
