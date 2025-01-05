import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const api = axios.create({
   headers: {
      Accept: 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
   },
});

export default api;

const postRrequest = async ({ data }: { data: string }) => {
   const response = await api.post('http://192.168.4.1/submit', {
      data: data,
   });
   return response.data;
};
export const usePostRequst = () => {
   return useMutation({
      mutationFn: postRrequest,
   });
};
