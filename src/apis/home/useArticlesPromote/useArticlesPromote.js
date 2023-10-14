import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useArticlesPromote = () =>
   useQuery('promote-articles', () => axiosInstance('articles/promotes').then(res => res.data));

export default useArticlesPromote;
