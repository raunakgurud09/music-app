import { useCallback } from 'react';
import { mutate } from 'swr';

import TrackServices from '@/services/trackService';

const useMetaAddTrack = () => {
  return useCallback(async (track: any) => {
    await TrackServices.metaAddTrack(track);
    mutate('/api/me');
  }, []);
};

export default useMetaAddTrack;
