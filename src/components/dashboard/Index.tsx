import React from 'react';
import Error from '../Error';
import Add from './Add';
import Delete from './Delete';
import Update from './Update';
import General from './General';

function Index({ value = 0 }) {
  return (
    <div>
      {(() => {
        if (value === 0) {
          return <General />;
        } else if (value === 1) {
          return <Add />;
        } else if (value === 2) {
          return <Update />;
        } else if (value === 3) {
          return <Delete />;
        } else {
          return <Error message='Error in loading' />;
        }
      })()}
    </div>
  );
}

export default Index;
