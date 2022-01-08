import React, { useState } from 'react';
import BlocksContainer from '../../components/BlocksContainer';
import TransactionsContainer from '../../components/TransactionsContainer';
import { BlocksProvider } from '../../context/BlocksContext';
import { Tab, Tabs, AppBar } from '@mui/material';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <BlocksProvider>
        <BlocksContainer />
      </BlocksProvider>
    </div>
  );
};

export default Home;
