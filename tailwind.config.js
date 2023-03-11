/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Titillium Web', ...defaultTheme.fontFamily.sans],
      body: ['Inter', 'sans-serif'],
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
        40: '#DEE2ED',
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
    fontSize: {
      '3xs': [
        '0.75rem' /* 12px */,
        {
          lineHeight: '1.2rem',
          fontWeight: '400',
        },
      ],
      '2xs': [
        '0.87rem' /* 14px */,
        {
          lineHeight: '1.2rem',
          fontWeight: '400',
        },
      ],
      links: [
        '1rem',
        {
          lineHeight: '1.4rem',
          fontWeight: '600',
        },
      ],
      xs: [
        '1.12rem' /* 18px */,
        {
          lineHeight: '1.75rem',
          fontWeight: '400',
        },
      ],
      sm: [
        '1.37rem' /* 22px */, //<p>
        {
          lineHeight: '1.8rem',
          fontWeight: '300',
        },
      ],
      md: [
        '2.25rem', //36px
        {
          lineHeight: '3rem',
          fontWeight: '400',
        },
      ],
      lg: [
        '3rem', //48px
        {
          lineHeight: '3.25rem',
          fontWeight: '400',
        },
      ],
      xl: [
        '3.5rem', //56px
        {
          lineHeight: '4.5rem',
          fontWeight: '400',
        },
      ],
      '2xl': [
        '3.68rem', //59px
        {
          lineHeight: '4.5rem',
          fontWeight: '400',
        },
      ],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      backgroundImage: {
        bgTrustedPartners: "url('/assets/images/backgrounds/home/bg1.png')",
        bgKeySolutions: "url('/assets/images/backgrounds/home/bg2.png')",
        bgDevFriendly: "url('/assets/images/backgrounds/home/bg3.png')",
        bgTopChoice: "url('/assets/images/backgrounds/home/flexible.png')",
        bgCompleteSuite: "url('/assets/images/backgrounds/home/bg4.png')",
        bg3steps: "url('/assets/images/backgrounds/home/bg5.png')",
        bgFooter: "url('/assets/images/backgrounds/home/bg-footer.png')",
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
        '4xl': '50px',
      },
      inset: {
        15: '3.75rem',
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
