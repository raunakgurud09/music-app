import { fetcherSSR } from '@/lib/fetchSSR';
import PlaylistServices from '@/services/PlaylistServices';
import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { useUser } from '../user/useUser';

export const useGetSinglePlaylist = () => {
  const initialState = {
    gettingPlaylist: false,
    error: null,
  };
  const [status, setStatus] = useState(initialState);
  const { gettingPlaylist, error } = status;

  const getPlaylist = useCallback(
    async (id) => {
      try {
        setStatus({ gettingPlaylist: true, error: null });
        const res = await PlaylistServices.getSinglePlaylist(id);
        setStatus({ gettingPlaylist: false, error: null });
        console.log(res);
        return res;
      } catch (error) {
        setStatus({ gettingPlaylist: false, error: error.message });
        return;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [status]
  );

  return {
    getPlaylist,
    gettingPlaylist,
    error,
  };
};
