import Image from 'next/image';
import React from 'react';
import { DashboardLogo, HomeIcon, PlaylistIcon } from '../Icons';
import Transparent from '../ui/Buttons/Transparent';

import lead from './Lead-image.png';

function Banner() {
  const val = 3;
  return (
    <div className='flex h-full '>
      <div className='w-1/4'>
        <Image src={lead} alt='Playlist' width='288' height='288' />
      </div>
      
      <div className='ml-8 flex w-3/4 flex-col justify-end space-y-4'>
        <div className='flex w-[70%] flex-col space-y-2'>
          <h3 className='font-mono text-4xl font-bold'>Playlist name</h3>
          <p className='text-md font-thin'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            pariatur voluptatem totam incidunt, nihil cupiditate non quisquam
            tenetur ullam necessitatibus debitis nobis asperiores repellat
            minima quis, possimus neque consequatur! Unde!
          </p>
          <div className='flex space-x-3'>
            <p>{val} songs</p>
            <p>time</p>
          </div>
        </div>
        <div className='flex space-x-3 text-yellow-600'>
          <Transparent icon={<DashboardLogo />} text='Play all' />
          <Transparent icon={<HomeIcon />} text='something' />
          <Transparent icon={<HomeIcon />} />
          <Transparent icon={<HomeIcon />} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
