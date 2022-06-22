import React from "react";
import ReactDOM from 'react-dom';
import Home from "../Home";

it('HomePage renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Home/>
        ,
        div
    )
});
