/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mini-phone': '304px',

      'mini-tablet': '421px',

      'tablet': '640px',

      'tablet-large': '800px',

      'laptop': '1024px',

      'desktop': '1280px',
    }
  },
  plugins: [],
}

