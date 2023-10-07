import { useInfiniteQuery } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useLogs = page =>
   useInfiniteQuery('logs', ({ pageParam = 1 }) => axiosInstance(`account/logs/${pageParam}`).then(res => res.data), {
      getNextPageParam: (lastPage, allPages) => {
         //  console.log('last page', lastPage);
         //  console.log('all pages', allPages);
      },
   });

export default useLogs;
