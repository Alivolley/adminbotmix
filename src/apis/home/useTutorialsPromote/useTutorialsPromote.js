import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useTutorialsPromote = () =>
   useQuery('promote-tutorial', () => axiosInstance('training/promotes').then(res => res.data));

export default useTutorialsPromote;
