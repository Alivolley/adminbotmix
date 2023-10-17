import { useMutation } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useCloseDeal = tableId =>
   useMutation(id => axiosInstance.post(`trade/closePosition/${id}`).then(res => res), {
      onSuccess: res => {
         queryClient.invalidateQueries(['robotsTable', String(tableId)]);
         queryClient.invalidateQueries(['apiKeys', String(tableId)]);
         queryClient.invalidateQueries(['robotsList']);
      },
   });

export default useCloseDeal;
