import React from 'react';
import './styles.scss';
import {ReactComponent as FavouriteLogo} from "../../../assets/svg/favourite.svg";
import {NavLink} from "react-router-dom";
import FavouritesCounter from "../FavouritesCounter";

const FavouritesLink = () => {
    return (
        <NavLink to={'/favourites'} className={'favouriteLink__container'}>
            <p className={'favouriteLink__title'}>My list</p>
            <div className={'favouriteLink__iconContainer'}>
                <FavouriteLogo className={'favoriteSvg'}/>
                <FavouritesCounter/>
            </div>
        </NavLink>
    );
};

export default FavouritesLink;
