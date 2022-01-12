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
import Home from '../pages/Home';
import Blocks from '../pages/Blocks';
import Header from '../components/Header';

const AppRouter = () => {
  // let { path, url } = useRouteMatch();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blocks' element={<Blocks />} />
        <Route path='/txs' element={<TransactionsContainer />} />
        <Route path='/block/:id' element={<BlockDetails />} />
        <Route path='/tx/:id' exact element={<TransactionDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
