import React, { useContext, useEffect, useState } from 'react';
import { getLastTenBlocks, getLastTenTransactions } from '../services/web3';

const BlockContext = React.createContext();

export const useBlocks = () => {
    return useContext(BlockContext);
}

// export const useTransactions () => {
//     return useContext()
// }

export const BlocksProvider = ({ children }) => {
    const lastBlocks = [];
    
    const resolvePromise = async () => {
        console.time()
        const blocksPromise = await getLastTenBlocks();
        const latestTransactions = await getLastTenTransactions();
    
        setLastBlocksState({blocks: blocksPromise, transactions: latestTransactions});
    }

    //const lastBlocks = [{nonce: 1, parentHash: 1}, {nonce: 2, parentHash: 2}, {nonce: 3, parentHash: 3}];

    useEffect(() => {
        
        resolvePromise();
        
    }, [])

    

    const [lastBlockState, setLastBlocksState] = useState({});

    console.log('lastblocksState', lastBlockState);

    return (
        <BlockContext.Provider value={lastBlockState}>
            {children}
        </BlockContext.Provider>
    )
}