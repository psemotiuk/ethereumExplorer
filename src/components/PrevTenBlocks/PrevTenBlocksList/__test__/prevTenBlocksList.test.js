import React from "react";
import ReactDOM from 'react-dom';
import PrevTenBLocksList from "../PrevTenBLocksList";
import AppRouter from "../../../../navigation/router";

it('PrevTenBLocksList renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <PrevTenBLocksList/>
        </AppRouter>
        ,
        div
    )
});
