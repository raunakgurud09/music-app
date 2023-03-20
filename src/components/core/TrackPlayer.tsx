import React from 'react';
import Image from 'next/image';
import lead from '../Playlist/Lead-image.png';
import {
  LoopIcon,
  NextIcon,
  PlayIcon,
  PrevIcon,
  ShuffleIcon,
  VolumeIcon,
} from '../Icons';

function TrackPlayer() {
  return (
    <div className='sticky bottom-0 left-0 right-0 z-20 flex h-32  w-screen items-center justify-center bg-slate-500/50 backdrop-blur-sm	'>
      <div className='flex w-full items-end justify-between space-x-6 px-10'>
        <div className='flex '>
          <div>
            <Image
              src={lead}
              alt='track'
              width={48}
              height={48}
              className='fill rounded object-cover'
            />
          </div>
          <div className='ml-3 flex flex-col items-start justify-center'>
            <h3 className='font-mono text-sm font-bold'>name</h3>
            <p className='font-mono  text-xs font-bold opacity-40'>artist</p>
          </div>
        </div>
        <div>
          {/* <audio src={"https://res.cloudinary.com/dmaeznlik/video/upload/v1679085888/audio/6414c596b30e2fca36123639.mp3"} controls></audio> */}
          <div className='mb-6 flex items-center justify-center space-x-4'>
            <AudioBtn icon={<ShuffleIcon />} />
            <AudioBtn icon={<PrevIcon />} />
            <AudioBtn icon={<PlayIcon />} />
            <AudioBtn icon={<NextIcon />} />
            <AudioBtn icon={<LoopIcon />} />
          </div>

          <div className='h-1 w-[780px] cursor-pointer rounded bg-white'>
            <div className='h-1 w-[50%] cursor-pointer rounded bg-yellow-300'></div>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <div className='h-4 w-4 rounded-full'>
            <VolumeIcon />
          </div>
          <div className='h-1 w-32 cursor-pointer rounded bg-white'>
            <div className='h-1 w-[50%] cursor-pointer rounded bg-yellow-300'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AudioBtn({ icon = <NextIcon /> }) {
  return <button className='h-4 w-4 rounded-full'>{icon}</button>;
}

export default TrackPlayer;
