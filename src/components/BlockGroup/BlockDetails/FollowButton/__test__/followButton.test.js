import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import FollowButton from "../index";

it('followButton renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <FollowButton />
        </BrowserRouter>
        ,
        div
    )
});
