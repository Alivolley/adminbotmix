import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('botmix_accessToken');
// const refreshToken = Cookies.get('botmix_refreshToken');

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
   error => {
      console.log(error);
      if (error?.response?.data?.message || error?.response?.data?.detail) {
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
