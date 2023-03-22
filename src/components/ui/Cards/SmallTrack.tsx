import React, { useContext } from 'react';
import Image from 'next/image';
import { PlayerContext } from 'src/context/playerContext';
import TrackImage from '../Images/TrackImage';
import Play from '@/components/Icons/Play';

function SmallTrack({ audio, name = '', imageUrl, artist = '' }) {
  const { player, setPlayer }: any = useContext(PlayerContext);

  return (
    <div className='flex h-24 w-full items-center justify-between rounded-3xl bg-stone-900 py-2 px-4'>
      <div className='h-16 w-16 rounded-xl '>
        <TrackImage
          src={imageUrl}
          alt='track'
          width={64}
          height={64}
          className='fill h-16 rounded-xl object-cover'
        />
      </div>
      <div className='flex-1 px-4'>
        <div className='flex flex-col'>
          <h4 className='text-base'>{name}</h4>
          <p className='text-xs opacity-80'>{artist}</p>
        </div>
      </div>
      <div
        onClick={async () => {
          setPlayer({
            artist,
            name,
            audioUrl: audio,
            imageUrl: imageUrl,
          });
        }}
        className='w-8'
      >
        <Play />
      </div>
    </div>
  );
}

export default SmallTrack;
