/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      }
    },
  },
  plugins: [],
}