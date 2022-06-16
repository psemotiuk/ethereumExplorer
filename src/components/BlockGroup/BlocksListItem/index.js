import React from 'react';
import {Link} from 'react-router-dom';
import {timeSince, truncate} from '../../../utlis';
import ReactTooltip from 'react-tooltip';

import './styles.scss';
import {Button} from "@mui/material";

const BlocksListItem = ({
                            data: {number, timestamp, miner, transactions},
                            isFavouritesPage = false
                        }) => {
    const followedListFromStorage = JSON.parse(localStorage.getItem('followed'));
    const onRemoveClick = (e) => {
        console.log('followedListFromStorage', followedListFromStorage)
        e.preventDefault()
        const filteredFollowedList = followedListFromStorage.filter(item => !item.number === number)
        localStorage.setItem('followed', JSON.stringify(filteredFollowedList))
    }
    return (
        <Link to={`/blocks/${number}`}>
            <div className='blocksListItemRow'>
                <div className='blockListItemRowGeneral'>
        <span className='blockIcon'>
            <span>Bk</span>
          </span>
                    <div className='blockListItemNumberAndTime'>
                        <Link to={`/blocks/${number}`}>
                            <p className='blockListItemRowNumber'>{number}</p>
                        </Link>

                        <p className='blockListItemRowTimestamp text-secondary small'>
                            {timeSince(timestamp)}
                        </p>
                    </div>
                </div>
                <div className='blockListItemRowDetailed'>
                    <p style={{whiteSpace: 'nowrap'}}>Miner: {miner}</p>
                    <p>
                        <Link
                            data-tip='Transactions in this Block'
                            data-type='info'
                            to={`/txs?block=${number}`}
                            state={{transactionsHashes: transactions}}
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
                {isFavouritesPage &&
                <div className={'removeBlockButton__container'}>
                    <Button
                        onClick={onRemoveClick}
                        className={'removeBlockButton'}
                        variant="contained"
                    >
                        Remove
                    </Button>
                </div>
                }
            </div>
        </Link>
    );
};

export default BlocksListItem;
