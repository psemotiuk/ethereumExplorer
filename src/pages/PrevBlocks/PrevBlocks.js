import React from 'react';
import PrevTenBLocksList from "../../components/PrevTenBlocks/PrevTenBlocksList/PrevTenBLocksList";
import './styles.scss'
import {useParams} from "react-router-dom";

const PrevBlocks = () => {
    const {number} = useParams();
    return (
        <div>
            <h2 className={'prevBlocks__title'}>Previous 10 Blocks for: {number}</h2>

            <PrevTenBLocksList />
        </div>
    );
};

export default PrevBlocks;
