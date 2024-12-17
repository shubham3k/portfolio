/** @type {import('tailwindcss').Config} */
export const content = [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
];
export const theme = {
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
};
export const plugins = [];

