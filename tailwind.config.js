/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Titillium Web"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        home: "url('/assets/images/home/landing/bg.png')",
      },
      maxWidth: {
        layoutWidth: '1140px',
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
        // hovered text
        100: '#30E87A',
        // secondary text
        200: '#05C583',
      },
      text: {
        100: '#B5BFD5',
        200: '#59616F',
        300: '#111633',
      },
      // Buttons and forms
      gray: {
        100: '#F8F9FB',
        200: '#EFF0F1',
        300: '#CBCFD6',
        400: '#9AA7B7',
        500: '#59616F',
        600: '#01042B',
      },
    },
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
