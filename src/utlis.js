import React from 'react';

export function truncate(str, n){
    const lastIndex = str.length - 1;
    return (str.length > n) ? <React.Fragment>{str.substr(0, n-1)}&hellip;{str.substr(lastIndex - 3, lastIndex)}</React.Fragment>: str;
};