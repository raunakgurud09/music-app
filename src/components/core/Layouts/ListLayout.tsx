import { useState } from 'react';
import UserCard from '../../ui/Cards/User';

export default function ListLayout({ users, initialDisplayUsers }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredDisplayUser = users.filter((frontMatter) => {
    const searchContent =
      frontMatter.name + frontMatter.email + frontMatter.role;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayUsers =
    initialDisplayUsers.length > 0 && !searchValue
      ? initialDisplayUsers
      : filteredDisplayUser;

  return (
    <>
      <div className='relative w-[100%]'>
        <input
          aria-label='Search articles'
          type='text'
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search articles'
          className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
        />
        <svg
          className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
      <br />
      {/* <div className="m-4 w-[100%]"> */}
      <div
        className={`container grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-center justify-center gap-2`}
      >
        {displayUsers.map((user) => {
          return (
            <UserCard
              key={user._id}
              image={user.image}
              name={user.name}
              email={user.email}
              role={user.role}
              isVerified={user.isVerified}
            />
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
}
