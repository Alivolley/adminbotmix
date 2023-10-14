import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const usePromoteProduct = () =>
   useQuery('promote-product', () => axiosInstance('products/promote/').then(res => res.data));

export default usePromoteProduct;
