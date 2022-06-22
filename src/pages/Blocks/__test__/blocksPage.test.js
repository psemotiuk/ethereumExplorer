import React from "react";
import ReactDOM from 'react-dom';
import Blocks from "../Blocks";

it('BlocksPage renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Blocks/>

        ,
        div
    )
});
