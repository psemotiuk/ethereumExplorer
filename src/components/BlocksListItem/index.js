import React from 'react';
import { Link } from 'react-router-dom';
import { timeSince, truncate } from '../../utlis';
import ReactTooltip from 'react-tooltip';

import './styles.scss';

const BlocksListItem = ({
  data: { number, timestamp, miner, transactions },
}) => {
  return (
    <div className='blocksListItemRow'>
        <div className='blockListItemRowGeneral'>
        <span className='blockIcon'>
            <span>Bk</span>
          </span>
          <div className='blockListItemNumberAndTime'>
            <Link to={`/block/${number}`}>
              <p className='blockListItemRowNumber'>{number}</p>
            </Link>

            <p className='blockListItemRowTimestamp text-secondary small'>
              {timeSince(timestamp)}
            </p>
          </div>
        </div>
        <div className='blockListItemRowDetailed'>
          <p style={{ whiteSpace: 'nowrap' }}>Miner: {miner}</p>
          <p>
            <Link
              data-tip='Transactions in this Block'
              data-type='info'
              to={`/txs?block=${number}`}
              state={{ transactionsHashes: transactions }}
            >
              {transactions.length} txs
            </Link>

            <ReactTooltip
              backgroundColor={'#1c2e4a'}
              delayShow={30}
              delayHide={30}
              className='tooltipSize'
              effect='solid'
            />
          </p>
        </div>
      </div>
  );
};

export default BlocksListItem;
