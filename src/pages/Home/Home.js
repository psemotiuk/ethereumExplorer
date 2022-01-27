import React, { useEffect } from 'react';
import BlocksListCard from '../../components/BlockGroup/BlocksListCard';
import TransactionsListCard from '../../components/TransactionsGroup/TransactionsListCard';
import { DataProvider } from '../../context/context';
import { fetchCurrencyPrice } from '../../utlis';

import './styles.scss';

const Home = () => {
  
  return (
    <div>
      <div className='cardsWrapper'>
        <DataProvider>
          <BlocksListCard />
          <TransactionsListCard />
        </DataProvider>
      </div>
    </div>
  );
};

export default Home;
