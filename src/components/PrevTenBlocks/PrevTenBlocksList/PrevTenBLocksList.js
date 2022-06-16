import React, {useEffect, useState} from 'react';
import {ArcherContainer, ArcherElement} from "react-archer";
import Block from "../../BlockGroup/Block";
import './styles.scss';
import {Link, useLocation, useParams} from "react-router-dom";
import {getLastTenBlocks} from "../../../services/web3";
import Loader from "react-loader-spinner";
import {truncate} from "../../../utlis";

const blocks = [1, 2, 3, 45, 66, 6, 7, 8, 9, 10]


const PrevTenBLocksList = () => {
    const [prevBlocks, setPrevBlocks] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const {number} = useParams();

    const fetchLastTenBlocks = async () => {
        try {
            setIsLoading(true);
            const blocks = await getLastTenBlocks(number);
            setPrevBlocks(blocks)
        } catch (e) {
            throw e
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchLastTenBlocks()
    }, [])


    return <div className={'containerGraph'}>
        {isLoading ? <Loader type='TailSpin' color='#00BFFF' height={50} width={50}/> :
            <ArcherContainer>
                <div className={'blocksWrapperGraph'}>
                    {
                        prevBlocks.map(({nonce, parentHash, number, transactions, hash}, index, array) => {
                                return index + 1 !== array.length ?
                                    <ArcherElement
                                        id={`element${index + 1}`}
                                        relations={[
                                            {
                                                targetId: `element${index + 2}`,
                                                targetAnchor: ((index + 1) % 3 === 0) ? "top" : "left",
                                                sourceAnchor: ((index + 1) % 3 === 0) ? "bottom" : "right",
                                                style: {strokeColor: "#0B1933", strokeWidth: 2},
                                            },
                                        ]}
                                    >
                                        <div className='blockWrapperGraph' id={index}>
                                            <div className='innerWrapperGraph'>
                                                <div className='blockTitleGraph'>
                                                    Block
                                                    <Link to={`/blocks/${number}`}>
                                                        <span>{number}</span>
                                                    </Link>
                                                </div>

                                                <div className='blockNonceGraph'>Nonce: {nonce}</div>
                                                <div className='hashGraph'>Hash: {truncate(hash, 3)}</div>
                                                <div className='prevHashGraph'>Parent hash: {truncate(parentHash, 3)}</div>
                                                <Link
                                                    to={`/txs?block=${number}`}
                                                    state={{transactionsHashes: transactions}}
                                                >
                                                    <div className='transactionsRowGraph'>{`< Transactions >`}</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </ArcherElement>
                                    :
                                    <ArcherElement
                                        id={`element${index + 1}`}
                                    >
                                        <div className='blockWrapperGraph' id={index}>
                                            <div className='innerWrapperGraph'>
                                                <div className='blockTitleGraph'>
                                                    Block
                                                    <Link to={`/blocks/${number}`}>
                                                        <span>{number}</span>
                                                    </Link>
                                                </div>

                                                <div className='blockNonceGraph'>Nonce: {nonce}</div>
                                                <div className='hashGraph'>Hash: {truncate(hash, 3)}</div>
                                                <div className='prevHashGraph'>Parent hash: {truncate(parentHash, 3)}</div>
                                                <Link
                                                    to={`/txs?block=${number}`}
                                                    state={{transactionsHashes: transactions}}
                                                >
                                                    <div className='transactionsRowGraph'>{`< Transactions >`}</div>
                                                </Link>
                                            </div>
                                        </div>
                                    </ArcherElement>
                            }
                        )
                    }
                </div>
            </ArcherContainer>
        }
    </div>
};

export default PrevTenBLocksList;
