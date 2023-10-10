import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const usePasswordOtp = () => useMutation(data => axiosInstance.post('account/forgetPassword/', data));

export default usePasswordOtp;
