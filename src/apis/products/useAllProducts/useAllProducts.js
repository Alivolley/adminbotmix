import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useAllProducts = () => useQuery('allProducts', () => axiosInstance('products/').then(res => res.data));

export default useAllProducts;
