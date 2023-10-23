import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useGrowableCurrencies = () =>
   useQuery('growable-currencies', () => axiosInstance('currencies/').then(res => res.data));

export default useGrowableCurrencies;
