import React from "react";
import ReactDOM from 'react-dom';
import FavouritesFilter from "../FavouritesFilter";
import AppRouter from "../../../../navigation/router";

it('FavouritesFilter renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <FavouritesFilter/>

        ,
        div
    )
});
