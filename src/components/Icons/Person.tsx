import { SVGProps } from 'react';

const PersonIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    fill='none'
    viewBox='0 0 18 28'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='currentColor'
      d='M12.517 12.834v1.9a1.27 1.27 0 0 1-1.267 1.267h-9.5a1.27 1.27 0 0 1-1.267-1.267v-1.9A3.176 3.176 0 0 1 3.65 9.667h5.7a3.176 3.176 0 0 1 3.167 3.167zM3.264 5.48A3.236 3.236 0 1 1 6.5 8.717a3.236 3.236 0 0 1-3.236-3.236z'
    />
  </svg>
);

export default PersonIcon;
