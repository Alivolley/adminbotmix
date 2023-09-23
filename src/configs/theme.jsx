const getDesignTokens = mode => ({
  direction: 'rtl',
  colors: {
    textGray: '#A0AEC0',
    primaryBlue: '#4FD1C5',
    success: '#48BB78',
    error: '#F56565',

    ...(mode === 'dark' && {
      bgPrimary: '#1A202C',
      bgSecondary: '#1F2733',
      textMain: '#ffffff',
    }),

    ...(mode === 'light' && {
      bgPrimary: '#F7FAFC',
      bgSecondary: '#ffffff',
      textMain: '#1f2733',
    }),
  },

  palette: {
    mode,

    textGray: {
      main: '#A0AEC0',
    },
    primaryBlue: {
      main: '#4FD1C5',
    },
    buttonPurple: {
      main: '#5c27fe',
    },
    darkPurple: {
      main: '#070A29',
    },
    grayBackground: {
      main: '#191D24',
    },

    ...(mode === 'dark' && {
      bgPrimary: {
        main: '#1A202C',
      },
      bgSecondary: {
        main: '#1F2733',
      },
      textMain: {
        main: '#ffffff',
      },
    }),

    ...(mode === 'light' && {
      bgPrimary: {
        main: '#F7FAFC',
      },
      bgSecondary: {
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
