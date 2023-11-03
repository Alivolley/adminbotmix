import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../configs/axiosInstance';

export const getUserEmail = createAsyncThunk('emailReducer/getUserEmail', async () => {
   return axiosInstance('account/email/').then(res => res.data);
});

const emailReducer = createSlice({
   name: 'emailReducer',
   initialState: {
      loading: true,
      value: '',
   },

   extraReducers: builder => {
      builder.addCase(getUserEmail.fulfilled, (proxy, action) => {
         return {
            loading: false,
            value: action.payload.email,
            plan: action.payload.currentPlan,
            reservedPlan: action.payload.reservedPlan,
         };
      });
   },
});

export default emailReducer.reducer;
