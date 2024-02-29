/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-primary': '#050038',
        'blue-primary': '#4262FF',
        'blue-dark': '#0029F1',
      },
    },
  },
  plugins: [],
};
