import React, { useEffect, useState } from 'react';

import Block from '../Block';

import './styles.scss';

import { getLastTenBlocks } from '../../services/web3';

import { useBlocks } from '../../context/BlocksContext';

import Loader from 'react-loader-spinner';

const BlocksContainer = () => {
  const [blocksState, setBlocksState] = useState([]);

  const blocks = useBlocks();


  return (
    <div className='container'>
      {blocks.length === 0 ? (
        <div className='loading-box'>
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
          <p>Processing...</p>
        </div>
      ) : (
        <div className='blocksWrapper'>
          {blocks.map(({ nonce, parentHash, number, transactions, hash }) => {
            return (
              <Block
                number={number}
                nonce={nonce}
                parentHash={parentHash}
                hash={hash}
                transactions={transactions}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BlocksContainer;
