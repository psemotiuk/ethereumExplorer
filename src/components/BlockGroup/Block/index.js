import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import { truncate } from '../../../utlis';

const Block = ({ nonce, parentHash, number, transactions, hash }) => {

  const parentH = truncate(parentHash, 3);
  const h = truncate(hash, 3);

  return (
    <div className='blockWrapper'>
      <div className='innerWrapper'>
        <div className='blockTitle'>
          Block
          <Link to={`/blocks/${number}`}>
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
