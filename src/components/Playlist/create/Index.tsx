import React from 'react';
import Error from '../../Error';
import Create from './Create';
import Delete from './Delete';
import Update from './Update';

function Index({ value = 0 }) {
  return (
    <div>
      {(() => {
        if (value === 0) {
          return <Create />;
        } else if (value === 1) {
          return <Update />;
        } else if (value === 2) {
          return <Delete />;
        } else {
          return <Error message='Error in loading' />;
        }
      })()}
    </div>
  );
}

export default Index;
