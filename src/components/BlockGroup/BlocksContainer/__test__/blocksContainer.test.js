import React from "react";
import ReactDOM from 'react-dom';
import BlocksContainer from "../index";
import AppRouter from "../../../../navigation/router";
import {DataProvider} from "../../../../context/context";

it('BlocksContainer renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <DataProvider>
            <BlocksContainer/>
        </DataProvider>
        ,
        div
    )
});
