import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeReducer';
import loginStatusReducer from './reducers/loginStatusReducer';

const store = configureStore({
  reducer: {
    themeReducer,
    loginStatusReducer,
  },
});

export default store;
