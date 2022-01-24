import React, {useState, useEffect} from 'react';
import TransactionsListItem from '../TransactionsListItem';
import { useBlocks } from '../../context/BlocksContext';

import Loader from 'react-loader-spinner';

import './styles.scss'

const TransactionsListCard = () => {

    const blocks = useBlocks();
    const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (blocks?.transactions?.length ) {
      setIsLoading(false)
    }
  }, [blocks])


    return (
        <div className="transactionsListContainer">
            <div className="transactionsListHeaderTitleWrapper">
                <p className='transactionsListHeaderTitle'>Latest transactions</p>
            </div>
            <div className='transactionsListContainerMain'>
            {
                isLoading ? 
                <div className='centeredContainer'>
                  <Loader type='ThreeDots' color='#00BFFF' height={60} width={60} />
                </div> :
                    blocks.transactions.map(data => <TransactionsListItem data={data} />)
            }
            </div>
        </div>
    )
}

export default TransactionsListCard;