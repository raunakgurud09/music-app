import { useUser } from '@/hooks/user/useUser';
import TrackServices from '@/services/trackService';
import useSWR from 'swr';

const useMyTrack = () => {
  const { data: user } = useUser();

  const value = user ? '/track/me' : null;

  const { data, error } = useSWR(value, TrackServices.getMyTracks);

  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
  };
};

export default useMyTrack;
