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
        "purple": "#7C5DFA",
        "light_purple": "#9277FF",
        "charcoal_blue": "#1E2139",
        "charcoal_gray": "#252945",
        "lavender_blue": "#DFE3FA",
        "cool_gray": "#888EB0",
        "wild_blue_yonder": "#7E88C3",
        "gunmetal": "#0C0E16",
        "coral_red": "#EC5757",
        "periwinkle": "#9277FF",
        "off_white": "#F8F8FB",
        "rich_black": "#141625"





      },
    },
  },
  plugins: [],
};
export default config;
