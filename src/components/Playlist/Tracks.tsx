import React from 'react';
import TracksCard from '../ui/Cards/TracksCard';

const tracks = [
  {
    _id: '659832124578',
    name: 'This is name',
    imageUrl: 'https://something.com/music-app/remn/image/986532124578/',
    audioUrl: 'https://something.com/music-app/remn/audio/986532124578/',
    artist: 'artist name ',
  },
  {
    _id: '659832124578',
    name: 'This is name',
    imageUrl: 'https://something.com/music-app/remn/image/986532124578/',
    audioUrl: 'https://something.com/music-app/remn/audio/986532124578/',
    artist: 'artist name ',
  },
  {
    _id: '659832124578',
    name: 'This is name',
    imageUrl: 'https://something.com/music-app/remn/image/986532124578/',
    audioUrl: 'https://something.com/music-app/remn/audio/986532124578/',
    artist: 'artist name ',
  },
  {
    _id: '659832124578',
    name: 'This is name',
    imageUrl: 'https://something.com/music-app/remn/image/986532124578/',
    audioUrl: 'https://something.com/music-app/remn/audio/986532124578/',
    artist: 'artist name ',
  },
];

function Tracks() {
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
