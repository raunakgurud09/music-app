import cx from 'classnames';
import { useUser } from '@/hooks/user/useUser';
import { useEffect, useRef, useState } from 'react';

export default function TrackDropDown({ children, data, setValue, setName }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const trackDropDownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => window.removeEventListener('click', handleClickOutSide);
  }, [isOpenDropDown]);

  const handleClickOutSide = (e: Event) => {
    const target = e.target;
    if (target instanceof Node && trackDropDownRef.current?.contains(target)) {
      return;
    }
    setIsOpenDropDown(false);
  };

  const handleCloseDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <li ref={trackDropDownRef} className='relative'>
      <div onClick={handleCloseDropDown} className='truncate'>
        <div>{children}</div>
      </div>
      <div
        className={cx(
          'absolute top-10 z-30 left-1 w-40 rounded bg-zinc-900 p-2 transition-opacity',
          isOpenDropDown ? 'visible' : 'invisible'
        )}
        aria-label='drop-menu'
      >
        <div className='flex flex-col text-white'>
          {data &&
            data.count > 0 &&
            data.tracks.map((track): any => (
              <DropDownList
                key={track._id}
                id={track._id}
                text={track.name}
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
      className='my-1 flex h-8 flex-row rounded bg-slate-700/50 p-1 text-white hover:bg-slate-100/5'
      onClick={() => {
        setValue(id);
        setName(text);
      }}
    >
      <div className='w-full truncate'>{text}</div>
    </div>
  );
};
