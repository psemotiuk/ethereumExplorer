import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as FavouriteLogo} from '../../assets/svg/favourite.svg'
import './styles.scss';
import FavouritesLink from "./FavouritesLink";

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <NavLink to='/' activeClassName={'activeLink'}>Home</NavLink>
            <NavLink to='/blocks'  activeClassName={'activeLink'} >View Blocks</NavLink>
            <FavouritesLink />
        </div>
    )
}

export default Navbar;
