import React, { useContext } from 'react';
import Wishlist from '../Badges/wishlist';
import Image from 'next/image';
import Transparent from '../Buttons/Transparent';
import { PlayerContext } from 'src/context/playerContext';
import TrackImage from '../Images/TrackImage';

function TracksCard({ audioUrl, name, imageUrl, artist }) {
  const { setPlayer }: any = useContext(PlayerContext);

  return (
    <div className='flex h-14 flex-row items-center justify-between rounded-2xl bg-slate-700/30 px-3'>
      <div className='h-10 w-10 rounded-lg bg-black'>
        <TrackImage
          src={imageUrl}
          alt='track'
          width={40}
          height={40}
          className='fill h-10 rounded object-cover'
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
        <div className='w-1/2'>x</div>
        <div
          className='w-1/2'
          onClick={() =>
            setPlayer({ audioUrl: audioUrl, artist, name, imageUrl })
          }
        >
          play
        </div>
      </div>
    </div>
  );
}

export default TracksCard;
