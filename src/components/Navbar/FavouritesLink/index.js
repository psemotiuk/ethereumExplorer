import React, {useContext, useEffect, useState} from 'react';
import './styles.scss';
import {ReactComponent as FavouriteLogo} from "../../../assets/svg/favourite.svg";
import {NavLink} from "react-router-dom";
import FavouritesCounter from "../FavouritesCounter";
import {FavouritesContextProvider} from "../../../context/favouritesContext";

const FavouritesLink = () => {
    const favoritesLength = JSON.parse(localStorage.getItem('followed'))?.length
    const {favouritesLengthState, incrementFavouritesLength} = useContext(FavouritesContextProvider)

    return (
        <NavLink to={'/favourites'} className={'favouriteLink__container'}>
            <p className={'favouriteLink__title'}>My list</p>
            {favouritesLengthState > 0 ?
                <div className={'favouriteLink__iconContainer'}>
                    <FavouriteLogo className={'favoriteSvg'}/>
                    <FavouritesCounter amount={favoritesLength}/>
                </div>
                : <div className={'favouriteLink__iconContainer'}>
                    <FavouriteLogo className={'favoriteSvg'}/>
                </div>
            }
        </NavLink>
    );
};

export default FavouritesLink;
