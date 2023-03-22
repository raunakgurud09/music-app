import NextImage from 'next/image';
import defaultTrackImage from './track-image.jpg';

function TrackImage({ src, alt, ...rest }) {
  return (
    <>
      <div className='opacity-90'>
        {src === '' ? (
          <NextImage alt={''} src={defaultTrackImage} {...rest} />
        ) : (
          <NextImage alt={''} src={src} {...rest} />
        )}
      </div>
    </>
  );
}

export default TrackImage;
