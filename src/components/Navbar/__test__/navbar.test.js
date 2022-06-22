import React from "react";
import ReactDOM from 'react-dom';
import Navbar from "../index";
import AppRouter from "../../../navigation/router";

it('Navbar renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <Navbar/>
        </AppRouter>
        ,
        div
    )
});
