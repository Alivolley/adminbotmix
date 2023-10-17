import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useCloseDeal = tableId => {
   const queryClient = useQueryClient();

   return useMutation(id => axiosInstance.post(`trade/closePosition/${id}`).then(res => res), {
      onSuccess: res => {
         queryClient.invalidateQueries(['robotsTable', tableId]);
         queryClient.invalidateQueries(['apiKeys', tableId]);
         queryClient.invalidateQueries(['robotsList']);
      },
   });
};

export default useCloseDeal;
