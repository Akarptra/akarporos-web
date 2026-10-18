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
        lime: "#A3D9B5", // Mint Sage
        dark: "#0B3D2E", // Primary Forest Green
        deep: "#040D09", // Deepest Green
        light: "#0E2920", // Deep emerald surface card
        canvas: "#06140E", // Dark forest night canvas
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
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "Inter", "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      boxShadow: {
        brutal: "0 6px 0 0 #020805",
        "brutal-sm": "0 4px 0 0 #020805",
        "brutal-hover": "0 8px 0 0 #020805",
        "brutal-copper": "0 6px 0 0 #C7925B",
        "brutal-dark": "0 6px 0 0 #020805",
        "brutal-mint": "0 6px 0 0 #A3D9B5",
      },
    },
  },
  plugins: [],
};
export default config;
