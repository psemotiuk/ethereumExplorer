import React from "react";
import ReactDOM from 'react-dom';
import TransactionsListItem from "../index";
import AppRouter from "../../../../navigation/router";

it('TransactionsListItem renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <TransactionsListItem/>
        </AppRouter>
        ,
        div
    )
});
