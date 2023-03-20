import React from 'react';
import Wishlist from '../Badges/wishlist';
import Image from 'next/image';
import Transparent from '../Buttons/Transparent';

function TracksCard({ name, imageUrl, artist }) {
  return (
    <div className='flex h-14 flex-row items-center justify-between rounded-2xl bg-slate-700/30 px-3'>
      <div className='h-10 w-10 rounded-lg bg-black'>
        <Image
          src={imageUrl}
          alt='track'
          width={40}
          height={40}
          className='fill h-full rounded object-cover'
        />
      </div>
      <div className='flex w-full justify-between px-4 '>
        <div className='text-md w-1/3 truncate font-sans font-thin'>{name}</div>
        <div className='text-md w-1/3 truncate font-sans font-thin '>
          {artist}
        </div>
        <div className='text-md w-1/3 truncate font-sans font-thin '>
          <Wishlist />
        </div>
      </div>
      <div className='flex justify-between px-4 '>
        <div className='w-1/2'></div>
        <div className='w-1/2'>
          <Transparent />
        </div>
      </div>
    </div>
  );
}

export default TracksCard;
