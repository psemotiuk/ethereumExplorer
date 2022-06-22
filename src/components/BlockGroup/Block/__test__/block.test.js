import React from "react";
import ReactDOM from 'react-dom';
import Block from "../index";
import {BrowserRouter} from "react-router-dom";

it('block renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Block/>
        </BrowserRouter>
        ,
        div
    )
});
