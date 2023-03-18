import UserServices from '@/services/UserService';
import useSWR from 'swr';
import { useUser } from './user/useUser';

const useFetchUser = () => {
  const user = useUser();
  const value = user ? '/api/v1/admin/users' : null;
  const { data, error } = useSWR(value, UserServices.getUsers);

  const isLoading = !data && !error;

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchUser;
