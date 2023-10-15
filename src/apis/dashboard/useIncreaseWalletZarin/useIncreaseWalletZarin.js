import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useIncreaseWalletZarin = () => {
   return useMutation(data =>
      axiosInstance.post('pay/zarinPay/', data).then(res => (window.location.href = res.data.link))
   );
};

export default useIncreaseWalletZarin;
