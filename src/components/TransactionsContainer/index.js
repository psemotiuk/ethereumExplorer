import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { getBlockTransactions } from '../../services/web3';
import './styles.scss';

const TransactionsContainer = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const useParamsHook = useParams();
  const [transactions, setTransactions] = useState([]);
  const location = useLocation();
  const { transactionsHashes } = location.state;

//   console.log('transactionHashes', transactionsHashes);

  const fetchTransactions = async () => {
    const transactionsData = await getBlockTransactions(transactionsHashes);
    setTransactions(transactionsData);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    console.log('transactions', transactions);
  }, [transactions]);

  return (
    <div className='containerTransactions'>
      {/* <table>
        <tr>
          <th>Head1</th>
          <th>Head2</th>
          <th>Head3</th>
          <th>Head4</th>
          <th>Head5</th>
        </tr>
        <tr>
          <td>3</td>
          <td>5</td>
          <td>5</td>
          <td>6</td>
          <td>8</td>
        </tr>
        <tr>
          <td>3</td>
          <td>5</td>
          <td>5</td>
          <td>6</td>
          <td>8</td>
        </tr>
        <tr>
          <td>3</td>
          <td>5</td>
          <td>5</td>
          <td>6</td>
          <td>8</td>
        </tr>
      </table> */}
    </div>
  );
};

export default TransactionsContainer;
