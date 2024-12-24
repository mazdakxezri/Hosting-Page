/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      n: {
        1: "#010922",
        2: "#6B8C95",
        3: "#FAF9F9",
      },
    },
    fontFamily: {
      sans: ["var(--font-sora)", ...fontFamily.sans],
      code: "var(--font-code)",
      grotesk: "var(--font-grotesk)",
    },
  },
};
export const plugins = [];
