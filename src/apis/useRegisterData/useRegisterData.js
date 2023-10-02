import { useMutation } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useRegisterData = () =>
  useMutation(data => axiosInstance.post('account/signup/', data));

export default useRegisterData;
