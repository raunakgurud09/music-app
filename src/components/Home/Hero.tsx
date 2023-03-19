import Image from 'next/image';
import React from 'react';

import lead from '../../../public/images/Frame.png';
import SmallTrack from '../ui/Cards/SmallTrack';

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
          <h3 className='text-2xl font-bold'>Top tracks.</h3>
          <div className='flex w-full flex-col  justify-between p-1 space-y-3'>
            <SmallTrack imageUrl={lead}/>
            <SmallTrack imageUrl={lead}/>
            <SmallTrack imageUrl={lead}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
