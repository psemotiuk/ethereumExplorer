import React, {useEffect, useState} from 'react';
import BlocksListItem from "../../BlockGroup/BlocksListItem";
import TransactionsListItem from "../../TransactionsGroup/TransactionsListItem";
import './index.scss';

const FavouritesList = ({filters: {transactions, blocks}}) => {
        const followedListFromStorage = JSON.parse(localStorage.getItem('followed'));
        const [followedList, setFollowedList] = useState(followedListFromStorage || [])
        const [idToRemove, setIdToRemove] = useState(null)

        useEffect(() => {
            if (transactions) {
                setFollowedList(followedListFromStorage.filter(item => !item.transactions))
            }
            if (blocks) {
                setFollowedList(followedListFromStorage.filter(item => item.transactions))
            }
            if (blocks && transactions) {
                setFollowedList(followedListFromStorage)
            }
            if (!blocks && !transactions) {
                setFollowedList([])
            }
        }, [transactions, blocks])

        useEffect(() => {
            setFollowedList(stateFollowedList => stateFollowedList.filter(item => {
                return !((item.number || item.hash) === idToRemove)
            }))
        }, [idToRemove])

        return (
            <div className={'followedList__container'}>
                {
                    followedList &&
                    followedList.map(item => {
                            if (item.transactions) {
                                return <BlocksListItem data={item} isFavouritesPage setIdToRemove={setIdToRemove}/>
                            } else {
                                return <TransactionsListItem data={item} isFavouritesPage setIdToRemove={setIdToRemove}/>
                            }
                        }
                    )
                }

                {followedList.length === 0 && <h1>Your list is empty now</h1>}

            </div>
        )
            ;
    }
;

export default FavouritesList;
