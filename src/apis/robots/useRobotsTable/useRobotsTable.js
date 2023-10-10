import { useInfiniteQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useRobotsTable = id =>
   useInfiniteQuery(
      ['robotsTable', id],
      ({ pageParam = 1 }) => axiosInstance(`trade/table/${id}/${pageParam}`).then(res => res.data),
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

export default useRobotsTable;
