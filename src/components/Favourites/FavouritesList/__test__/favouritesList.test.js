import React from "react";
import ReactDOM from 'react-dom';
import FavouritesList from "../index";
import AppRouter from "../../../../navigation/router";
import Favourites from "../../../../pages/Favourites";

it('FavouritesList renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Favourites>
            <FavouritesList/>
        </Favourites>
        ,
        div
    )
});
