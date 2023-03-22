import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import lead from '../Playlist/Lead-image.png';
// import AudioPlayer from 'react-h5-audio-player';

import {
  LoopIcon,
  NextIcon,
  Play,
  PlayIcon,
  PrevIcon,
  ShuffleIcon,
  VolumeIcon,
} from '../Icons';
import { PlayerContext } from 'src/context/playerContext';
import TrackImage from '../ui/Images/TrackImage';

function TrackPlayer() {
  const { player }: any = useContext(PlayerContext);

  const audioEle: any = useRef();

  const handlePlay = () => {
    if (!audioEle.current) return;
    audioEle.current.play();
  };

  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className='z-70 sticky bottom-0 left-0 right-0 flex h-32  w-screen items-center justify-center bg-slate-500/50 backdrop-blur-sm	'>
      <div className='flex w-full items-end justify-between space-x-6 px-10'>
        <div className='flex w-32'>
          <div>
            <TrackImage
              src={player.imageUrl}
              alt='track'
              width={48}
              height={48}
              className='fill h-12 rounded object-cover'
            />
          </div>
          <div className='ml-3 flex flex-col items-start justify-center'>
            <h3 className='w-full truncate font-mono text-sm font-bold'>
              {player.name}
            </h3>
            <p className='w-full truncate font-mono text-xs font-bold opacity-40'>
              {player.artist}
            </p>
          </div>
        </div>
        <div>
          <audio src={player.audioUrl} controls ref={audioEle}></audio>
          {/* <AudioPlayer
            src='https://res.cloudinary.com/dmaeznlik/video/upload/v1679085888/audio/6414c596b30e2fca36123639.mp3'
            onPlay={() => console.log("is playing")}
            autoPlay={true}
            showSkipControls={true}
            // onClickNext={nextTrack}
            // onClickPrevious={previousTrack}
          /> */}
          <div className='mb-6 flex items-center justify-center space-x-4'>
            <AudioBtn icon={<ShuffleIcon />} fn={handleClick} />
            <AudioBtn icon={<PrevIcon />} fn={handleClick} />
            <AudioBtn icon={<Play />} fn={handlePlay} />
            <AudioBtn icon={<NextIcon />} fn={handleClick} />
            <AudioBtn icon={<LoopIcon />} fn={handleClick} />
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

function AudioBtn({ icon = <NextIcon />, fn }) {
  return (
    <button className='h-4 w-4 rounded-full' onClick={fn}>
      {icon}
    </button>
  );
}

export default TrackPlayer;
