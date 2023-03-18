import Image from 'next/image';
import React from 'react';

function PlaylistCard({ imageUrl, name, artist, count }) {
  return (
    <div className='relative h-56 w-56 rounded-[20px] bg-black'>
      <Image
        src={imageUrl}
        alt='playlist'
        layout='fill'
        objectFit='cover'
        className='hover:opacity-40'
      />
      <div className='absolute bottom-5 left-5 z-20'>
        <h3 className='text-2xl font-light'>name</h3>
        <p className='text-xs font-normal'>artists</p>
      </div>
    </div>
  );
}

export default PlaylistCard;
