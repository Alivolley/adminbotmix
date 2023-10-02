import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const isLogin = Boolean(Cookies.get('isLogin'));

const loginStatusReducer = createSlice({
   name: 'loginStatusReducer',
   initialState: isLogin || false,

   reducers: {
      changeToLoginTrue: () => {
         return true;
      },

      changeToLoginFalse: () => {
         return false;
      },

      toggleLoginStatus: state => {
         if (state) {
            return false;
         } else {
            return true;
         }
      },
   },
});

export const { changeToLoginTrue, changeToLoginFalse, toggleLoginStatus } = loginStatusReducer.actions;
export default loginStatusReducer.reducer;
