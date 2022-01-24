import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='headerInnerWrapper'>
        <Link
          to='/'
        >
          <p className='headerTitle'>Etherium explorer</p>
        </Link>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
