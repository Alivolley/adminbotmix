import { useQuery } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useDashboard = () => useQuery('dashboard', () => axiosInstance('account/dashboard/').then(res => res.data));

export default useDashboard;
