import React from 'react';
import { SearchIcon } from '../Icons';

function SearchBar() {
  const handleClick = () =>{
    console.log("search")
  }
  return (
    <div
      className='flex h-[72px] w-full items-center space-x-2 rounded-full bg-slate-800/30 p-10'
      onClick={handleClick}
    >
      <div className='h-4 w-4'>
        <SearchIcon />
      </div>
      <div>search</div>
    </div>
  );
}

export default SearchBar;
