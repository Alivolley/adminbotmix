import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useActivateRobot = id => {
   const queryClient = useQueryClient();

   return useMutation(data => axiosInstance.post('trade/activate/', data).then(res => res), {
      onSuccess: res => {
         queryClient.invalidateQueries(['robotDetail', String(id)]);
      },
   });
};

export default useActivateRobot;
