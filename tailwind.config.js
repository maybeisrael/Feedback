/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      sky: colors.sky, // Rename lightBlue to sky
      stone: colors.stone, // Rename warmGray to stone
      neutral: colors.neutral, // Rename trueGray to neutral
      gray: colors.gray, // Rename coolGray to gray
      slate: colors.slate, // Rename blueGray to slate
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [],
};
