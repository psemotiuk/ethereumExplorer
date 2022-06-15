import React from 'react';

import './index.scss';

const FavouritesCounter = ({amount}) => {

    return (
        <div className={'favouriteCounter__container'}>

            {amount <= 9 ? amount : '9+'}

        </div>
    );
};

export default FavouritesCounter;
