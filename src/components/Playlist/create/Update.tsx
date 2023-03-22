import FilledButton from '@/components/ui/Buttons/Filled';
import OutlinedButton from '@/components/ui/Buttons/Outlined';
import PlaylistDropDown from '@/components/ui/DropDown/PlaylistDropDown';
import { MAX_FILE_SIZE } from '@/constants/index';
import { usePlaylist } from '@/hooks/playlist/usePlaylist';
import useUpdatePlaylist from '@/hooks/playlist/useUpdatePlaylist';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface InitialState {
  id: string;
  image: string | ArrayBuffer | null;
}

function Update() {
  const { data } = usePlaylist();
  const [idF, setId] = useState('');
  const [name, setName] = useState('select your playlist');
  const updatePlaylist = useUpdatePlaylist();

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePlaylistUpdate();
  };

  const initialState: InitialState = {
    id: '',
    image: '',
  };

  const [playlist, setPlaylist] = useState(initialState);

  const handlePlaylistUpdate = async () => {
    setPlaylist({ ...playlist, id: idF });
    try {
      if (playlist.id === undefined || playlist.id === '') {
        return;
      }
      if (playlist.image === '') {
        toast.error('Image is required');
        return;
      }
      toast.info('submitted');
      await updatePlaylist(playlist);
      console.log(playlist);
      toast.success('Successfully deleted the Playlist');
    } catch (error) {
      toast.error('Error playlist not deleted');
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
      setPlaylist({ ...playlist, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='p-4'>
      <div className='w-60 rounded bg-stone-800 p-3'>
        <PlaylistDropDown data={data} setValue={setId} setName={setName}>
          {name}
        </PlaylistDropDown>
      </div>
      <div>
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
      </div>
      <div className='py-4'>
        <FilledButton
          text='Update'
          className={'bg-red-600'}
          onClick={handlePlaylistUpdate}
        />
      </div>
    </div>
  );
}

export default Update;
