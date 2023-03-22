import { useCallback } from 'react';
import { mutate } from 'swr';

import PlaylistServices from '@/services/PlaylistServices';

const useAddPlaylist = () => {
  return useCallback(async (playlist: any) => {
    await PlaylistServices.addPlaylist(playlist);
    mutate('/api/me');
  }, []);
};

export default useAddPlaylist;
