import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import { truncate } from '../../utlis';

const Block = ({ nonce, parentHash, number, transactions }) => {
    // const blocks = useBlocks();

    const pH = truncate(parentHash, 3);

    console.log('ph', pH);
    

    // window.addEventListener('load', function () {
    //     if (typeof web3 !== undefined) {
    //         window.web3 = new Web3(window.web3.currentProvider)


    //         if (window.web3.currentProvider.isMetaMask === true) {
    //             window.web3.eth.getAccounts((error, accounts) => {
    //                 if (accounts.length == 0) {
    //                     // there is no active accounts in MetaMask
    //                 }
    //                 else {
    //                     // It's ok
    //                 }
    //             });
    //     }
    //     else {
    //         console.log('failed');
    //     }
    // } })
    
   
    // const blockNumber = getBlockNumber();

    // useEffect( () => {
    //     console.log('blockNumber', blockNumber);
    // }, [])

    return (
        <div className='blockWrapper'>
            <div className='innerWrapper'>
                <div className='blockTitle'>Block 32523</div>
                <div className='blockNonce'>Nonce: {nonce}</div>
                <div className='prevHash'>Prev hash: {pH}</div>
                <Link 
                    to={`/txs?block=${number}`}
                    params={{transactions: transactions}}
                >
                    <div className='transactionsRow'> 
                        {`< Transactions >`} 
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Block;