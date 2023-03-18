import React from 'react';
import Tracks from '../Playlist/Tracks';

function RecentTracks() {
  return (
    <div className='h-72 '>
      <div className='flex h-fit flex-col items-start space-y-4'>
        <h3 className='text-2xl font-bold'>Top tracks.</h3>
        <div className='flex w-full flex-col  justify-between space-y-3 p-1'>
          <Tracks />
        </div>
      </div>
    </div>
  );
}

export default RecentTracks;
