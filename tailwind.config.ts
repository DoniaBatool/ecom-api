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
        background: "var(--background)",
        foreground: "var(--foreground)",
        myRed: "#772424",
      },
      keyframes: {
        'spin-pause': {
          '0%, 90%': { transform: 'rotate(0deg)' },  // No rotation for the first 90% of the 10s
          '100%': { transform: 'rotate(360deg)' },   // Spin at the end
        },
      },
      animation: {
        'spin-5s': 'spin-pause 5s linear infinite',  // 5-second duration with infinite repeats
      },
    },
  },
  plugins: [],
};

export default config;
