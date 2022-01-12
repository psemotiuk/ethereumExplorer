import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <NavLink to='/' activeClassName={'activeLink'}>Home</NavLink>
            <NavLink to='/blocks'  activeClassName={'activeLink'} >View Blocks</NavLink>
            <NavLink to='/txs' activeClassName={'activeLink'} >View Transactions</NavLink>
        </div>
    )
}

export default Navbar;