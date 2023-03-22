import useAddTrackPlaylist from '@/hooks/playlist/useAddTrackPlaylist';
import { usePlaylist } from '@/hooks/playlist/usePlaylist';
import useAddTrack from '@/hooks/track/useAddTrack';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import FilledButton from '../Buttons/Filled';
import PlaylistDropDown from '../DropDown/PlaylistDropDown';

function AddToCartModal({ trackId, show, onClose }) {
  const initialState = {
    id: '',
    trackId,
  };

  const { data } = usePlaylist();
  const [idF, setId] = useState('');
  const [name, setName] = useState('select your playlist');
  const [info, setInfo] = useState(initialState);
  const addToPlaylist = useAddTrackPlaylist();

  const handlePlaylistUpdate = async () => {
    setInfo({ ...info, id: idF });
    try {
      if (info.id === undefined || info.id == '') {
        toast.error('select playlist');
        return;
      }
      toast.info('submitted');
      await addToPlaylist(info);
      console.log(info);
      toast.success('Added to playlist');
    } catch (error) {
      toast.error('Error playlist not deleted');
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className='fixed left-0 right-0 bottom-0 top-0 z-10 flex items-center justify-center bg-black/50'>
      <div className='h-72 w-[700px] rounded-2xl bg-stone-900'>
        <div
          onClick={onClose}
          className='rounded-tr-2xl rounded-tl-2xl bg-slate-800/40 p-2'
        >
          X
        </div>
        <div className='m-4'>
          <div>{trackId}</div>
          <div className='mt-8 space-y-4'>
            <div className='w-60 rounded bg-stone-800 p-3'>
              <PlaylistDropDown data={data} setValue={setId} setName={setName}>
                {name}
              </PlaylistDropDown>
            </div>
            <div>
              <FilledButton
                text='Update'
                className={'bg-red-600'}
                onClick={handlePlaylistUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;
