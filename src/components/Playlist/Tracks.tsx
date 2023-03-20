import React from 'react';
import TracksCard from '../ui/Cards/TracksCard';

function Tracks({ tracks }) {
  if (tracks.length <= 0) {
    return <div>not tracks</div>;
  }

  return (
    <div className='h-fit w-full space-y-4'>
      {tracks &&
        tracks.map((track) => (
          <TracksCard
            key={track._id}
            name={track.name}
            artist={track.artist}
            imageUrl={track.imageUrl}
          />
        ))}
    </div>
  );
}

export default Tracks;

//   <div key={track._id} className="bg-slate-600 flex flex-col ">
//     <div>somthing</div>
//     <div>otehr</div>
//     <div>now</div>
//   </div>
