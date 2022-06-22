import React from 'react';

import './styles.scss';

import {truncate} from '../../../utlis';
import {Link} from 'react-router-dom';
import {convertorWeiToEther} from '../../../utlis';
import ReactTooltip from 'react-tooltip';
import {Button} from "@mui/material";

const TransactionsListItem = ({data: {hash, from, to, value}, isFavouritesPage = false, setIdToRemove}) => {
    const followedListFromStorage = JSON.parse(localStorage.getItem('followed'));
    const onRemoveClick = (e) => {
        e.preventDefault()
        const filteredFollowedList = followedListFromStorage.filter(item => !item.hash === hash)
        localStorage.setItem('followed', JSON.stringify(filteredFollowedList))
        setIdToRemove(hash)
    }
    return (
        <Link to={`/tx/${hash}`}>
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
                {!isFavouritesPage &&
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
                }
                {isFavouritesPage &&
                <div className={'removeTransactionButton__container'}>
                    <Button
                        className={'removeTransactionButton'} onClick={onRemoveClick} variant="contained">Remove</Button>
                </div>
                }
            </div>
        </Link>
    );
};

export default TransactionsListItem;
