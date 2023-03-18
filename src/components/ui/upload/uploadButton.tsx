import useUpdateUser from '@/hooks/user/useUpdateUser';
import { useUser } from '@/hooks/user/useUser';
import React, { useState } from 'react';
import { MAX_FILE_SIZE } from '../../../constants';
import FilledButton from '../Buttons/Filled';
import OutlinedButton from '../Buttons/Outlined';

interface InitialState {
  image: string | ArrayBuffer | null;
}

function UploadButton() {
  const { data: currentUser } = useUser();
  const updateUser = useUpdateUser();

  const initialState: InitialState = {
    image: '',
  };
  const [userInfo, changeUserInfo] = useState(initialState);

  const handleUpdateProfile = async () => {
    if (!currentUser) return;
    try {
      await updateUser(currentUser?._id, userInfo);
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
        return;
      }

      if (
        selectedFile.type !== 'image/png' &&
        selectedFile.type !== 'image/jpeg'
      ) {
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
      //   setUserInfo({ ...userInfo, image: reader.result })
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className='relative'>
      <input
        type='file'
        className='absolute h-full w-full opacity-0 '
        onChange={handleChange}
        accept='image/x-png,image/jpeg'
      />
      <OutlinedButton text='Change Photo' />
    </div>
  );
}

export default UploadButton;
