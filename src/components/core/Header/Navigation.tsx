import Link from 'next/link';
import { useUser } from '@/hooks/user/useUser';
import { useEffect } from 'react';
import {
  DashboardLogo,
  HomeIcon,
  PersonIcon,
  PlaylistIcon,
  SearchIcon,
  SignOutIcon,
} from '@/components/Icons';
import { useLogout } from '@/hooks/useAuth';
import { toast } from 'react-toastify';
import ThemeSwitch from '@/components/ThemeSwitch';

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
    toast.success('Logged Out!');
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
          <ThemeSwitch />
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
