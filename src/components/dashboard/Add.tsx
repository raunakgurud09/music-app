import { MAX_FILE_SIZE } from '@/constants/index';
import useAddTrack from '@/hooks/track/useAddTrack';
import { useUser } from '@/hooks/user/useUser';
import React, { useState } from 'react';
import FilledButton from '../ui/Buttons/Filled';
import Line from '../ui/Line';

interface InitialState {
  name: string;
  lyrics: string;
  artist: string;
}

function Add() {
  const { data: currentUser } = useUser();
  const addTrack = useAddTrack()
  const initialState: InitialState = {
    name: '',
    lyrics: '',
    artist: '',
  };

  const [track, setTrack] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrackUpdate();
  };

  const handleTrackUpdate = async () => {
    if (!currentUser) return;
    try {
      await addTrack(track);
      console.log(track);
    } catch (error) {
      alert('not updated');
    }
  };

  const handleInputChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  return (
    <div className='m-4  rounded'>
      <h4 className='p-4 text-4xl font-bold'>Add Track</h4>
      <Line />
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4 p-4'>
        <label className='text-lg font-semibold'>Name</label>
        <input
          name='name'
          className='h-10 rounded bg-black/30 p-2 focus:border-0'
          placeholder='name'
          onChange={handleInputChange}
        />
        <label className='text-lg font-semibold'>Artist</label>
        <input
          name='artist'
          className='h-10 rounded bg-black/30 p-2 focus:border-0'
          placeholder="artist's names"
          onChange={handleInputChange}
        />
        <label className='text-lg font-semibold'>Lyrics</label>
        <textarea
          name='lyrics'
          className='h-20 break-all rounded border-none bg-black/30 p-2 focus:border-0	'
          placeholder='Lyrics of the track'
          onChange={handleInputChange}
        />
      </form>
      <div className='p-4'>
        <FilledButton text='Add' onClick={handleTrackUpdate} />
      </div>
      <Line />
    </div>
  );
}

export default Add;
