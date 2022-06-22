import React from "react";
import ReactDOM from 'react-dom';
import FollowButton from "../index";
import AppRouter from "../../../../../navigation/router";

it('FollowButton renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AppRouter>
            <FollowButton/>
        </AppRouter>
        ,
        div
    )
});
