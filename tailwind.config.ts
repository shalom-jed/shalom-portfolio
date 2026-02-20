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
        background: "#0a0a0a",
        surface: "#141414",
        'surface-2': "#1a1a1a",
        accent: "#a12828",
        'accent-2': "#ff4d4d",
        border: "#222222",
      },
    },
  },
  plugins: [],
};
export default config;