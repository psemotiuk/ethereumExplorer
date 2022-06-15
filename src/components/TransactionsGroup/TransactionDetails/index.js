import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getTransaction } from '../../../services/web3';
import { convertorWeiToEther, fetchCurrencyPrice } from '../../../utlis';
import { Link } from 'react-router-dom';

import './styles.scss';
import FollowButton from "./FollowButton";
import {FavouritesContextProvider} from "../../../context/favouritesContext";

const TransactionDetails = () => {
  const followedList = JSON.parse(localStorage.getItem('followed'));
  console.log('followedListLocal', followedList)
  const [followedListState, setFollowedListState] = useState(followedList || []);
  const params = useParams();
  const {incrementFavouritesLength} = useContext(FavouritesContextProvider)
  const [transaction, setTransaction] = useState({});
  const { hash } = params;
  const [currencyPrice, setCurrencyPrice] = useState({});

  const fetchTransaction = async () => {
    const transactionsData = await getTransaction(hash);
    setTransaction(transactionsData);
  };
  useEffect(() => {
    fetchTransaction();
    fetchCurrencyPrice().then((result) => {
      setCurrencyPrice(result);
    });
  }, []);

  const followTransaction = (transaction) => {
    setFollowedListState((prevState => [...prevState, transaction]))
    incrementFavouritesLength();
    localStorage.setItem('followed', JSON.stringify([...followedListState, transaction]))
  }

  return (
    <div className='transactionDetailsContainer'>
      <div className='detailsInnerContainer'>
        <section className='detailsHeader'>
          <h1>Transaction Details</h1>
          <FollowButton action={() => followTransaction(transaction)}/>
        </section>
        <section className='card'>
          <div className='transactionDetailsRow'>
            <div className='column first'>Transaction Hash</div>
            <div className='column second'>{transaction.hash}</div>
          </div>
          <div className='transactionDetailsRow'>
            <div className='column first'>Block</div>
            <div className='column second'>
              <Link to={`/block/${transaction.blockNumber}`}>
                <p className='blockListItemRowNumber'>
                  {transaction.blockNumber}
                </p>
              </Link>
            </div>
          </div>
          <div className='transactionDetailsRow'>
            <div className='column first'>From</div>
            <div className='column second'>{transaction.from}</div>
          </div>
          <div className='transactionDetailsRow'>
            <div className='column first'>To</div>
            <div className='column second'>{transaction.to}</div>
          </div>
          <div className='transactionDetailsRow'>
            <div className='column first'>Value</div>
            <div className='column second'>
              {convertorWeiToEther(transaction.value)} Ether
            </div>
          </div>
          <div className='transactionDetailsRow'>
            <div className='column first'>Gas Used:</div>
            <div className='column second'>{transaction.gas}</div>
          </div>
          <div className='transactionDetailsRow'>
            <div className='column first'>Transaction Fee:</div>
            <div className='column second'>
              {convertorWeiToEther(transaction.gasPrice, 10) * transaction.gas}{' '}
              Ether
              <span className='price'>
                {' '}
                (${' '}
                {currencyPrice.USD *
                  convertorWeiToEther(transaction.gasPrice * transaction.gas)}
                )
              </span>
              {' '}
              <span className='small secondary'>
                Calc as gas used * gas price
              </span>
            </div>
          </div>
          <div className='transactionDetailsRow'>
            <div className='column first'>Gas Price</div>
            <div className='column second'>
              {convertorWeiToEther(transaction.gasPrice, 10)} Ether{' '}
              <span className='price'>
                {' '}
                (${' '}
                {currencyPrice.USD *
                  convertorWeiToEther(transaction.gasPrice, 10)}
              </span>
              )
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TransactionDetails;
