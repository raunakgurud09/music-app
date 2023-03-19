import { useCallback } from 'react';
import { mutate } from 'swr';

import TrackServices from '@/services/trackService';

const useAudioAddTrack = () => {
  return useCallback(async (track: any) => {
    await TrackServices.audioAddTrack(track);
    mutate('/api/me');
  }, []);
};

export default useAudioAddTrack;
