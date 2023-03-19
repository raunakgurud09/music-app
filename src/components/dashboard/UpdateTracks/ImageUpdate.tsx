import FilledButton from '@/components/ui/Buttons/Filled';
import OutlinedButton from '@/components/ui/Buttons/Outlined';
import TrackDropDown from '@/components/ui/DropDown/TrackDropDown';
import Line from '@/components/ui/Line';
import { MAX_FILE_SIZE } from '@/constants/index';
import useImageAddTrack from '@/hooks/track/useImageAddTrack';
import useMyTrack from '@/hooks/track/useMyTracks';
import { useUser } from '@/hooks/user/useUser';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface InitialState {
  id: string;
  image: string | ArrayBuffer | null;
}

function ImageUpdate() {
  const { data: myTracks } = useMyTrack();
  const { data: currentUser } = useUser();
  const [idF, setId] = useState('');
  const [name, setName] = useState('select your track');
  const addImage = useImageAddTrack();

  const initialState: InitialState = {
    id: '',
    image: '',
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
      toast.info('Submitted');
      await addImage(track);
      toast.success('Image uploaded');
    } catch (error) {
      toast.error('Error in image upload');
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

      if (
        selectedFile.type !== 'image/png' &&
        selectedFile.type !== 'image/jpeg'
      ) {
        alert('message format not correct');
        // setToast('error', 'Invalid file type')
        return;
      }
      imageChange(selectedFile);
    } else {
      return;
    }
  };

  const imageChange = (file: Blob) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setTrack({ ...track, image: reader.result });
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
            accept='image/x-png,image/jpeg'
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

export default ImageUpdate;
