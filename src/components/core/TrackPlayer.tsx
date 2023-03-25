import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import lead from '../Playlist/Lead-image.png';
// import AudioPlayer from 'react-h5-audio-player';

import {
  LoopIcon,
  NextIcon,
  Pause,
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
  const [play, setPlay] = useState(false);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioEle: any = useRef();
  const progressBarRef: any = useRef();

  const togglePlay = () => {
    setPlay(!play);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (play) {
      setPlay(true);
      handlePlay();
    } else {
      handlePause();
    }
  }, [play, setPlay]);

  const handlePlay = () => {
    if (!audioEle.current) return;
    audioEle.current.play();
  };

  const handlePause = () => {
    if (!audioEle.current) return;
    audioEle.current.pause();
  };

  const handleClick = () => {
    console.log('click');
  };

  const handleLoadMetaData = () => {
    const seconds = audioEle.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const handleProgressChange = () => {
    audioEle.current.currentTime = progressBarRef.current.value;
  };

  console.log(progressBarRef.current);

  return (
    <div className='z-70 sticky bottom-0 left-0 right-0 flex h-32  w-screen items-center justify-center bg-slate-500/50 backdrop-blur-sm	'>
      <div className='flex w-full items-end justify-between space-x-6 px-10'>
        <div className='flex w-64'>
          <div className='w-1/4'>
            <TrackImage
              src={player.imageUrl}
              alt='track'
              width={48}
              height={48}
              className='fill h-12 rounded object-cover'
            />
          </div>
          <div className=' flex w-3/4 flex-col items-start justify-center'>
            <h3 className='w-full truncate font-mono text-sm font-bold'>
              {player.name}
            </h3>
            <p className='w-full truncate font-mono text-xs font-bold opacity-40'>
              {player.artist}
            </p>
          </div>
        </div>
        <div>
          <audio
            src={player.audioUrl}
            onLoadedMetadata={handleLoadMetaData}
            autoPlay
            ref={audioEle}
          ></audio>
          <div className='mb-6 flex items-center justify-center space-x-4'>
            <AudioBtn icon={<ShuffleIcon />} fn={handleClick} />
            <AudioBtn icon={<PrevIcon />} fn={handleClick} />
            {play ? (
              <AudioBtn icon={<Pause />} fn={togglePlay} />
            ) : (
              <AudioBtn icon={<Play />} fn={togglePlay} />
            )}
            <AudioBtn icon={<NextIcon />} fn={handleClick} />
            <AudioBtn icon={<LoopIcon />} fn={handleClick} />
          </div>
          <div className='flex items-center space-x-1'>
            {/* <span className='text-sm font-thin'>{formatTime(timeProgress)}</span> */}
            <div className='flex h-1 w-[780px] cursor-pointer rounded bg-white'>
              <input
                type='range'
                ref={progressBarRef}
                defaultValue='10'
                onChange={handleProgressChange}
                className='h-1 w-full cursor-pointer  bg-yellow-300'
              />
            </div>
            <span className='text-sm font-thin'>{formatTime(duration)}</span>
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

const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};
