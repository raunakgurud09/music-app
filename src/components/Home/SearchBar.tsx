import React from 'react';
import { SearchIcon } from '../Icons';

function SearchBar() {
  return (
    <div className='flex h-[72px] w-full items-center rounded-full bg-slate-800/30 p-10 space-x-2'>
      <div className='w-4 h-4'>
        <SearchIcon />
      </div>
      <div>search</div>
    </div>
  );
}

export default SearchBar;
