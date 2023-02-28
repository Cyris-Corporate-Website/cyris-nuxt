/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Titillium Web"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        home: "url('/assets/images/home/section1/header.png')",
      },
      colors: {
        // primary: '',
        secondaryGreen: '#05C583',
        secondaryRed: '#E74F76',
        secondaryYellow: '#FEC400',
        secondaryPurple: '#6861E4',
        textDark: '#111633',
        textDarkGray: '#59616F',
        textLightGray: '#B5BFD5',
        textLightGreen: '#30E87A',
        // ??? Gray Button and forms
        componentsGray1: '#01042B',
        componentsGray2: '#59616F',
        componentsGray3: '#9AA7B7',
        componentsGray4: '#CBCFD6',
        componentsGray5: '#EFF0F1',
        componentsGray6: '#F8F9FB',
      },
      maxWidth: {
        layoutWidth: '1140px',
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
