import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // Add any other directories
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",   // Add any other directories
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        move: "move 20s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        move: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50%, -50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
