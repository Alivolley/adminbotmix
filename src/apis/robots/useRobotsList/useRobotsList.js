import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useRobotsList = () => useQuery('robotsList', () => axiosInstance('trade/myBots/').then(res => res.data));

export default useRobotsList;
