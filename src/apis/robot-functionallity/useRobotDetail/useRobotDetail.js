import { useInfiniteQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useRobotDetail = id =>
   useInfiniteQuery(
      ['robotDetail', id],
      ({ pageParam = 1 }) => axiosInstance(`products/${id}/${pageParam}`).then(res => res.data),
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

export default useRobotDetail;
