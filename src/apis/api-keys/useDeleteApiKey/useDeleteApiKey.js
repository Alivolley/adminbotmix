import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useDeleteApiKey = () => {
   const queryClient = useQueryClient();

   return useMutation(
      id =>
         axiosInstance.delete('account/keys/', {
            params: {
               keyId: id,
            },
         }),
      {
         onSuccess: (res, id) => {
            const groupList = queryClient.getQueryData(['apiKeys']);
            const newGroupList = { keys: groupList?.keys?.filter(item => item.id !== id) };
            queryClient.setQueryData(['apiKeys'], newGroupList);
         },
      }
   );
};

export default useDeleteApiKey;
