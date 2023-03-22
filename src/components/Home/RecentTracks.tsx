import useMyTrack from '@/hooks/track/useMyTracks';
import { useTopTracks } from '@/hooks/track/useTopTracks';
import React from 'react';
import Tracks from '../Playlist/Tracks';
import Spinner from '../ui/spinner';

function RecentTracks() {
  const { data, isLoading, error } = useTopTracks();

  if (isLoading) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <div className=''>
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>error</div>;
  }

  const topTracks = data.tracks.slice(-10).reverse();

  return (
    <div className='h-full '>
      <div className='flex h-fit flex-col items-start space-y-4'>
        <h3 className='text-2xl font-bold'>Top tracks</h3>
        <div className='flex w-full flex-col  justify-between space-y-3 p-1'>
          {topTracks && <Tracks tracks={topTracks} />}
        </div>
      </div>
    </div>
  );
}

export default RecentTracks;
