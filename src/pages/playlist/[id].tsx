import SearchBar from '@/components/Home/SearchBar';
import Banner from '@/components/Playlist/Banner';
import Tracks from '@/components/Playlist/Tracks';
import React from 'react';

function playlist() {
  return (
    <>
      <div className='mb-40 w-full '>
        <div className='flex w-full flex-col space-y-6 p-4'>
          <SearchBar />
          <Banner />
          <Tracks />
        </div>
      </div>
    </>
  );
}

export default playlist;

{
}
