import React, { useEffect, useState } from 'react';

import Block from '../Block';

import './styles.scss';

import { getLastTenBlocks } from '../../../services/web3';

import { useCustomHook } from '../../../context/context';

import Loader from 'react-loader-spinner';

const BlocksContainer = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //const blocks = useCustomHook();

  const fetchRecentTenBlocks = async () => {
    try {
      setIsLoading(true);
      const fetchedBlock = await getLastTenBlocks();
      setBlocks(fetchedBlock)
    } catch (e) {
      throw e
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRecentTenBlocks()
  }, [])


  return (
    <div className='container'>
      {isLoading ? (
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
