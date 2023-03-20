import React from 'react';

function createPlaylist({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className=' fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-black/50'>
      <div className='w-[500px] bg-white'>
        <div onClick={onClose}>X</div>
      </div>
    </div>
  );
}

export default createPlaylist;
