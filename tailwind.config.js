/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#666666',
        accent: '#707070',
        'off-white': '#F2F3F7',
        'button-primary': '#474747'
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif']
      }
    },
  },
  plugins: [],
};