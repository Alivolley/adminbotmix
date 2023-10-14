import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useArticleDetail = id =>
   useQuery(['article', id], () => axiosInstance(`articles/detail/${id}`).then(res => res.data));

export default useArticleDetail;
