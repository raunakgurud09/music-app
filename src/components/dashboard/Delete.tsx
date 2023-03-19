import FilledButton from '@/components/ui/Buttons/Filled';
import TrackDropDown from '@/components/ui/DropDown/TrackDropDown';
import Line from '@/components/ui/Line';
import useDelTrack from '@/hooks/track/useDelTrack';
import useMyTrack from '@/hooks/track/useMyTracks';
import { useUser } from '@/hooks/user/useUser';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Delete() {
  const { data: myTracks } = useMyTrack();
  const { data: currentUser } = useUser();
  const [idF, setId] = useState('');
  const deleteTrack = useDelTrack();
  const [name, setName] = useState('select your track');

  const handleTrackUpdate = async () => {
    try {
      if (idF === undefined || idF == '') {
        return;
      }
      toast.info('submitted');
      await deleteTrack(idF);
      toast.success('Successfully deleted the track');
    } catch (error) {
      toast.error('Error track not deleted');
    }
  };

  return (
    <div className='m-4  rounded'>
      <h4 className='p-4 text-4xl font-bold'>Delete Track</h4>
      <Line />
      <div className='w-60 rounded bg-stone-800 p-3'>
        <TrackDropDown data={myTracks} setValue={setId} setName={setName}>
          {name}
        </TrackDropDown>
      </div>
      <div className='py-4'>
        <FilledButton
          text='Delete'
          className={'bg-red-600'}
          onClick={handleTrackUpdate}
        />
      </div>
      <Line />
    </div>
  );
}

export default Delete;
