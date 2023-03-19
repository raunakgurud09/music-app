import { useCallback } from 'react';
import { mutate } from 'swr';

import TrackServices from '@/services/trackService';

const useAddTrack = () => {
  return useCallback(async (track: any) => {
    await TrackServices.addTrack(track);
    mutate('/api/me');
  }, []);
};

export default useAddTrack;
