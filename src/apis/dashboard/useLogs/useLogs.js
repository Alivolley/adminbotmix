import { useInfiniteQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useLogs = param =>
   useInfiniteQuery(
      ['logs', param],
      ({ pageParam = 1 }) =>
         axiosInstance(`account/logs/${pageParam}`, {
            params: {
               ...(param && {
                  type_filter: param,
               }),
            },
         }).then(res => res.data),
      {
         getNextPageParam: lastPage => {
            if (lastPage?.has_next_page) {
               return lastPage?.current_page + 1;
            } else {
               return false;
            }
         },
      }
   );

export default useLogs;
