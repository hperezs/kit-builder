module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1280px',
      'xl': '1920px',
      '2xl': '2300px'
    },
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      zIndex: {
        '-10': '-10',
        '-50': '-50',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
