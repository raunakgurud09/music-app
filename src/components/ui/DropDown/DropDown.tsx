import EditIcon from '@/components/Icons/Edit';
import cx from 'classnames';
import { useLogout } from '@/hooks/useAuth';
import { useUser } from '@/hooks/user/useUser';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export default function DropDown({ children }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { data: currentUser } = useUser();
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const dropDownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => window.removeEventListener('click', handleClickOutSide);
  }, [isOpenDropDown]);

  const handleClickOutSide = (e: Event) => {
    const target = e.target;
    if (target instanceof Node && dropDownRef.current?.contains(target)) {
      return;
    }
    setIsOpenDropDown(false);
  };

  const handleCloseDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleProfile = () => {
    window.location.href = '/profile';
  };

  const handleTheme = () => {
    console.log(theme);
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const handleDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <li ref={dropDownRef} className='relative'>
      <div onClick={handleCloseDropDown} className=''>
        <div>{children}</div>
      </div>
      <div
        className={cx(
          'absolute top-10 right-1 w-40 rounded bg-zinc-900 p-2 transition-opacity',
          isOpenDropDown ? 'visible' : 'invisible'
        )}
        aria-label='drop-menu'
      >
        <div className='flex flex-col text-white'>
          <h3 className='text-m'>👋 {currentUser.name.toUpperCase(1)}</h3>
          <DropDownList
            icon={<EditIcon />}
            action={handleProfile}
            text='Profile'
          />
          <DropDownList
            action={handleTheme}
            // icon={}
            text='Theme'
          />
          {currentUser.role === 'admin' && (
            <DropDownList action={handleDashboard} text='Dashboard' />
          )}
          <DropDownList action={handleLogout} text='Signout' />
        </div>
      </div>
    </li>
  );
}

const DropDownList = ({ text, icon = '', action }: any) => {
  return (
    <div className='my-1 flex h-8 flex-row rounded bg-slate-700/50 p-1 text-white hover:bg-slate-100/5'>
      <div className='w-1/4'>
        <div className='flex h-full items-center justify-center p-2'>
          {icon}
        </div>
      </div>
      <div className='w-3/4' onClick={action}>
        {text}
      </div>
    </div>
  );
};
