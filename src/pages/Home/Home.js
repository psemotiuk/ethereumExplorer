import React, { useEffect, useState } from 'react';
// import BlocksContainer from '../components/BlocksContainer';
// import TransactionsContainer from '../components/TransactionsContainer';
// import { BlocksProvider } from '../context/BlocksContext';
// import { Tab, Tabs, AppBar } from '@mui/material';
import Header from '../../components/Header';
import BlocksListCard from '../../components/BlocksListCard';
import TransactionsListCard from '../../components/TransactionsListCard';
import { BlocksProvider } from '../../context/BlocksContext';

import './styles.scss';

const Home = () => {
  // const [selectedTab, setSelectedTab] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setSelectedTab(newValue);
  // };


  return (
    <div>
        {/* <Header /> */}

        <div className='cardsWrapper'>
          <BlocksProvider >
            <BlocksListCard />
            <TransactionsListCard />
          </BlocksProvider>
        </div>
        
        
    </div>
  );
};

export default Home;
