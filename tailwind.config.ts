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
        ashla: {
          dark: "#1A1D1A",
          charcoal: "#2C312E",
          pink: "#FF3864",
          pinkLight: "#FFF0F3",
          yellow: "#FFD166",
          yellowLight: "#FFF9E6",
          mint: "#2EC4B6",
          mintLight: "#E8F8F5",
          cream: "#FDFBF7",
          creamMuted: "#F4EFEA",
          border: "#EAE5DE",
        }
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
