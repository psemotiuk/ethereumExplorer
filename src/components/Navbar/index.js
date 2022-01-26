import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <NavLink to='/' activeClassName={'activeLink'}>Home</NavLink>
            <NavLink to='/blocks'  activeClassName={'activeLink'} >View Blocks</NavLink>
        </div>
    )
}

export default Navbar;