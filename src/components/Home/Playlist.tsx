import React from 'react';
import PlaylistCard from '../ui/Cards/PlaylistCard';
import lead from "../Playlist/Lead-image.png"

function Playlist() {
  return (
    <div className='h-fit flex flex-col items-start space-y-4'>
      <h3 className='font-bold text-2xl'>New release.</h3>
      <div className='flex w-full space-x-4 justify-between p-1'>
        <PlaylistCard imageUrl={lead} name='' artist='' count='' />
        <PlaylistCard imageUrl={''} name='' artist='' count='' />
        <PlaylistCard imageUrl={''} name='' artist='' count='' />
        <PlaylistCard imageUrl={''} name='' artist='' count='' />
        <PlaylistCard imageUrl={''} name='' artist='' count='' />
      </div>
    </div>
  );
}

export default Playlist;
