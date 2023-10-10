import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useAddApiKey = () => {
   const queryClient = useQueryClient();

   return useMutation(data => axiosInstance.post('account/keys/', data).then(res => res), {
      onSuccess: res => {
         const groupList = queryClient.getQueryData(['apiKeys']);
         const newGroupList = { keys: [...groupList.keys, res?.data?.data] };
         queryClient.setQueryData(['apiKeys'], newGroupList);
      },
   });
};

export default useAddApiKey;
