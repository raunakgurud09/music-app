import cx from 'classnames';
import { Avatar } from '../Avatar/Avatar';

interface Users {
  name?: string;
  email?: string;
  image?: string;
  role?: string;
  isVerified?: boolean;
}

export default function UserCard({
  name,
  image,
  email,
  role,
  isVerified,
}: Users) {
  return (
    <>
      <div className='bg-primary relative flex max-w-fit rounded  border-2 p-2'>
        <div>
          <Avatar image={image} letter={name.charAt(0).toLocaleUpperCase()} />
        </div>
        <div>
          <h3 className='text-m p-1 font-semibold'>{name}</h3>
          <p className='p-1'>{email}</p>
          <p className='p-1'>{role}</p>
        </div>
        <div
          className={cx(
            'absolute top-[-7%] right-[-5%] h-4 w-4 rounded-full',
            isVerified ? 'bg-green-600' : 'bg-slate-700'
          )}
          aria-label='isVerified'
        ></div>
      </div>
    </>
  );
}
