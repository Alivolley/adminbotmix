import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useTutorialDetail = id =>
   useQuery(['tutorial', id], () => axiosInstance(`training/detail/${id}`).then(res => res.data));

export default useTutorialDetail;
