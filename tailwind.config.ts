import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      blue: {
        200: "#2e859e",
      },
      gray: {
        100: "#EEEEEE",
        500: "#222d33",
        800: "#313131",
      },
      black: {
        800: "#060f13",
      },
      white: "#fff",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  extends: {
    backgroundImage: {
      arrow: "url('/icons/arrow.png')",
    },
    gridTemplateColumns: {
      "auto-fit-166": "repeat(auto-fit, minmax(166px, 1fr))",
      "auto-fit-120": "repeat(auto-fit, minmax(120px, 1fr))",
    },
  },
  plugins: [],
});
export default config;
