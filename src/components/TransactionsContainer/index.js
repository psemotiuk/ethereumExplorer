import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { getBlockTransactions } from '../../services/web3';
import { useTable } from 'react-table';
import { COLUMNS } from '../../utils/table';

import Loader from 'react-loader-spinner';


import './styles.scss';
import './table.scss';


const TransactionsContainer = () => {
  const [transactions, setTransactions] = useState([]);
  const [isTransasctionFetched, setIsTransactionsFetched] = useState(false);
  const location = useLocation();
  const { transactionsHashes } = location.state;

  const fetchTransactions = async () => {
    try {
      const transactionsFetched = await getBlockTransactions(transactionsHashes);
      setTransactions(transactionsFetched);
      setIsTransactionsFetched(true)
    } catch (error) {
      return error;
    }  
  };


  useEffect(() => {
    fetchTransactions();
  }, []);

  
  // const columns = useMemo(() => COLUMNS, []);

  // const data = useMemo(() => transactions, []);

  // const tableInstance = useTable({
  //   columns,
  //   data,
  // });

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

  return (
    //   <table {...getTableProps()}>
    //       <thead >
    //           {
    //               headerGroups.map(headerGroup => (
    //                 <tr {...headerGroup.getHeaderGroupProps()}>
    //                     {
    //                         headerGroup.headers.map( column => (
    //                             <th {...column.getHeaderProps()}>
    //                                 {column.render('Header')}
    //                             </th>
    //                         ))
    //                     }
    //                 </tr>
    //               ))
    //           }
    //       </thead>
    //       <tbody {...getTableBodyProps()}>
    //           {
    //               rows.map(row => {
    //                   prepareRow(row)
    //                   return (
    //                       <tr {...row.getRowProps()}>
    //                           {
    //                               row.cells.map( cell => {
    //                                   return <td {...cell.getCellProps()}>
    //                                       {cell.render('Cell')}
    //                                   </td>
    //                               })
    //                           }
    //                       </tr>
    //                   )
    //               })
    //           }
    //       </tbody>
    //   </table>
    // )
    <table>
        <thead> 
            <tr> 
                <th> Hash </th>
                <th> Nonce </th>
                <th> Block hash </th>
                <th> Block number </th>
                <th> Transaction index </th>
                <th> From </th>
                <th> To </th>
                <th> Value </th>
                <th> Gas </th>
                <th> Gas price </th>
            </tr>
        </thead>
        <tbody>
            {
              transactions.map(transaction => (
                <tr>
                    <td> 
                        {transaction.hash}
                    </td>
                    <td> 
                        {transaction.nonce}
                    </td>
                    <td> 
                        {transaction.blockHash}
                    </td>
                    <td> 
                        {transaction.blockNumber}
                    </td>
                    <td> 
                        {transaction.transactionIndex}
                    </td>
                    <td> 
                        {transaction.from}
                    </td>
                     <td> 
                        {transaction.to}
                    </td>
                    <td> 
                        {transaction.value}
                    </td>
                    <td> 
                        {transaction.gas}
                    </td>
                    <td> 
                        {transaction.gasPrice}
                    </td>
                </tr>
              ))   
            }
        </tbody>
    </table>
  ) 
  
};

export default TransactionsContainer;
