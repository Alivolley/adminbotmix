import { useInfiniteQuery } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useLogs = page =>
   useInfiniteQuery('logs', ({ pageParam = 1 }) => axiosInstance(`account/logs/${pageParam}`).then(res => res.data), {
      getNextPageParam: lastPage => {
         if (lastPage?.has_next_page) {
            return lastPage?.current_page + 1;
         } else {
            return false;
         }
      },
   });

export default useLogs;
