import { SVGProps } from 'react';

const VolumeIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill='none'
    viewBox='-104 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>vol-low</title>
    <path
      fill='currentColor'
      d='M128 336L64 336 64 176 128 176 240 64 240 448 128 336Z'
    />
  </svg>
);

export default VolumeIcon;
