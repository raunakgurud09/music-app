import cx from 'classnames';
import { useTheme } from 'next-themes';
import React from 'react';

function Line() {
  const { theme } = useTheme();

  return (
    <div
      id='line'
      className={cx(
        'my-4 border-[0.25px]',
        theme === 'light' ? 'border-black' : 'border-white/75'
      )}
    ></div>
  );
}

export default Line;
