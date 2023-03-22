import { useCallback } from 'react';
import { mutate } from 'swr';

import PlaylistServices from '@/services/PlaylistServices';

const useDelPlaylist = () => {
  return useCallback(async (track: any) => {
    await PlaylistServices.deletePlaylist(track);
    mutate('/api/me');
  }, []);
};

export default useDelPlaylist;
