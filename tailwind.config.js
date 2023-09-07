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
      fontFamily: {
        avgardn: 'avgardn',
        avgardnItalic: 'avgardnItalic',
        pubg: 'pubg',
        aubrey: 'aubrey',
        picoopicRegular: 'picoopic_Regular',
        titreZebr2: 'titre_Zebr2',
      },
    },
  },
  plugins: [],
};
