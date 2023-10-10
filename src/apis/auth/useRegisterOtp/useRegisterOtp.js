import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useRegisterOtp = () => useMutation(data => axiosInstance.post('account/otp/', data));

export default useRegisterOtp;
