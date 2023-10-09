import { useMutation } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useApiKeysRefresh = () =>
   useMutation(keyId => axiosInstance.post('api/refreshLink/', { keyId }).then(res => res.data));

export default useApiKeysRefresh;
