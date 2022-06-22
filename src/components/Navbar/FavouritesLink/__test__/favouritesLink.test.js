import React from "react";
import ReactDOM from 'react-dom';
import FavouritesLink from "../index";
import AppRouter from "../../../../navigation/router";

it('FavouritesLink renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <FavouritesLink/>
        </AppRouter>
        ,
        div
    )
});
