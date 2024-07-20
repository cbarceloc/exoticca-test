import { addDynamicIconSelectors } from '@iconify/tailwind';
import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',

  backgroundColor: (theme) => ({
    ...theme('colors'),
  }),
  plugins: [
    // Iconify plugin
    formsPlugin,
    tailwindScrollbar,
    addDynamicIconSelectors(),
  ],
  variants: {
    backgroundColor: ['active'],
  },
};
