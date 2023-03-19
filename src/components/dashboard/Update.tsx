import Line from '@/components/ui/Line';
import React, { useState } from 'react';
import Index from './UpdateTracks/Index';

function Update() {
  const [option, setOption] = useState(0);

  return (
    <div className='m-4 rounded'>
      <h4 className='p-4 text-4xl font-bold'>Update track</h4>
      <Line />
      <div className=' space-x-4'>
        <button
          onClick={() => setOption(0)}
          className='rounded-3xl bg-stone-400/30 px-4 py-2 opacity-20 focus:opacity-100'
        >
          META
        </button>
        <button
          onClick={() => setOption(1)}
          className='rounded-3xl bg-stone-400/30 px-4 py-2 opacity-20 focus:opacity-100'
        >
          IMAGE
        </button>
        <button
          onClick={() => setOption(2)}
          className='rounded-3xl bg-stone-400/30 px-4 py-2 opacity-20 focus:opacity-100'
        >
          AUDIO
        </button>
      </div>
      <Line />
      <div className='h-auto w-full rounded bg-slate-700/20 md:w-3/4'>
        <Index value={option} />
      </div>
    </div>
  );
}

export default Update;
