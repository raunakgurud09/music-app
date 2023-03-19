import FilledButton from '@/components/ui/Buttons/Filled';
import TrackDropDown from '@/components/ui/DropDown/TrackDropDown';
import Line from '@/components/ui/Line';
import useMetaAddTrack from '@/hooks/track/useMetaAddTrack';
import useMyTrack from '@/hooks/track/useMyTracks';
import { useUser } from '@/hooks/user/useUser';
import React, { useState } from 'react';

interface InitialState {
  id: string;
  name: string;
  lyrics: string;
  artist: string;
}

function Meta() {
  const { data: myTracks } = useMyTrack();
  const { data: currentUser } = useUser();
  const [idF, setId] = useState('');
  const [name, setName] = useState('select your track');
  const addMetaTrack = useMetaAddTrack();

  const initialState: InitialState = {
    id: '',
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
    setTrack({ ...track, id: idF });
    try {
      if (track.id === undefined || track.id == '') {
        return;
      }
      await addMetaTrack(track);
    } catch (error) {
      alert('not updated');
    }
  };

  const handleInputChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  return (
    <div className='m-4 rounded'>
      <div className='w-60 rounded bg-stone-800 p-3'>
        <TrackDropDown data={myTracks} setValue={setId} setName={setName}>
          {name}
        </TrackDropDown>
      </div>
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
    </div>
  );
}

export default Meta;
