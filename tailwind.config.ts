import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1d35",
          light: "#112a4a",
          dark: "#071525",
        },
        brand: {
          DEFAULT: "#1e5fe8",
          light: "#3a7bf5",
          dark: "#1548b8",
        },
        accent: {
          DEFAULT: "#e85a00",
          light: "#ff7a2e",
          dark: "#c44d00",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-pathway)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
      },
      animation: {
        "slow-spin": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
