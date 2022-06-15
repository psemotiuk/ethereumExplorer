import React from 'react';
import './index.scss';
import {Radio, RadioGroup} from "@mui/material";
import FavouritesHeader from "../../components/Favourites/FavouritesHeader";
import FavouritesList from "../../components/Favourites/FavouritesList";
import {useLocation, useParams} from "react-router-dom";

const Favourites = () => {
    const location = useLocation();
    console.log('location', location)
    return (
        <>
            <FavouritesHeader/>
            <FavouritesList />
        </>
    );
};

export default Favourites;
