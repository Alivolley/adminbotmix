import { useQuery } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useApiKeysAccordion = id =>
   useQuery(['apiKeys', id], () => axiosInstance(`api/docs/${id}`).then(res => res.data));

export default useApiKeysAccordion;
