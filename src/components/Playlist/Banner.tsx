import Image from 'next/image';
import React from 'react';
import {
  DashboardLogo,
  HomeIcon,
  Play,
  PlaylistIcon,
  ThreeDots,
} from '../Icons';
import EditIcon from '../Icons/Edit';
import Transparent from '../ui/Buttons/Transparent';
import PlaylistImage from '../ui/Images/PlaylistImage';

import lead from './Lead-image.png';

function Banner({
  imageUrl = 'https://res.cloudinary.com/dmaeznlik/image/upload/v1679235039/ecommerce-dress-shop/6416a29a70ec81a13103a90f.png',
  name = "Playlist's name",
  tracksNum = '3',
}) {
  return (
    <div className='flex h-full '>
      <div className='h-80 w-1/4 rounded-full'>
        <PlaylistImage
          src={imageUrl}
          alt={name}
          width='300'
          height='300'
          className='fill h-80 rounded object-cover'
        />
      </div>
      <div className='ml-8 flex w-3/4 flex-col justify-end space-y-4'>
        <div className='flex w-[70%] flex-col space-y-2'>
          <h3 className='font-mono text-4xl font-bold'>{name}</h3>
          <p className='text-md font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            pariatur voluptatem totam incidunt, nihil cupiditate non quisquam
            tenetur ullam necessitatibus debitis nobis asperiores repellat
            minima quis, possimus neque consequatur! Unde!
          </p>
          <div className='flex space-x-3'>
            <p>{tracksNum} songs</p>
            <p>time</p>
          </div>
        </div>
        <div className='flex space-x-3 text-yellow-600'>
          <Transparent icon={<Play />} text='Play all' />
          <div className='flex h-12 w-12 items-center justify-center  rounded-[32px] bg-white/[0.07] p-[10px] backdrop-blur hover:bg-white/[0.1] '>
            <div className='h-4 w-4'>
              <EditIcon />
            </div>
          </div>
          <div className='flex h-12 w-12 items-center justify-center  rounded-[32px] bg-white/[0.07] p-[10px] backdrop-blur hover:bg-white/[0.1] '>
            <div className='h-4 w-4'>
              <ThreeDots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
