import { usePlaylist } from '@/hooks/playlist/usePlaylist';
import React, { useState } from 'react';
import PlaylistCard from '../ui/Cards/PlaylistCard';
import CreatePlaylist from '../ui/Modal/createPlaylist';
import Spinner from '../ui/spinner';

function UserPlaylist() {
  const { data, isLoading, error } = usePlaylist();
  const [show, setShow] = useState(false);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <div className='flex w-full max-w-[1500px] space-x-4 overflow-x-auto p-1'>
        <div
          className='relative flex h-56 w-56 items-center justify-center rounded-[20px] bg-stone-900'
          onClick={() => {
            setShow(true);
          }}
        >
          <div className='m-24 text-6xl'>+</div>
        </div>
        <CreatePlaylist show={show} onClose={() => setShow(false)} />
        {data &&
          data.map((playlist) => (
            <PlaylistCard
              key={playlist._id}
              id={playlist._id}
              imageUrl={playlist.imageUrl}
              name={playlist.name}
            />
          ))}
      </div>
    </>
  );
}

export default UserPlaylist;
