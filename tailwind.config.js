let colorConfig = {
  primary: "#B85042",
  secondary: "#E7E8D1",
  tertiary: "#A7BEAE",
};
const { primary, secondary, tertiary } = colorConfig;

module.exports.colorConfiguration = function (
  userPrimary,
  userSecondary,
  userTertiary
) {
  colorConfig = {
    primary: userPrimary,
    secondary: userSecondary,
    tertiary: userTertiary,
  };
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  // enable dark mode
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Scarlet, Light Olive, and Light Teal
      colors: { ...colorConfig },
      // Custom gradients for 400 and 500 pages
      backgroundImage: {
        404: `linear-gradient(65deg, ${primary} 20%, ${secondary} 20%, ${secondary} 65%, ${tertiary} 65%, ${tertiary} 85%)`,
        500: `linear-gradient(65deg, ${tertiary} 20%, ${secondary} 20%, ${secondary} 65%, ${primary} 65%, ${primary} 85%)`,
      },
    },
  },
  // https://tailwindcss.com/docs/typography-plugin
  plugins: [require("@tailwindcss/typography")],
};
