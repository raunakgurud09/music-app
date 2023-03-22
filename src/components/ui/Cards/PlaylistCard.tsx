import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import lead from '../../Playlist/Lead-image.png';
import PlaylistImage from '../Images/PlaylistImage';

function PlaylistCard({
  id,
  imageUrl = 'https://res.cloudinary.com/dmaeznlik/image/upload/v1679235039/ecommerce-dress-shop/6416a29a70ec81a13103a90f.png',
  name,
}) {
  return (
    <Link href={`playlist/${id}`}>
      <div className='relative h-56 w-56 rounded-2xl bg-black'>
        <PlaylistImage
          src={imageUrl}
          alt='playlist'
          width='250'
          height='250'
          className='h-56 rounded-2xl object-cover transition-all ease-in hover:opacity-30'
        />
        <div className='z-90 absolute bottom-5 left-5'>
          <h3 className='text-2xl font-light'>{name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default PlaylistCard;
