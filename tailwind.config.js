/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'staspi-orange': '#F07E2A',
        'staspi-grey-dark': '#707070',
        'staspi-dark-blue': '#202857',
      },
    },
  },
  plugins: [],
};
