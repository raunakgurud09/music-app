import FilledButton from '@/components/ui/Buttons/Filled';
import OutlinedButton from '@/components/ui/Buttons/Outlined';
import TrackDropDown from '@/components/ui/DropDown/TrackDropDown';
import { MAX_FILE_SIZE } from '@/constants/index';
import useAudioAddTrack from '@/hooks/track/useAudioAddTrack';
import useMyTrack from '@/hooks/track/useMyTracks';
import { useUser } from '@/hooks/user/useUser';
import React, { useState } from 'react';

interface InitialState {
  id: string;
  audio: string | ArrayBuffer | null;
}

function AudioUpdate() {
  const { data: myTracks } = useMyTrack();
  const { data: currentUser } = useUser();
  const [idF, setId] = useState('');
  const [name, setName] = useState('select your track');
  const addAudio = useAudioAddTrack();

  const initialState: InitialState = {
    id: '',
    audio: '',
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
      console.log(track);
      await addAudio(track);
    } catch (error) {
      alert('not updated');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      console.log(selectedFile, 'clicked');

      if (!selectedFile) return;

      if (selectedFile.size > MAX_FILE_SIZE) {
        // setToast('error', 'Photo must be less than 1mb')
        alert('message');
        return;
      }

      if (selectedFile.type !== 'audio/mpeg') {
        alert('File formate is incorrect');
        // setToast('error', 'Invalid file type')
        return;
      }
      audioChange(selectedFile);
    } else {
      return;
    }
  };

  const audioChange = (file: Blob) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setTrack({ ...track, audio: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className='w-60 rounded bg-stone-800 p-3'>
        <TrackDropDown data={myTracks} setValue={setId} setName={setName}>
          {name}
        </TrackDropDown>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4 p-4'>
        <div className='relative'>
          <input
            type='file'
            className='absolute h-full w-auto opacity-0 '
            onChange={handleChange}
            accept='audio/mp3'
          />
          <OutlinedButton text='Change Photo' />
        </div>
      </form>
      <div className='p-4'>
        <FilledButton text='Update image' onClick={handleTrackUpdate} />
      </div>
    </div>
  );
}

export default AudioUpdate;
