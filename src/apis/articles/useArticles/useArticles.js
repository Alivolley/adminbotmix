import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useArticles = page => useQuery(['articles', page], () => axiosInstance(`articles/${page}`).then(res => res.data));

export default useArticles;
