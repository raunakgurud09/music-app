import React from 'react';
import Image from 'next/image';

function SmallTrack({ name = '', imageUrl, artist = '' }) {
  return (
    <div className='flex h-24 w-96 items-center justify-between rounded-3xl px-4 bg-stone-900'>
      <div className='h-16 w-16 rounded-xl '>
        <Image
          src={imageUrl}
          alt='track'
          width={64}
          height={64}
          className='fill h-full rounded-xl object-cover'
        />
      </div>
      <div className='flex-1 px-4'>
        <div className='flex flex-col'>
          <h4 className='text-base'>name</h4>
          <p className='text-xs opacity-80'>artist</p>
        </div>
      </div>
      <div className=''>play</div>
    </div>
  );
}

export default SmallTrack;
