import React, { useState } from 'react';
import { useFormik } from 'formik';
import cx from 'classnames';
import { useRegister } from '@/hooks/useAuth';
import FilledButton from '../ui/Buttons/Filled';
import { useTheme } from 'next-themes';
import { View } from '../Icons';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function register() {
  const register = useRegister();
  const { theme } = useTheme();
  const [passwordShown, setPasswordShown] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      await register(values.name, values.email, values.password);
      toast.success('Register successfully!!');
    },
  });
  return (
    <div className='flex h-screen flex-row items-start justify-center'>
      <div className='mt-10 flex flex-col'>
        <h5 className='text-4xl font-medium'>Sign Up</h5>
        <form
          onSubmit={formik.handleSubmit}
          className='my-8 flex h-fit flex-col rounded'
        >
          <div className='flex w-72 flex-col'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              name='name'
              type='name'
              onChange={formik.handleChange}
              value={formik.values.name}
              className={cx('h-10 border', 'bg-black/30')}
            />
          </div>
          <div className='flex w-72 flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              className={cx('border', 'bg-black/30')}
            />
          </div>
          <div className='relative flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              className={cx('border', 'bg-black/30')}
            />
            <button
              className='absolute right-2 top-9'
              onClick={handlePasswordVisibility}
            >
              <View />
            </button>
          </div>
          <div className='mt-4 w-full'></div>
          <FilledButton text='SignUp' />
          <div
            className={cx(
              'my-4 border',
              theme === 'light' ? 'border-black' : 'border-white/75'
            )}
          ></div>
          <div className='flex flex-col space-y-2'>
            <Link
              href={'/login'}
              className={cx(
                'flex h-10 items-center justify-center rounded p-1',
                theme === 'light'
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              )}
            >
              <p className='text-md font-medium'>Login</p>
            </Link>
            <div
              className={cx(
                'flex h-10 items-center justify-center rounded p-1',
                theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
              )}
            >
              <p className='text-md font-medium'>Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
