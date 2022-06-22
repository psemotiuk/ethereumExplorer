import React from "react";
import ReactDOM from 'react-dom';
import PrevBlocks from "../PrevBlocks";

it('PrevBlocks renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <PrevBlocks/>
        ,
        div
    )
});
