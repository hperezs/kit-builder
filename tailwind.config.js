module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "240px",
      md: "768px",
      lg: "1280px",
      xl: "1920px",
      "2xl": "2300px",
    },
    extend: {
      transitionProperty: {
        width: "width",
        filter: "filter",
      },
      zIndex: {
        "-10": "-10",
        "-50": "-50",
      },
      colors: {
        green: {
          50: "#EEFCED",
          100: "#D3F9D2",
          200: "#B0F2AA",
          300: "#6EE56E",
          400: "#48D134",
          500: "#13B713",
          600: "#149306",
          700: "#087705",
          800: "#0B5E07",
          900: "#114C06",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
