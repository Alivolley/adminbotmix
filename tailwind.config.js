/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        customSm: '600px',
        customMd: '900px',
        customLg: '1200px',
      },

      colors: {
        textGray: '#A0AEC0',
        primaryBlue: '#4FD1C5',
        success: '#48BB78',
        error: '#F56565',

        bgPrimary: '#F7FAFC',
        bgSecondary: '#ffffff',
        textMain: '#1f2733',

        bgPrimaryDark: '#1A202C',
        bgSecondaryDark: '#1F2733',
        textMainDark: '#ffffff',
      },

      backgroundImage: {
        lineLinear:
          'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)',
        gradientBtnPurple:
          'linear-gradient(264.28deg,#dec7ff -38.2%,#5c27fe 103.12%)',
        gradientPagesLayout: 'linear-gradient(90deg, #fff 0%, #F7FAFC 55%)',
        gradientPagesLayoutDark:
          'linear-gradient(90deg, rgba(47,40,108,1) 0%, #070A29 55%)',
      },

      fontFamily: {
        vazir: 'vazir',
        vazirBold: 'vazirBold',
      },
    },
  },
  plugins: [],
};
