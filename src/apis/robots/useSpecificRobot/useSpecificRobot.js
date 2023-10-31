import { useQuery } from 'react-query';
import axiosInstance from '../../../configs/axiosInstance';

const useSpecificRobot = (id, setDefaultId) =>
   useQuery(['apiKeys', id], () => axiosInstance(`trade/bot/${id}`).then(res => res.data), {
      onSuccess: res => {
         if (id === 'default') {
            setDefaultId(res?.id);
         } else {
            setDefaultId();
         }
      },
   });

export default useSpecificRobot;
