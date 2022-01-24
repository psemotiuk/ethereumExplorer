import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRouteMatch,
} from 'react-router-dom';
import TransactionsContainer from '../components/TransactionsContainer';
import BlockDetails from '../components/BlockDetails';
import TransactionDetails from '../components/TransactionDetails';
import Home from '../pages/Home/Home';
import Blocks from '../pages/Blocks';
import Header from '../components/Header';

import '../App.css';

const AppRouter = () => {
  // let { path, url } = useRouteMatch();
  return (
    <Router>
      <Header />
      <div className="appContainer">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blocks' element={<Blocks />} />
        <Route path='/txs' element={<TransactionsContainer />} />
        <Route path='/block/:number' element={<BlockDetails />} />
        <Route path='/tx/:hash' exact element={<TransactionDetails />} />
      </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
