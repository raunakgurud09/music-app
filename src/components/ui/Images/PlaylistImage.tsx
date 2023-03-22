import NextImage from 'next/image';
import defaultPlaylistImage from './playlist-image.jpg';

function PlaylistImage({ src, alt, ...rest }) {
  return (
    <>
      <div className='opacity-90'>
        {src === '' ? (
          <NextImage alt={''} src={defaultPlaylistImage} {...rest} />
        ) : (
          <NextImage alt={''} src={src} {...rest} />
        )}
      </div>
    </>
  );
}

export default PlaylistImage;
