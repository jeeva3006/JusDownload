import React, { memo } from 'react';

const Grid = () => {
  return (
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='#0f172a' stroke-opacity='0.04'>
        <path d='M0 .5H31.5V32'/>
      </svg>
    </div>
  );
};

export default memo(Grid);