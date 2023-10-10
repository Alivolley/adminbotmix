import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useSpecificRobot = id => useQuery(['apiKeys', id], () => axiosInstance(`trade/bot/${id}`).then(res => res.data));

export default useSpecificRobot;
