import { SVGProps } from 'react';

const PlaylistIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='currentColor'
      d='M21 7V19C21 20.1046 20.1046 21 19 21H7M9 8.5V11.5L12 10L9 8.5ZM17 15V5C17 3.89543 16.1046 3 15 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15Z'
      stroke='black'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

export default PlaylistIcon;
