import { createSlice } from '@reduxjs/toolkit';

const defaultTheme = localStorage.getItem('theme');

const themeReducer = createSlice({
  name: 'themeReducer',
  initialState: defaultTheme || 'dark',
  reducers: {
    changeToDarkMode: () => {
      localStorage.setItem('theme', 'dark');
      return 'dark';
    },

    changeToLightMode: () => {
      localStorage.setItem('theme', 'light');
      return 'light';
    },

    toggleTheme: state => {
      if (state === 'light') {
        localStorage.setItem('theme', 'dark');
        return 'dark';
      } else if (state === 'dark') {
        localStorage.setItem('theme', 'light');
        return 'light';
      }
    },
  },
});

export const { changeToDarkMode, changeToLightMode, toggleTheme } =
  themeReducer.actions;
export default themeReducer.reducer;
