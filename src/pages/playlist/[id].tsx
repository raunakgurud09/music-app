//@ts-ignore
import SearchBar from '@/components/Home/SearchBar';
import Banner from '@/components/Playlist/Banner';
import Tracks from '@/components/Playlist/Tracks';
import Spinner from '@/components/ui/spinner';
import { useGetSinglePlaylist } from '@/hooks/playlist/useGetSinglePlaylist';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';

function playlist() {
  // const {data,isLoading,error} = useGetSinglePlaylist()
  const [playlist, setPlaylist]: any = useState();

  const router = useRouter();
  const {
    isReady,
    query: { id },
  } = router;

  useEffect(() => {
    if (!isReady) {
      console.log('Router not ready');
      return;
    }

    console.log(`ID: ${id}`);
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady, id]);

  const { gettingPlaylist, error, getPlaylist } = useGetSinglePlaylist();

  if (gettingPlaylist) {
    return <Spinner />;
  }

  const handleFetch = async () => {
    console.log('called');
    try {
      const playlist = await getPlaylist(id);
      setPlaylist(playlist);
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return <div>Error</div>;
  }

  console.log(playlist);
  return (
    <>
      <div className='mb-40 w-full '>
        <div className='flex w-full flex-col space-y-6 p-4'>
          {playlist ? (
            <>
              <SearchBar />
              <Banner imageUrl={playlist?.imageUrl} />
              <Tracks tracks={playlist?.tracks} />
            </>
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default playlist;

// export async function getServerSideProps({ params }) {
