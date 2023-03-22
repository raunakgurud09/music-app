import React, { useState } from 'react';
import UserPlaylist from './UserPlaylist';
import { useUser } from '@/hooks/user/useUser';

function Playlist() {
  const { data: currentUser } = useUser();
  return (
    <div className='flex h-fit flex-col items-start space-y-4'>
      <h3 className='text-2xl font-bold'>Your Playlists</h3>
      {currentUser ? <UserPlaylist /> : <>LOGIN TO USE THIS</>}
    </div>
  );
}

export default Playlist;
