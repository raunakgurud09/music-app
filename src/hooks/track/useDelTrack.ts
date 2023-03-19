import { useCallback } from 'react';
import { mutate } from 'swr';

import TrackServices from '@/services/trackService';

const useDelTrack = () => {
  return useCallback(async (track: any) => {
    await TrackServices.deleteTrack(track);
    mutate('/api/me');
  }, []);
};

export default useDelTrack;
