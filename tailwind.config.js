/** @type {import('tailwindcss').Config} */

const fontFallback =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      heading: `var(--font-neuhaas), ${fontFallback}`,
      body: `var(--font-neuhaas), ${fontFallback})`,
      sans: `var(--font-neuhaas), ${fontFallback})`,
    },
    extend: {
      colors: {
        dark: '#0f0f0f',
        background: '#0f0f0f',
        primary: '#0063C8',
      },
    },
  },
  plugins: [],
};
