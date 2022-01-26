import React from 'react';
import BlocksContainer from '../components/BlockGroup/BlocksContainer';
import { DataProvider } from '../context/context';

const Blocks = () => {
  return (
    <div>
      <DataProvider>
        <BlocksContainer />
      </DataProvider>
    </div>
  );
};

export default Blocks;
