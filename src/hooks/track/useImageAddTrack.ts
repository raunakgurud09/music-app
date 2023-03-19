import { useCallback } from 'react';
import { mutate } from 'swr';

import TrackServices from '@/services/trackService';

const useImageAddTrack = () => {
  return useCallback(async (track: any) => {
    await TrackServices.imageAddTrack(track);
    mutate('/api/me');
  }, []);
};

export default useImageAddTrack;
