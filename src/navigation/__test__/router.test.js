import React from "react";
import ReactDOM from 'react-dom';
import AppRouter from "../router";

it('AppRouter renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter/>
        ,
        div
    )
});
