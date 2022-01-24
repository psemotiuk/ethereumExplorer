import React from 'react';

import moment from 'moment';

export function truncate(str, n, last = false) {
  const lastIndex = str?.length - 1;
  return str.length > n ? (
    last ? (
      <React.Fragment>{str.substr(0, n - 1)}&hellip;</React.Fragment>
    ) : (
      <React.Fragment>
        {str.substr(0, n - 1)}&hellip;{str.substr(lastIndex - 3, lastIndex)}
      </React.Fragment>
    )
  ) : (
    str
  );
}

export const convertorWeiToEther = (sum, toIndex = 7) => {
  const parsedToEther = sum / 1000000000000000000;
  return parsedToEther % 1 === 0 ? parsedToEther.toFixed(0) : parsedToEther.toFixed(toIndex);
}

export const timeSince = (blockTimestamp) => {
  const diffSeconds = Math.floor((new Date().getTime() - blockTimestamp*1000) / 1000);

  console.log('difSec', diffSeconds)

  return diffSeconds < 60 ? `${diffSeconds} seconds ago` : moment(blockTimestamp*1000).fromNow();
}

