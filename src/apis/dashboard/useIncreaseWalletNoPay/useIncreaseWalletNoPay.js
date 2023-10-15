import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useIncreaseWalletNoPay = () => {
   return useMutation(data =>
      axiosInstance.post('pay/nowPay/', data).then(res => (window.location.href = res.data.link))
   );
};

export default useIncreaseWalletNoPay;
