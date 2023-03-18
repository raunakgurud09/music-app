import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { MenuIcon } from '../../Icons/MenuIcon';

// import { navLists } from './Navigation';

export interface navList {
  name: string;
  href: string;
}

export interface navList extends Array<navList> {}

export const navLists = [
  {
    name: 'Cart',
    href: '/cart',
  },
];

function SmallNav() {
  return (
    <Menu as='div' className='relative h-5 md:hidden '>
      <Menu.Button className='inline-flex'>
        <span
          className='w-6 cursor-pointer fill-current hover:text-primary-500'
          aria-label='navigation menu'
          role='button'
        >
          <MenuIcon />
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='border-background-900 bg-50 absolute right-0 top-6 z-20 mt-4 w-36 rounded-lg border bg-slate-500 text-sm font-bold shadow-lg'>
          {navLists.map(({ name, href }) => (
            <Menu.Item key={name}>
              {/* legacyBehavior */}
              <Link href={href} passHref>
                <div className='hover:bg-300 block w-full cursor-pointer px-2 py-2 text-start'>
                  <span className='flex items-center space-x-2'>
                    <span>{name}</span>
                  </span>
                </div>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default SmallNav;
