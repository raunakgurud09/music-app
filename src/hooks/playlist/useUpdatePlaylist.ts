import { useCallback } from 'react';
import { mutate } from 'swr';

import PlaylistServices from '@/services/PlaylistServices';

const useUpdatePlaylist = () => {
  return useCallback(async (playlist: any) => {
    await PlaylistServices.updatePlaylistImage(playlist);
    mutate('/api/me');
  }, []);
};

export default useUpdatePlaylist;
