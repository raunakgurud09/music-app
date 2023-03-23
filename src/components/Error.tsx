import React from 'react';
import { GitHubLogo } from './Icons';

function Error({ message }) {
  return (
    <div className='flex h-[calc(100vh-50%)] items-start justify-center'>
      <div className='flex flex-row p-4 md:p-20'>
        <div className='mx-20 flex w-auto flex-col items-center justify-center'>
          <h3 className='text-6xl font-semibold md:text-9xl'>Oops!!!</h3>
          <p className='mt-10 text-center text-lg font-medium md:text-3xl'>
            {message}
          </p>
          <p className='mt-4 flex flex-row items-center rounded bg-gradient-to-r from-cyan-500 to-blue-500 p-2 ease-in hover:bg-gradient-to-r hover:from-indigo-500  hover:to-pink-500'>
            <a
              href='https://github.com/raunakgurud09/music-app'
              target='_blank'
              className='text-small'
            >
              view source code
            </a>
            <div className='ml-2 w-4'>
              <GitHubLogo />
            </div>
          </p>
        </div>
        <div className='w-auto'></div>
      </div>
    </div>
  );
}

export default Error;
