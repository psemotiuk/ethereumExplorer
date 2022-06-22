import React from "react";
import ReactDOM from 'react-dom';
import BlocksListItem from "../index";
import {BrowserRouter} from "react-router-dom";
import {DataProvider} from "../../../../context/context";
import AppRouter from "../../../../navigation/router";
import BlocksListCard from "../../BlocksListCard";

it('BlocksListItem renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BlocksListCard>
            <BlocksListItem/>
        </BlocksListCard>
        ,
        div
    )
});
