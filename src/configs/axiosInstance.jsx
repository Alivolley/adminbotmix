/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('botmix_accessToken');
const refreshToken = Cookies.get('botmix_refreshToken');

const axiosInstance = axios.create({
   baseURL: 'https://api.trademix.ir/',

   ...(accessToken && {
      headers: {
         Authorization: `Bearer ${accessToken}`,
      },
   }),
});

axiosInstance.interceptors.request.use(async config => config);

axiosInstance.interceptors.response.use(
   res => {
      if (res?.data?.message || res?.data?.detail) {
         toast.success(
            <div className="space-y-3">
               {res?.data?.message && <p className="font-bold">{res?.data?.message}</p>}
               {res?.data?.detail && <p>{res?.data?.detail}</p>}
            </div>,
            {
               style: {
                  direction: 'rtl',
                  fontFamily: 'vazir',
               },
               theme: 'colored',
               autoClose: 6000,
            }
         );
      }

      return res;
   },
   async error => {
      console.log(error);
      const originalReq = error.config;

      if (error?.response?.data?.detail === 'Given token not valid for any token type') {
         if (refreshToken) {
            const res = await axiosInstance.post('account/token/refresh/', {
               refresh: refreshToken,
            });
            Cookies.set('botmix_accessToken', res.data.access, { expires: 1 });
            originalReq.headers.Authorization = `Bearer ${res.data.access}`;
            return axiosInstance(originalReq);
         }
         Cookies.remove('botmix_accessToken');
         Cookies.remove('botmix_refreshToken');
         Cookies.remove('isLogin');
         axiosInstance.interceptors.response.clear();
         location.href = '/login';
      } else if (error?.response?.data?.detail === 'Token is invalid or expired') {
         Cookies.remove('botmix_accessToken');
         Cookies.remove('botmix_refreshToken');
         Cookies.remove('isLogin');
         axiosInstance.interceptors.response.clear();
         location.href = '/login';
      } else if (error?.response?.data?.message || error?.response?.data?.detail) {
         toast.error(
            <div className="space-y-3">
               {error?.response?.data?.message && <p className="font-bold">{error?.response?.data?.message}</p>}
               {error?.response?.data?.detail && <p>{error?.response?.data?.detail}</p>}
            </div>,
            {
               style: {
                  direction: 'rtl',
                  fontFamily: 'vazir',
               },
               theme: 'colored',
               autoClose: 6000,
            }
         );
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;
