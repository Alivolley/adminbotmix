import { useMutation, useQueryClient } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useAddTelegramGroup = () => {
   const queryClient = useQueryClient();

   return useMutation(data => axiosInstance.post('account/groups/', data).then(res => res), {
      onSuccess: res => {
         const groupList = queryClient.getQueryData(['telegram-groups']);
         const newGroupList = { ...groupList, groups: [...groupList.groups, res?.data?.data] };
         queryClient.setQueryData(['telegram-groups'], newGroupList);
      },
   });
};

export default useAddTelegramGroup;
