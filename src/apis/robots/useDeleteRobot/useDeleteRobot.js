import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useDeleteRobot = setRobotId => {
   const queryClient = useQueryClient();

   return useMutation(data => axiosInstance.post(`trade/delete/`, data).then(res => res), {
      onSuccess: res => {
         setRobotId('default');
         queryClient.invalidateQueries(['robotsList']);
      },
   });
};

export default useDeleteRobot;
