import { useEffect, useState } from 'react';
import cx from 'classnames';

export default function SmallBadge({ children, number = 2 }) {
  const [count, setCount] = useState<number>(number);

  // useEffect(() => {}, [count])

  const incrementCount = () => {
    if (count >= 9) {
      return setCount(0);
    }
    setCount(count + 1);
    // setCount((count) => count++)
    console.log(count);
  };

  return (
    <div className='relative max-w-fit items-center justify-center'>
      <div className='flex-shrink'>{children}</div>
      <div
        className={cx(
          'absolute top-[-20%] right-[-10%] flex h-4 w-4 items-center justify-center rounded-full',
          `${number < 5 ? 'bg-red-500' : 'bg-blue-500'}  `
        )}
      >
        <div className='text-xs' onClick={incrementCount}>
          {count}
        </div>
      </div>
    </div>
  );
}
