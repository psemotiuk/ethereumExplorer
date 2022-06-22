import React from "react";
import ReactDOM from 'react-dom';
import TransactionDetails from "../index";
import AppRouter from "../../../../navigation/router";

it('TransactionDetails renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <TransactionDetails/>
        </AppRouter>
        ,
        div
    )
});
