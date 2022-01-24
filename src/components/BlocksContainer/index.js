import React, { useEffect, useState } from 'react';

import Block from '../Block';

import './styles.scss';

import { getLastTenBlocks } from '../../services/web3';

import { useBlocks } from '../../context/BlocksContext';

import Loader from 'react-loader-spinner';

const BlocksContainer = () => {
  const [blocksState, setBlocksState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const blocks = useBlocks();

  
  useEffect(() => {
    if (blocks?.blocks?.length && blocks?.transactions?.length ) {
      setIsLoading(false)
    }
  }, [blocks])

  // console.log(blocks, transactions);

 


  return (
    <div className='container'>
      {isLoading ? (
        <div className='loading-box'>
          <Loader type='Puff' color='#00BFFF' height={100} width={100} />
          <p>Processing...</p>
        </div>
      ) : (
        <div className='blocksWrapper'>
          {blocks.blocks.map(({ nonce, parentHash, number, transactions, hash }) => {
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
