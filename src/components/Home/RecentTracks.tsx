import useMyTrack from '@/hooks/track/useMyTracks';
import React from 'react';
import Tracks from '../Playlist/Tracks';
import Spinner from '../ui/spinner';

function RecentTracks() {
  const { data: myTracks } = useMyTrack();

  return (
    <div className='h-72 '>
      <div className='flex h-fit flex-col items-start space-y-4'>
        <h3 className='text-2xl font-bold'>Your tracks</h3>
        <div className='flex w-full flex-col  justify-between space-y-3 p-1'>
          {myTracks && <Tracks tracks={myTracks.tracks} />}
        </div>
      </div>
    </div>
  );
}

export default RecentTracks;
