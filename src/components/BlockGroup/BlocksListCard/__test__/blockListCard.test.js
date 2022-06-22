import React from "react";
import ReactDOM from 'react-dom';
import BlocksListCard from "../index";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../../../../navigation/router";

it('BlocksListCard renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <BlocksListCard/>
        </AppRouter>
        ,
        div
    )
});
