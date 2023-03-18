import AuthService from '@/services/AuthService';
import { parseCookies } from 'nookies';
import useSWR from 'swr';

export const useUser = () => {
  const { token } = parseCookies({});
  const value = token ? '/api/profile' : null;

  const { data, error } = useSWR(value, AuthService.getMe);
  const isLoading = !data && !error;
  const user = data?.user;

  if (!token) {
    return {
      isLoading: false,
      data: null,
      error: null,
    };
  }

  return {
    error,
    data: user,
    isLoading,
  };
};
