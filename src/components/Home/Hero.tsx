import { useTopTracks } from '@/hooks/track/useTopTracks';
import Image from 'next/image';
import React from 'react';

import lead from '../../../public/images/Frame.png';
import SmallTrack from '../ui/Cards/SmallTrack';
import Spinner from '../ui/spinner';
import YourTracks from './YourTracks';

function Hero() {
  return (
    <div className='flex h-96 space-x-6 rounded'>
      <div className='w-4/6 rounded-3xl bg-black'>
        <Image
          src={lead}
          alt='banner'
          width={1000}
          height={400}
          className='fill h-full rounded-3xl object-cover'
        />
      </div>
      <div className='w-2/6'>
        <div className='flex h-fit flex-col items-start space-y-4'>
          <h3 className='text-2xl font-bold'>Your Tracks</h3>
          <YourTracks />
        </div>
      </div>
    </div>
  );
}

export default Hero;
