import React from "react";
import ReactDOM from 'react-dom';
import Header from "../index";
import AppRouter from "../../../navigation/router";

it('Header renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <Header/>
        </AppRouter>
        ,
        div
    )
});
