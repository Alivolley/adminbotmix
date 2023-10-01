const getDesignTokens = mode => ({
  direction: 'rtl',
  colors: {
    textGray: '#A0AEC0',
    primaryBlue: '#1f7191',
    success: '#48BB78',
    error: '#F56565',

    ...(mode === 'dark' && {
      bgPrimary: '#212836',
      textMain: '#ffffff',
    }),

    ...(mode === 'light' && {
      bgPrimary: '#ffffff',
      textMain: '#1f2733',
    }),
  },

  palette: {
    mode,

    textGray: {
      main: '#A0AEC0',
    },
    primaryBlue: {
      main: '#1f7191',
    },
    secondaryBlue: {
      main: '#256dac',
    },

    ...(mode === 'dark' && {
      bgPrimary: {
        main: '#212836',
      },
      textMain: {
        main: '#ffffff',
      },
    }),

    ...(mode === 'light' && {
      bgPrimary: {
        main: '#ffffff',
      },
      textMain: {
        main: '#1f2733',
      },
    }),
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'vazir',
        },
      },
    },
  },
});

export default getDesignTokens;
