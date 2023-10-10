import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useCloseDeal = () => useMutation(id => axiosInstance.post(`trade/closePosition/${id}`).then(res => res));

export default useCloseDeal;
