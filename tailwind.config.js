/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d12",
        surface: "#10131b",
        "surface-strong": "#161a24",
        stroke: "#1f2430",
        glow: "rgba(84, 192, 255, 0.18)",
        "glow-strong": "rgba(114, 231, 208, 0.22)",
      },
    },
  },
  plugins: [],
};
