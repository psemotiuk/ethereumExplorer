import React, { useContext, useEffect, useState } from 'react';
import { getLastTenBlocks } from '../services/web3';

const BlockContext = React.createContext();

export const useBlocks = () => {
    return useContext(BlockContext);
}

export const BlocksProvider = ({ children }) => {
    const lastBlocks = [];
    
    const resolvePromise = async () => {
        const blocksPromise = await getLastTenBlocks();

        setLastBlocksState(blocksPromise);
    }

    //const lastBlocks = [{nonce: 1, parentHash: 1}, {nonce: 2, parentHash: 2}, {nonce: 3, parentHash: 3}];

    useEffect(() => {
        resolvePromise();
    }, [])

    

    const [lastBlockState, setLastBlocksState] = useState(lastBlocks);

    console.log('lastblocksState', lastBlockState);

    return (
        <BlockContext.Provider value={lastBlockState}>
            {children}
        </BlockContext.Provider>
    )
}