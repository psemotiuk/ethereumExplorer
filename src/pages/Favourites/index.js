import React from 'react';
import './index.scss';
import {Radio, RadioGroup} from "@mui/material";
import FavouritesHeader from "../../components/Favourites/FavouritesHeader";
import FavouritesList from "../../components/Favourites/FavouritesList";

const Favourites = () => {
    return (
        <>
          <FavouritesHeader />
          <FavouritesList />
        </>
    );
};

export default Favourites;
