import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useEditRobot = robotId => {
   const queryClient = useQueryClient();

   return useMutation(data => axiosInstance.post(`trade/editBot/`, data).then(res => res), {
      onSuccess: res => {
         queryClient.invalidateQueries(['robotsTable', robotId]);
         queryClient.invalidateQueries(['apiKeys', robotId]);
         queryClient.invalidateQueries(['robotsList']);
      },
   });
};

export default useEditRobot;
