import React from "react";
import ReactDOM from 'react-dom';
import FavouritesCounter from "../index";
import AppRouter from "../../../../navigation/router";

it('FavouritesCounter renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <FavouritesCounter/>
        </AppRouter>
        ,
        div
    )
});
