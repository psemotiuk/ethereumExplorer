import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import TransactionsContainer from '../components/TransactionsGroup/TransactionsContainer';
import BlockDetails from '../components/BlockGroup/BlockDetails';
import TransactionDetails from '../components/TransactionsGroup/TransactionDetails';
import Home from '../pages/Home/Home';
import Blocks from '../pages/Blocks/Blocks';
import Header from '../components/Header';

import '../App.css';
import Favourites from "../pages/Favourites";
import FavouritesContext from "../context/favouritesContext";
import PrevBlocks from "../pages/PrevBlocks/PrevBlocks";

const AppRouter = () => {
    const [idToRemove, setIdToRemove] = useState();
    return (
        <FavouritesContext>
            <Router>
                <Header />
                <div className="appContainer">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/blocks' element={<Blocks/>}/>
                        <Route path='/txs' element={<TransactionsContainer/>}/>

                        <Route path='/blocks/:number' element={<BlockDetails/>}/>
                        <Route path='/tx/:hash' exact element={<TransactionDetails/>}/>
                        <Route path='/favourites' element={<Favourites/>}/>
                        <Route path='/prevBlocks/:number' element={<PrevBlocks/>}/>
                    </Routes>
                </div>
            </Router>
        </FavouritesContext>

    );
};

export default AppRouter;
