import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeReducer';
import loginStatusReducer from './reducers/loginStatusReducer';
import emailReducer from './reducers/emailReducer';

const store = configureStore({
   reducer: {
      themeReducer,
      loginStatusReducer,
      emailReducer,
   },
});

export default store;
