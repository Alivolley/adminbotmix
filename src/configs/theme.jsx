const getDesignTokens = mode => ({
  direction: 'rtl',
  mode,
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
    textGray: {
      main: '#A0AEC0',
    },
    primaryBlue: {
      main: '#4FD1C5',
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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: 'inherit',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#a0aec032',
          },
        },
      },
    },
  },

  //   components: {
  //     MuiTooltip: {
  //       styleOverrides: {
  //         tooltip: {
  //           backgroundColor: 'white',
  //           borderRadius: '5px',
  //           border: '1px solid #5EA3FF',
  //           width: '300px',
  //           padding: '20px',
  //         },
  //       },
  //     },
  //   },
});

export default getDesignTokens;
