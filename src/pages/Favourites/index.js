import React, {useEffect, useState} from 'react';
import './index.scss';
import FavouritesHeader from "../../components/Favourites/FavouritesHeader";
import FavouritesList from "../../components/Favourites/FavouritesList";
import FavouritesFilter from "../../components/Favourites/FavouritesFilter/FavouritesFilter";

const Favourites = () => {
    const followedListFromStorageLength = JSON.parse(localStorage.getItem('followed'))?.length;
    const [filters, setFilters] = useState({
        transactions: true,
        blocks: true
    })

    return (
        <>
            <FavouritesHeader/>
            {followedListFromStorageLength > 0 && <FavouritesFilter filters={filters} setFilters={setFilters}/>}
            <FavouritesList filters={filters}/>
        </>
    );
}
;

export default Favourites;
