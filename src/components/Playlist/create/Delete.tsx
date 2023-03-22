import FilledButton from '@/components/ui/Buttons/Filled';
import PlaylistDropDown from '@/components/ui/DropDown/PlaylistDropDown';
import TrackDropDown from '@/components/ui/DropDown/TrackDropDown';
import useDelPlaylist from '@/hooks/playlist/useDelPlaylist';
import { usePlaylist } from '@/hooks/playlist/usePlaylist';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import playlist from 'src/pages/playlist/[id]';

function Delete() {
  const { data } = usePlaylist();
  const [idF, setId] = useState('');
  const deletePlaylist = useDelPlaylist();
  const [name, setName] = useState('select your track');

  const handlePlaylistUpdate = async () => {
    try {
      if (idF === undefined || idF == '') {
        return;
      }
      toast.info('submitted');
      // await deleteTrack(idF);
      await deletePlaylist(idF);
      toast.success('Successfully deleted the Playlist');
    } catch (error) {
      toast.error('Error track not deleted');
    }
  };
  return (
    <div className='p-4'>
      <div className='w-60 rounded bg-stone-800 p-3'>
        <PlaylistDropDown data={data} setValue={setId} setName={setName}>
          {name}
        </PlaylistDropDown>
      </div>
      <div className='py-4'>
        <FilledButton
          text='Delete'
          className={'bg-red-600'}
          onClick={handlePlaylistUpdate}
        />
      </div>
    </div>
  );
}

export default Delete;
