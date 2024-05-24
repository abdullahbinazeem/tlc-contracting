import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/hero-bg.jpg')",
      },
      colors: {
        logo: "#012164",
        primary: "#1C5484",
        black: "#272727",
      },
    },
  },
  plugins: [],
};
export default config;
