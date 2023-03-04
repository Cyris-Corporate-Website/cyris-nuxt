/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Titillium', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        home: "url('/assets/images/home/bg.png')",
      },
      maxWidth: {
        layoutWidth: '1140px',
      },
      minWidth: {
        180: '180px',
        150: '150px',
      },
      height: {
        55: '55px',
        50: '50px',
      },
      borderRadius: {
        default: '12px',
      },
    },
    colors: {
      white: '#fff',
      black: '#000',
      // primary: '',
      raspberry: '#E74F76',
      honey: '#FEC400',
      violet: '#6861E4',
      jade: {
        100: '#30E87A',
        200: '#05C583',
        300: '#049C67',
      },
      text: {
        50: '#FCFCFC',
        55: '#CBCFD6',
        100: '#B5BFD5',
        200: '#59616F',
        300: '#111633',
      },
      // Buttons and forms
      gray: {
        100: '#F8F9FB',
        200: '#EFF0F1',
        250: '#EBF0F8',
        300: '#CBCFD6',
        400: '#9AA7B7',
        500: '#59616F',
        600: '#01042B',
      },
    },

    // padding: {
    // 11: '11px',
    // 15: '15px',
    // },
  },
  plugins: [],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
}
