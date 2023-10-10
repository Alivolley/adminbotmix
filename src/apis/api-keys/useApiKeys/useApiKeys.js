import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useApiKeys = () => useQuery('apiKeys', () => axiosInstance('account/keys/').then(res => res.data));

export default useApiKeys;
