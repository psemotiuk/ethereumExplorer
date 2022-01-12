import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import { truncate } from '../../utlis';

const Block = ({ nonce, parentHash, number, transactions, hash }) => {
  // const blocks = useBlocks();

  const parentH = truncate(parentHash, 3);
  const h = truncate(hash, 3);

  // console.log('ph', pH);

  // console.log('transactionKeys', transactions)

  // window.addEventListener('load', function () {
  //     if (typeof web3 !== undefined) {
  //         window.web3 = new Web3(window.web3.currentProvider)

  //         if (window.web3.currentProvider.isMetaMask === true) {
  //             window.web3.eth.getAccounts((error, accounts) => {
  //                 if (accounts.length == 0) {
  //                     // there is no active accounts in MetaMask
  //                 }
  //                 else {
  //                     // It's ok
  //                 }
  //             });
  //     }
  //     else {
  //         console.log('failed');
  //     }
  // } })

  // const blockNumber = getBlockNumber();

  // useEffect( () => {
  //     console.log('blockNumber', blockNumber);
  // }, [])

  return (
    <div className='blockWrapper'>
      <div className='innerWrapper'>
        <div className='blockTitle'>
          Block
          <Link to={`/block/${number}`}>
            <span>{number}</span>
          </Link>
        </div>

        <div className='blockNonce'>Nonce: {nonce}</div>
        <div className='hash'>Hash: {h}</div>
        <div className='prevHash'>Parent hash: {parentH}</div>
        <Link
          to={`/txs?block=${number}`}
          state={{ transactionsHashes: transactions }}
        >
          <div className='transactionsRow'>{`< Transactions >`}</div>
        </Link>
      </div>
    </div>
  );
};

export default Block;
