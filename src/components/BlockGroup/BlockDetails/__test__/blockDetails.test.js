import React from "react";
import ReactDOM from 'react-dom';
import BlockDetails from "../index";
import AppRouter from "../../../../navigation/router";
import {BrowserRouter} from "react-router-dom";
import FavouritesContext from "../../../../context/favouritesContext";

it('BlockDetails renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <FavouritesContext>
                <BlockDetails/>
            </FavouritesContext>
        </BrowserRouter>
        ,
        div
    )
});
