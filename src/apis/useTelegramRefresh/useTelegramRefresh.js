import { useMutation } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useTelegramRefresh = () => useMutation(() => axiosInstance.post('account/refreshTelLink/').then(res => res.data));

export default useTelegramRefresh;
