import { Avatar } from '@/components/ui/Avatar/Avatar';
import FilledButton from '@/components/ui/Buttons/Filled';
import OutlinedButton from '@/components/ui/Buttons/Outlined';
import Image from '@/components/ui/Image';
import UploadButton from '@/components/ui/upload/uploadButton';
import withAuth from '@/components/withAuth';
import useUpdateUser from '@/hooks/user/useUpdateUser';
import { useUser } from '@/hooks/user/useUser';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { MAX_FILE_SIZE } from '../constants';
import Line from '@/components/ui/Line';

interface InitialState {
  image: string | ArrayBuffer | null;
}
const profile = () => {
  const { data: currentUser } = useUser();

  const updateUser = useUpdateUser();

  const initialState: InitialState = {
    image: '',
  };
  const [userInfo, setUserInfo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateProfile();
  };

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
        alert('message');
        return;
      }

      if (
        selectedFile.type !== 'image/png' &&
        selectedFile.type !== 'image/jpeg'
      ) {
        alert('message in');
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
      setUserInfo({ ...userInfo, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='container m-auto flex h-auto flex-col'>
      {currentUser && (
        <>
          <h3 className='my-2 text-3xl font-bold'>Profile</h3>
          <div className='flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/4'>
              <Image
                src={currentUser.image}
                alt={currentUser.name}
                width='160'
                height='160'
                className='h-48 w-48 rounded-full object-cover'
              />
            </div>
            <div className='w-full lg:w-3/4'>
              <h4 className='my-2 text-2xl font-semibold'>
                Hello {currentUser.name.toUpperCase()} 👋. Update profile here
              </h4>
              <Line />
              <div className='my-6 space-y-4'>
                <h6 className='text-xl font-medium'>Change avatar image</h6>
                <form onSubmit={handleSubmit}>
                  <div className='relative'>
                    <input
                      type='file'
                      className='absolute h-full w-full opacity-0 '
                      onChange={handleChange}
                      accept='image/x-png,image/jpeg'
                    />
                    <OutlinedButton text='Change Photo' />
                  </div>
                </form>
                <FilledButton text='submit' onClick={handleUpdateProfile} />
              </div>
              <Line />
              <div className='my-6 space-y-4'>
                <h6 className='text-xl font-medium'>Verify email</h6>
                <p>Working ⚒️.coming soon...</p>
              </div>{' '}
              <Line />
              <div className='my-6 space-y-4'>
                <h6 className='text-xl font-medium'>Update password</h6>
                <p>Working ⚒️.coming soon...</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default withAuth(profile);
