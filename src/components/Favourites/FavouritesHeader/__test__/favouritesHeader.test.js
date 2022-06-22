import React from "react";
import ReactDOM from 'react-dom';
import FavouritesHeader from "../index";
import AppRouter from "../../../../navigation/router";

it('FavouritesHeader renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <FavouritesHeader/>
        </AppRouter>
        ,
        div
    )
});
