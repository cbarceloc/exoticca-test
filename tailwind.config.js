import { addDynamicIconSelectors } from '@iconify/tailwind';
import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-100': ({ opacityValue }) => `rgba(var(--color-primary-100), ${opacityValue ?? 1})`,
        'primary-300': ({ opacityValue }) => `rgba(var(--color-primary-300), ${opacityValue ?? 1})`,
        'primary-500': ({ opacityValue }) => `rgba(var(--color-primary-500), ${opacityValue ?? 1})`,
        'primary-700': ({ opacityValue }) => `rgba(var(--color-primary-700), ${opacityValue ?? 1})`,
        'primary-900': ({ opacityValue }) => `rgba(var(--color-primary-900), ${opacityValue ?? 1})`,
        'secondary-100': ({ opacityValue }) =>
          `rgba(var(--color-secondary-100), ${opacityValue ?? 1})`,
        'secondary-300': ({ opacityValue }) =>
          `rgba(var(--color-secondary-300), ${opacityValue ?? 1})`,
        'secondary-500': ({ opacityValue }) =>
          `rgba(var(--color-secondary-500), ${opacityValue ?? 1})`,
        'secondary-700': ({ opacityValue }) =>
          `rgba(var(--color-secondary-700), ${opacityValue ?? 1})`,
        'secondary-900': ({ opacityValue }) =>
          `rgba(var(--color-secondary-900), ${opacityValue ?? 1})`,
      },
    },
  },
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
