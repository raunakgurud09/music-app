import NextImage from 'next/image';
import defaultImage from '@/public/defaultAvatar.png';

const Image = ({ src, alt, ...rest }) => {
  return (
    <>
      <div className='opacity-90'>
        {src === '' ? (
          <NextImage alt={''} src={defaultImage} {...rest} />
        ) : (
          <NextImage alt={''} src={src} {...rest} />
        )}
      </div>
    </>
  );
};
export default Image;
