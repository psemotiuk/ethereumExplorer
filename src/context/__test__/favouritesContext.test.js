import React from "react";
import ReactDOM from 'react-dom';
import FavouritesContext from "../favouritesContext";

it('FavouritesContext renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <FavouritesContext/>
        ,
        div
    )
});
