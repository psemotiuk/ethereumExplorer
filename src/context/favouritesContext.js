import React, {createContext, useState} from 'react';

export const FavouritesContextProvider = createContext();

const FavouritesContext = ({children}) => {
    const favoritesLength = JSON.parse(localStorage.getItem('followed'))?.length
    const [favouritesLengthState, setFavouritesLengthState] = useState(favoritesLength || 0)


    const incrementFavouritesLength = () => {
        setFavouritesLengthState(favouritesLengthState + 1)
    }
    return (
        <FavouritesContextProvider.Provider value={{favouritesLengthState, incrementFavouritesLength}}>
            {children}
        </FavouritesContextProvider.Provider>
    );
};

export default FavouritesContext;
