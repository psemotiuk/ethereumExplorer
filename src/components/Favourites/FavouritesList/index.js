import React from 'react';
import BlocksListItem from "../../BlockGroup/BlocksListItem";

const FavouritesList = () => {
    const data = {number: 1, timestamp: '32132', miner: '32132', transactions: []};
    const followedList = JSON.parse(localStorage.getItem('followed'));
    return (
        <div>
            {
                followedList &&
                followedList.map(item => (
                    <BlocksListItem data={item}/>
                ))
            }

        </div>
    );
};

export default FavouritesList;
