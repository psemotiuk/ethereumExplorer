import React from 'react';
import Navbar from '../Navbar';

import './styles.scss';

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='headerInnerWrapper'>
        <p className='headerTitle'>Etherium explorer</p>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
