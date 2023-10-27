import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';
import Cookies from 'js-cookie';

const usePasswordReset = () =>
   useMutation(data =>
      axiosInstance.post('account/setPassword/', data).then(res => {
         Cookies.set('botmix_accessToken', res?.data?.access, { expires: 7 });
         Cookies.set('botmix_refreshToken', res?.data?.refresh, { expires: 7 });
         Cookies.set('isLogin', true, { expires: 7 });
         axiosInstance.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${res?.data?.access}`;
            return config;
         });
      })
   );

export default usePasswordReset;
