import React from "react";
import ReactDOM from 'react-dom';
import TransactionsContainer from "../index";
import AppRouter from "../../../../navigation/router";

it('TransactionsContainer renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <TransactionsContainer/>
        </AppRouter>

        ,
        div
    )
});
