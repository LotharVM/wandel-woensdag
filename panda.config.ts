import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "#0063C8" },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
      },
    },
  },
  globalCss: {
    body: {
      fontFamily: "body",
      color: "black",
      bg: "primary",
    },
  },

  outdir: "styled-system",
  jsxStyleProps: "minimal",
});