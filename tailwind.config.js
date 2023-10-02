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
            customXl: '1400px',
         },

         colors: {
            textGray: '#A0AEC0',
            primaryBlue: '#1f7191',
            secondaryBlue: '#256dac',
            success: '#48BB78',
            error: '#F56565',

            bgPrimary: '#ffffff',
            textMain: '#1f2733',

            bgPrimaryDark: '#212836',
            textMainDark: '#ffffff',
         },

         backgroundImage: {
            lineLinear:
               'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)',

            gradientBtnBlue:
               'linear-gradient(0deg, rgb(253 253 253 / 0%) -10%, rgb(32 96 151) 13%, rgb(32 96 151) 87% , rgb(253 253 253 / 0%) 110%)',

            gradientBtnGreen:
               'linear-gradient(0deg, rgb(253 253 253 / 0%) -10%, rgb(32 129 151) 13%, rgb(32 129 151) 87% , rgb(253 253 253 / 0%) 110%)',

            gradientGray:
               'linear-gradient(0deg, rgb(253 253 253 / 0%) -10%, rgb(167 167 180 / 80%) 13%, rgb(167 167 180 / 80%) 87% , rgb(253 253 253 / 0%) 110%)',

            gradientBtnDark: 'linear-gradient(264.28deg,hsla(0,0%,100%,0) -38.2%,hsla(0,0%,100%,.1) 103.12%)',

            gradientAccordion:
               'linear-gradient(89.96deg, hsl(0deg 0% 0% / 10%) .03%, hsl(0deg 0% 0% / 20%) 49.67%, hsl(0deg 0% 0% / 10%) 99.96%)',

            gradientAccordionDark:
               'linear-gradient(89.96deg,hsla(0,0%,100%,.05) .03%,hsla(0,0%,100%,.008) 49.67%,hsla(0,0%,100%,.05) 99.96%)',
         },

         fontFamily: {
            vazir: 'vazir',
            vazirBold: 'vazirBold',
            lalezar: 'lalezar',
         },
      },
   },
   plugins: [],
};
