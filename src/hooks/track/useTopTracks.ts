import TrackServices from '@/services/trackService';
import useSWR from 'swr';
import { useUser } from '../user/useUser';

export const useTopTracks = () => {
  const { data: user } = useUser();

  const value = user ? 'api/track/top' : null;

  const { data, error } = useSWR(value, TrackServices.getTopTrack);
  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
  };
};
