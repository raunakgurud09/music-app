import React, { useContext, useState } from 'react';
import Wishlist from '../Badges/wishlist';
import { PlayerContext } from 'src/context/playerContext';
import TrackImage from '../Images/TrackImage';
import Play from '@/components/Icons/Play';
import { ThreeDots } from '@/components/Icons';
import AddToCartModal from '../Modal/AddToCartModal';

function TracksCard({ id, audioUrl, name, imageUrl, artist }) {
  const { setPlayer }: any = useContext(PlayerContext);
  const [show, setShow] = useState(false);

  const handleMoreOptions = () => {
    console.log('more options');
  };

  return (
    <div className='flex h-14 flex-row items-center justify-between rounded-2xl bg-slate-700/30 px-3'>
      <div className='h-10 w-10 rounded-lg bg-black'>
        <TrackImage
          src={imageUrl}
          alt='track'
          width={40}
          height={40}
          className='fill h-10 w-10 rounded object-cover'
        />
      </div>
      <div className='flex max-w-[1500px] justify-between px-4 '>
        <div className='text-md w-80 truncate font-sans font-thin'>{name}</div>
        <div className='text-md w-80 truncate font-sans font-thin '>
          {artist}
        </div>
        <div className='text-md w-80 truncate font-sans font-thin '>
          <Wishlist />
        </div>
      </div>
      <div className='flex items-center justify-between space-x-4 px-2 '>
        <div
          className='h-4 w-4 flex-grow justify-between'
          onClick={handleMoreOptions}
        >
          <div
            className='h-4 w-4 cursor-pointer rounded-full'
            onClick={() => setShow(true)}
          >
            <ThreeDots />
          </div>
          <AddToCartModal
            show={show}
            onClose={() => setShow(false)}
            trackId={id}
          />
        </div>
        <div
          className='w-8'
          onClick={() =>
            setPlayer({ audioUrl: audioUrl, artist, name, imageUrl })
          }
        >
          <Play />
        </div>
      </div>
    </div>
  );
}

export default TracksCard;
