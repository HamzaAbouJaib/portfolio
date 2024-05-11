/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-text': '#eae9fc',
        'dark-background': '#010104',
        'dark-primary': '#0950c3',
        'dark-secondary': '#c5d0e2',
       },
    },
  },
  plugins: [],
};
