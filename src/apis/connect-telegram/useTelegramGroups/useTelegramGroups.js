import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useTelegramGroups = () =>
   useQuery('telegram-groups', () => axiosInstance('account/groups/').then(res => res.data));

export default useTelegramGroups;
