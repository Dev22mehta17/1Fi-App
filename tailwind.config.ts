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
        fi: {
          50: "#fcfaff",
          100: "#f5f0ff",
          200: "#ece5ff",
          300: "#d8b4fe",
          400: "#a855f7",
          500: "#8b2cf5",
          primary: "#712CDC",
          dark: "#5c22a5",
          hover: "#5e23b8",
          active: "#5300d9",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        'fi-card': "0 2px 6px rgba(20, 14, 50, 0.04)",
        'fi-hover': "0 6px 16px rgba(20, 14, 50, 0.08)",
        'fi-tab': "0 1px 3px rgba(20, 14, 50, 0.10), 0 0 0 1px rgba(113, 44, 220, 0.08)",
        'fi-nav': "0 8px 32px rgba(20, 14, 50, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.18) inset",
      },
      borderRadius: {
        'card': "18px",
        'tab': "28px",
      }
    },
  },
  plugins: [],
};

export default config;
