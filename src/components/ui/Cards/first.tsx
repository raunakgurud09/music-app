import { getSession } from 'next-auth/react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Avatar } from '../Avatar/Avatar';
import SmallBadge from '../Badges/Small';
import FilledButton from '../Buttons/Filled';
import OutlinedButton from '../Buttons/Outlined';
import Modal from '../Modal/Modal';
import ThemeSwitch from '../../ThemeSwitch';

interface FirstCard {
  title: string;
  link: string;
  date: any;
  description?: string;
  image?: any;
  icon?: any;
}
export default function FirstCard({
  title,
  image,
  description,
  link,
  icon,
  date,
}: FirstCard): JSX.Element {
  return (
    <>
      <div className='m-4 flex h-[480px] w-96 flex-col rounded-xl border  border-[#49454F] '>
        <div className='flex flex-row px-3 py-4'>
          <div className='flex flex-grow flex-row  '>
            <Modal>
              <Avatar image={image} />
            </Modal>
            <div className='ml-4'>
              <div className='font-medium'>{title}</div>
              <div className='text-xs font-thin opacity-50'>{date}</div>
            </div>
          </div>
          <div className='flex h-10 w-10 items-start justify-center rounded-full bg-gray-300/20'>
            <SmallBadge number={2}>
              <ThemeSwitch />
            </SmallBadge>
          </div>
        </div>
        <div className='contain'>
          <NextImage
            src={image}
            className='object-cover object-center sm:h-20 md:h-36 lg:h-48'
            alt='profile'
            height={200}
            width={480}
          />
        </div>
        <div className='flex flex-grow flex-col justify-between p-4'>
          <h3 className='text-2xl font-medium'>{title}</h3>
          <p>{description}</p>
          <div className='flex flex-row'>
            {/* className='max-w-max' */}
            <Link href={link} passHref>
              <FilledButton text='Enable' className='m-4' />
            </Link>
            <Modal>
              <OutlinedButton text='Disable' />
            </Modal>
            {/* <a href="http://localhost:3000" target={'_blank'}></a> */}
          </div>
        </div>
      </div>
    </>
  );
}
