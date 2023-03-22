import cx from 'classnames';
import { useUser } from '@/hooks/user/useUser';
import { useEffect, useRef, useState } from 'react';

export default function PlaylistDropDown({
  children,
  data,
  setValue,
  setName,
}) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const playlistDropDownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => window.removeEventListener('click', handleClickOutSide);
  }, [isOpenDropDown]);

  const handleClickOutSide = (e: Event) => {
    const target = e.target;
    if (
      target instanceof Node &&
      playlistDropDownRef.current?.contains(target)
    ) {
      return;
    }
    setIsOpenDropDown(false);
  };

  const handleCloseDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <li ref={playlistDropDownRef} className='relative'>
      <div onClick={handleCloseDropDown} className='truncate'>
        <div>{children}</div>
      </div>
      <div
        className={cx(
          'absolute top-10 left-0 z-30 w-60 rounded bg-zinc-900 p-2 transition-opacity',
          isOpenDropDown ? 'visible' : 'invisible'
        )}
        aria-label='drop-menu'
      >
        <div className='flex flex-col text-white'>
          {data &&
            data.length > 0 &&
            data.map((playlist): any => (
              <DropDownList
                key={playlist._id}
                id={playlist._id}
                text={playlist.name}
                setValue={setValue}
                setName={setName}
              />
            ))}
        </div>
      </div>
    </li>
  );
}

const DropDownList = ({ text, id, setValue, setName }: any) => {
  return (
    <div
      className='my-1 flex h-8 w-full flex-row rounded bg-slate-700/50 p-1 text-white hover:bg-slate-100/5'
      onClick={() => {
        setValue(id);
        setName(text);
      }}
    >
      <div className='w-full truncate'>{text}</div>
    </div>
  );
};
