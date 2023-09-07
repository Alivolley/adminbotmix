const getDesignTokens = mode => ({
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

  //   typography: {
  //     fontFamily: 'main',
  //   },

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
