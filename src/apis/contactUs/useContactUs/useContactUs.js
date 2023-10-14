import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useContactUs = () => useMutation(data => axiosInstance.post('contact/', data).then(res => res));

export default useContactUs;
