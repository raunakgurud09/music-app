import Link from 'next/link';
import Signature from '../../Icons/Signature';
import SmallNav from './SmallNav';
import ThemeSwitch from '../../ThemeSwitch';
import LogIn from '../../ui/Buttons/login-btn';
import { useUser } from '@/hooks/user/useUser';
import { useEffect } from 'react';
import { Avatar } from '../../ui/Avatar/Avatar';
import { GetServerSideProps } from 'next';
import { fetcherSSR } from '@/lib/fetchSSR';
import DropDown from '../../ui/DropDown/DropDown';
import Image from '@/components/ui/Image';
import { IoMdCart } from 'react-icons/io';
import SmallBadge from '@/components/ui/Badges/Small';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  DashboardLogo,
  HomeIcon,
  PersonIcon,
  PlaylistIcon,
  SearchIcon,
  SignOutIcon,
} from '@/components/Icons';
import { useLogout } from '@/hooks/useAuth';

export interface navList {
  name: string;
  href: string;
}

export interface navList extends Array<navList> {}

export const navLists = [
  {
    name: 'Home',
    href: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Search',
    href: '/search',
    icon: <SearchIcon />,
  },
  {
    name: 'Playlist',
    href: '/playlist/me',
    icon: <PlaylistIcon />,
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardLogo />,
  },
];

// icon: <PersonIcon />,
const Navigation = () => {
  // const { data: session } = useSession()
  const { data: currentUser } = useUser();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  useEffect(() => {
    return () => {};
  }, [currentUser]);

  return (
    // <Container>
    <nav className=' sticky top-0 bottom-0 z-10 flex h-screen w-24 select-none flex-col items-center py-4 font-mono backdrop-blur'>
      <Link href='/' passHref>
        <h2 className='text-2xl font-bold'>Logo</h2>
      </Link>
      <div className='mt-10 items-center space-y-6 '>
        <ul className='flex w-[52px] flex-col items-center space-y-6 rounded-full bg-stone-900 py-7 '>
          {navLists.map(({ name, href, icon }: any) => (
            <div
              key={name}
              className='h-[22px] w-[22px] rounded-md opacity-70 hover:bg-zinc-900/10 hover:opacity-100'
            >
              <Link className='hover:text-red-500' href={href}>
                {icon}
              </Link>
            </div>
          ))}
        </ul>
        <ul className='flex w-[52px] flex-col items-center space-y-6 rounded-full bg-stone-900 py-7 '>
          <div className='h-[22px] w-[22px] items-center rounded-md opacity-70 hover:bg-zinc-900/100 hover:opacity-100'>
            <Link className='hover:text-red-500' href={'/profile'}>
              <PersonIcon />
            </Link>
          </div>
          {!currentUser ? (
            <div className='h-[22px] w-[22px] items-center rounded-md opacity-70 hover:bg-zinc-900/100 hover:opacity-100'>
              <Link className='hover:text-red-500' href={'/login'}>
                <SignOutIcon />
              </Link>
            </div>
          ) : (
            <div
              className='h-[22px] w-[22px] rounded-md opacity-70 hover:bg-zinc-900/10 hover:opacity-100'
              onClick={handleLogout}
            >
              <div className='hover:text-red-500'>
                <SignOutIcon />
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
    // </Container>
  );
};

export default Navigation;
