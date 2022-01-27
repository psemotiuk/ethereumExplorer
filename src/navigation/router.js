import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import TransactionsContainer from '../components/TransactionsGroup/TransactionsContainer';
import BlockDetails from '../components/BlockGroup/BlockDetails';
import TransactionDetails from '../components/TransactionsGroup/TransactionDetails';
import Home from '../pages/Home/Home';
import Blocks from '../pages/Blocks';
import Header from '../components/Header';

import '../App.css';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="appContainer">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blocks' element={<Blocks />} />
        <Route path='/txs' element={<TransactionsContainer />} />
        <Route path='/blocks/:number' element={<BlockDetails />} />
        <Route path='/tx/:hash' exact element={<TransactionDetails />} />
      </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
