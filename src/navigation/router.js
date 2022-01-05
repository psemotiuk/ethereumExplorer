import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionsContainer from '../components/TransactionsContainer';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/txs" element={<TransactionsContainer />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter;