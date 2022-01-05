import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './styles.scss';


const TransactionsContainer = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { transactions } = useParams();

    useEffect(() => {
        const block = searchParams.get('block');
        console.log('block', block)
        console.log('transactions', transactions)
    }, [])
    
    return (
        <div className='containerTransactions'>
            <table>
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
            
            </table>

        </div>
    )
}

export default TransactionsContainer;