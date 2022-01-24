import React from 'react';

import './styles.scss';

import { truncate } from '../../utlis';
import { Link } from 'react-router-dom';
import { convertorWeiToEther } from '../../utlis';
import ReactTooltip from 'react-tooltip';

const TransactionsListItem = ({ data: { hash, from, to, value } }) => {
  return (
    <div className='transactionListItemRow'>
      <div className='transactionListItemRowGeneral'>
        <span className='transactionIcon'>
          <span>Tx</span>
        </span>
        <div className='transactionListItemNumber'>
          <Link to={`/tx/${hash}`}>
            <p className='transactionListItemRowNumber'>
              {truncate(hash, 20, true)}
            </p>
          </Link>
        </div>
      </div>
      <div className='transactionListItemRowDetailed'>
        <p>From: {truncate(from, 20, true)}</p>
        <p>To: {truncate(to, 20, true)}</p>
      </div>
      <span data-tip='Amount' className='amountLabel'>
        {convertorWeiToEther(value, 5)}
        &nbsp;
        Eth
        <ReactTooltip
              backgroundColor={'#1c2e4a'}
              delayShow={30}
              delayHide={30}
              className='tooltipSize'
              effect='solid'
            />
      </span>
    </div>
  );
};

export default TransactionsListItem;
