import React from 'react';
import Wishlist from '../Badges/wishlist';

function TracksCard({ name, imageUrl, artist }) {
  return (
    <div className='flex h-14 flex-row items-center justify-between bg-slate-700/30 px-3 rounded-2xl'>
      <div className='h-10 w-10 rounded-lg bg-black'>{/* <Image /> */}</div>
      <div className='flex w-full justify-between px-4 '>
        <div className='text-md w-1/3 truncate font-sans font-thin'>name</div>
        <div className='text-md w-1/3 truncate font-sans font-thin '>
          artist
        </div>
        <div className='text-md w-1/3 truncate font-sans font-thin '>time</div>
      </div>
      <div className='flex justify-between px-4 '>
        <div className='w-1/2'>
          <Wishlist />
        </div>
        <div className='w-1/2'>share</div>
      </div>
    </div>
  );
}

export default TracksCard;
