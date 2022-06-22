import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import PrevTenBLocksButton from "../PrevTenBlocksButton";

it('prevTenBlocksButton renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <PrevTenBLocksButton/>
        </BrowserRouter>
        ,
        div
    )
});
