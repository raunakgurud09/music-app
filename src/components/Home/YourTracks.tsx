import useMyTrack from '@/hooks/track/useMyTracks';
import { useTopTracks } from '@/hooks/track/useTopTracks';
import React from 'react';
import SmallTrack from '../ui/Cards/SmallTrack';
import Spinner from '../ui/spinner/Spinner';

function YourTracks() {
  const { data: myTracks } = useMyTrack();
  console.log(myTracks, 'my tracks');

  return (
    <div className='flex h-[340px] w-full flex-col  space-y-3 overflow-y-scroll p-1'>
      {myTracks &&
        myTracks.tracks.map((track) => (
          <SmallTrack
            audio={track.audioUrl}
            key={track._id}
            imageUrl={track.imageUrl}
            name={track.name}
            artist={track.artist}
          />
        ))}
    </div>
  );
}

export default YourTracks;
