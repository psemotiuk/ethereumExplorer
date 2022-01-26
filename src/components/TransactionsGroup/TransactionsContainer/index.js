import React, { useEffect, useState, useMemo, useRef } from 'react';
import {
  useLocation,
  Link,
} from 'react-router-dom';
import {
  getBlockTransactions,
  getLastTenTransactions,
} from '../../../services/web3'


import Loader from 'react-loader-spinner';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { truncate, convertorWeiToEther } from '../../../utlis';

function createData(
  hash,
  nonce,
  blockHash,
  blockNumber,
  transactionIndex,
  from,
  to,
  value,
  gas,
  gasPrice
) {
  return {
    hash,
    nonce,
    blockHash,
    blockNumber,
    transactionIndex,
    from,
    to,
    value,
    gas,
    gasPrice,
  };
}

const TransacationsContainer = () => {
  const [transactions, setTransactions] = useState([]);
  const location = useLocation();
  const { transactionsHashes } = location.state;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, transactions.length - page * rowsPerPage);

  const fetchTransactions = async () => {
    try {
      const transactionsFetched = await getBlockTransactions(
        transactionsHashes
      );

      setTransactions(transactionsFetched);
    } catch (error) {
      return error;
    }
  };

  let rows = useRef([]);
  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      rows.current = transactions.map(
        ({
          hash,
          nonce,
          blockHash,
          blockNumber,
          transactionIndex,
          from,
          to,
          value,
          gas,
          gasPrice,
        }) =>
          createData(
            hash,
            nonce,
            blockHash,
            blockNumber,
            transactionIndex,
            from,
            to,
            value,
            gas,
            gasPrice
          )
      );
    }
  }, [transactions]);

  const tableHeaders = [
    'Hash',
    'Block number',
    'From',
    'To',
    'Value',
    'Gas',
    'Gas Price',
  ];

  return transactions?.length === 0 ? (
    <Loader type='TailSpin' color='#00BFFF' height={50} width={50} />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableCell align='left'>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.current
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(
              ({
                hash,
                nonce,
                blockHash,
                blockNumber,
                transactionIndex,
                from,
                to,
                value,
                gas,
                gasPrice,
              }) => (
                <TableRow
                  key={hash}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <Link to={`/tx/${hash}`}>{truncate(hash, 20, true)}</Link>
                  </TableCell>
                  <TableCell align='left'>
                    <Link to={`/block/${blockNumber}`}>
                      <p className='blockListItemRowNumber'>{blockNumber}</p>
                    </Link>
                  </TableCell>
                  <TableCell align='left'>{truncate(from, 10, true)}</TableCell>
                  <TableCell align='left'>{truncate(to, 10, true)}</TableCell>
                  <TableCell align='left'>
                    {convertorWeiToEther(value)} Ether{' '}
                  </TableCell>
                  <TableCell align='left'>{gas}</TableCell>
                  <TableCell align='left'>{gasPrice}</TableCell>
                </TableRow>
              )
            )}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component={'div'}
        count={transactions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TransacationsContainer;
