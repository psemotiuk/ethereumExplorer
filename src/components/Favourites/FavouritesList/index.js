import React from 'react';
import BlocksListItem from "../../BlockGroup/BlocksListItem";
import TransactionsListItem from "../../TransactionsGroup/TransactionsListItem";
import './index.scss';

const FavouritesList = () => {
        const followedList = JSON.parse(localStorage.getItem('followed'));
        return (
            <div className={'followedList__container'}>
                {
                    followedList &&
                    followedList.map(item => {
                            if (item.transactions) {
                                return <BlocksListItem data={item} isFavouritesPage />
                            } else {
                                return <TransactionsListItem data={item} isFavouritesPage />
                            }
                        }
                    )
                }

            </div>
        )
            ;
    }
;

export default FavouritesList;
