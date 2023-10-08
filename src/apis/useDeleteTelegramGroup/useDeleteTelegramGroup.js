import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../configs/axiosInstance';

const useDeleteTelegramGroup = () => {
   const queryClient = useQueryClient();

   return useMutation(
      id =>
         axiosInstance.delete('account/groups/', {
            params: {
               id,
            },
         }),
      {
         onSuccess: (res, id) => {
            const groupList = queryClient.getQueryData(['telegram-groups']);
            const newGroupList = { ...groupList, groups: groupList?.groups?.filter(item => item.id !== id) };
            queryClient.setQueryData(['telegram-groups'], newGroupList);
         },
      }
   );
};

export default useDeleteTelegramGroup;
