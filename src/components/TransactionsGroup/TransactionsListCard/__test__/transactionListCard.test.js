import React from "react";
import ReactDOM from 'react-dom';
import TransactionsListCard from "../index";
import AppRouter from "../../../../navigation/router";

it('TransactionsListCard renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <TransactionsListCard/>
        </AppRouter>
        ,
        div
    )
});
