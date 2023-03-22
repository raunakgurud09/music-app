import { useCallback } from 'react';
import { mutate } from 'swr';

import PlaylistServices from '@/services/PlaylistServices';

const useAddTrackPlaylist = () => {
  return useCallback(async (playlist: any) => {
    await PlaylistServices.addTrackToPlaylist(playlist);
    mutate('/api/me');
  }, []);
};

export default useAddTrackPlaylist;
