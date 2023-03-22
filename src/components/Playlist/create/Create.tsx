import FilledButton from '@/components/ui/Buttons/Filled';
import useAddPlaylist from '@/hooks/playlist/useAddPlaylist';
import { useUser } from '@/hooks/user/useUser';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface initialState {
  name: string;
  id?: string;
  isPublic: string | boolean;
}

function Create() {
  const initialState = {
    name: '',
    isPublic: null,
  };

  const [playlist, setPlaylist] = useState(initialState);
  const { data: currentUser } = useUser();
  const addPlaylist = useAddPlaylist();

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePlaylistUpdate();
  };

  const changeToBoolean = ({ name, isPublic }: initialState) => {
    let obj: initialState;
    if (isPublic === 'true') {
      obj = { name: playlist.name, isPublic: true };
      return obj;
    }
    obj = { name: playlist.name, isPublic: false };
    return obj;
  };

  const handlePlaylistUpdate = async () => {
    if (!currentUser) return;
    try {
      toast.info('submitted');
      const changedPlaylist = changeToBoolean(playlist);
      // await addTrack(track);
      console.log(changedPlaylist);
      await addPlaylist(changedPlaylist);
      toast.success('Track added');
    } catch (error) {
      toast.error('Error!! track not added');
    }
  };

  const handleInputChange = (e) => {
    setPlaylist({ ...playlist, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-max w-full p-2'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4 p-4'>
        <label className='text-lg font-semibold'>Name</label>
        <input
          name='name'
          className='h-10 rounded bg-black/30 p-2 focus:border-0'
          placeholder='name'
          onChange={handleInputChange}
        />
        <div className='flex items-center justify-start space-x-4'>
          <label>
            <input
              type='radio'
              value='true'
              name='isPublic'
              className='mr-3'
              onChange={handleInputChange}
            />
            public
          </label>
          <label>
            <input
              type='radio'
              value='false'
              name='isPublic'
              className='mr-3'
              onChange={handleInputChange}
            />
            private
          </label>
        </div>
      </form>
      <div className='p-4'>
        <FilledButton text='Add' onClick={handlePlaylistUpdate} />
      </div>
    </div>
  );
}

export default Create;
