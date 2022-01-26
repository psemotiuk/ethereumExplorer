import React, { useContext, useEffect, useState } from 'react';
import { getLastTenBlocks, getLastTenTransactions } from '../services/web3';

const DataContext = React.createContext();

export const useCustomHook = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [lastUpdatedData, setLastUpdatedData] = useState({});

  const performPromise = async () => {
    const blocksPromise = await getLastTenBlocks();
    const latestTransactions = await getLastTenTransactions();

    setLastUpdatedData({
      blocks: blocksPromise,
      transactions: latestTransactions,
    });
  };

  useEffect(() => {
    performPromise();
  }, []);

  console.log('children', children)

  return (
    <DataContext.Provider value={lastUpdatedData}>
      {children}
    </DataContext.Provider>
  );
};
