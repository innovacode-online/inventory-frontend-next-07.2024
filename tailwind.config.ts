import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "dark",
    themes: {
      dark: {
        layout: {

          radius: {
            small: "5px",
            medium: "8px",
            large: "12px",
          }
        },

        colors: {
          background: "#000",

          primary: {
            DEFAULT: '#0182ff',
            '50': '#edfaff',
            '100': '#d6f3ff',
            '200': '#b5ecff',
            '300': '#83e2ff',
            '400': '#48d0ff',
            '500': '#1eb2ff',
            '600': '#0695ff',
            '700': '#0182ff',
            '800': '#0862c5',
            '900': '#0d559b',
            // '950': '#0e335d',
          },
        }

      }
    }
  })]

};
export default config;
