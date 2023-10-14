import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useTutorials = page =>
   useQuery(['tutorials', page], () => axiosInstance(`training/${page}`).then(res => res.data));

export default useTutorials;
