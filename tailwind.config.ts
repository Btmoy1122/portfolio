import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: {
          400: "#14b8a6",
          500: "#0d9488",
        },
        lime: {
          400: "#84cc16",
          500: "#65a30d",
        },
        gold: {
          400: "#f59e0b",
          500: "#d97706",
        },
        purple: {
          400: "#a855f7",
          500: "#9333ea",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(20, 184, 166, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(20, 184, 166, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
