import PlaylistServices from '@/services/PlaylistServices';
import useSWR from 'swr';
import { useUser } from '../user/useUser';

export const usePlaylist = () => {
  const { data: user } = useUser();

  const value = user ? 'api/playlist/me' : null;
  console.log('this is working');

  const { data, error } = useSWR(value, PlaylistServices.getPlaylist);
  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
  };
};
