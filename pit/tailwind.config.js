// tailwind.config.js
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  darkMode: 'class',
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      scrollbarWidth: {
        thin: '8px', // Example scrollbar width
      },
      scrollbarColor: {
        base: '#888', // Example base color
        hover: '#555', // Example hover color
      },
    },
  },

  plugins: [forms],
};
