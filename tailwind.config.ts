import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        playStation: "url('../assets/images/ps5.png')",
        womenCollection: 'url("../assets/images/women_wear.png")',
        speakers: 'url("../assets/images/speakers.png")',
        perfums: 'url("../assets/images/perfums.png")',
      },
    },
  },
  darkMode: "class",

  plugins: [require("@tailwindcss/forms"), nextui({ addCommonColors: true })],
};

export default config;
