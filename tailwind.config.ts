import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: "#B9FF66",
        dark: "#07261E",
        light: "#F4F6F4",
        forest: {
          DEFAULT: "#0B3D2E",
          hover: "#0E4D3A",
          light: "#125742",
        },
        ivory: {
          DEFAULT: "#F4F1E6",
          dim: "#DDD8C8",
          muted: "#B8B3A2",
        },
        copper: {
          DEFAULT: "#C7925B",
          hover: "#D6A068",
          dark: "#A87542",
        },
        sage: {
          DEFAULT: "#4F6F5E",
          light: "#668D79",
          dark: "#3B5548",
        },
        deepgreen: {
          DEFAULT: "#07261E",
          surface: "#092E25",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "Inter", "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      boxShadow: {
        brutal: "0 6px 0 0 #07261E",
        "brutal-sm": "0 4px 0 0 #07261E",
        "brutal-hover": "0 8px 0 0 #07261E",
        "brutal-dark": "0 6px 0 0 #0B3D2E",
      },
    },
  },
  plugins: [],
};
export default config;
