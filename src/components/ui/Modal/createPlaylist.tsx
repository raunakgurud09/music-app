import Index from '@/components/Playlist/create/Index';
import withAuth from '@/components/withAuth';
import React, { useState } from 'react';

const options = ['create', 'update', 'delete'];

function createPlaylist({ show, onClose }) {
  const [option, setOption] = useState(0);

  if (!show) {
    return null;
  }

  return (
    <div className='fixed left-0 right-0 bottom-0 top-0 z-10 flex items-center justify-center bg-black/50'>
      <div className='h-[500px] w-[700px] rounded-xl bg-stone-900'>
        <div onClick={onClose} className='bg-slate-800/40'>
          X
        </div>
        <div>
          <div className='flex space-x-5 p-4'>
            {options.map((option, index) => (
              <>
                <div
                  onClick={() => setOption(index)}
                  className='rounded-full bg-slate-700/30 p-2 px-6'
                >
                  {option}
                </div>
              </>
            ))}
          </div>
          <Index value={option} />
        </div>
      </div>
    </div>
  );
}

export default createPlaylist;
