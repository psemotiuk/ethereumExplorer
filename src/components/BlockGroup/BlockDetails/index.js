import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBLock } from '../../../services/web3';
import { timeSince, fetchCurrencyPrice } from '../../../utlis';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import './styles.scss';

const BlockDetails = () => {
  const [block, setBlock] = useState({});
  const params = useParams();
  const { number } = params;
  const [currencyPrice, setCurrencyPrice] = useState({});
  const gasPrice = 0.000000123022258762;

  const fetchBlock = async () => {
    const blockData = await getBLock(number);
    setBlock(blockData);
  };

  useEffect(() => {
    fetchBlock();
    fetchCurrencyPrice().then((result) => {
      setCurrencyPrice(result);
    });
  }, []);

  return (
    <div className='blockDetailsContainer'>
      <div className='detailsInnerContainer'>
        <section className='detailsHeader'>
          <h1>
            Block&nbsp;
            <span className='textSecondary small'>&nbsp;#{number} </span>
          </h1>
        </section>
        <section className='card'>
          <div className='blockDetailsRow'>
            <div className='column first'>Hash</div>
            <div className='column second'>{block.hash}</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Timestamp</div>
            <div className='column second'>{timeSince(block.timestamp)}</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Transactions</div>
            <div className='column second'>
              <Link
                data-tip='Transactions in this Block'
                data-type='info'
                to={`/txs?block=${number}`}
                state={{ transactionsHashes: block.transactions }}
              >
                {block.transactions?.length} txs
              </Link>
              <ReactTooltip
              backgroundColor={'#1c2e4a'}
              delayShow={30}
              delayHide={30}
              className='tooltipSize'
              effect='solid'
            />
            </div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Mined By</div>
            <div className='column second'>{block.miner}</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Difficulty</div>
            <div className='column second'>{block.difficulty} <span className='small text-secondary'>Integer of the difficulty for this block</span></div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Total Difficulty</div>
            <div className='column second'>{block.totalDifficulty} <span className='small text-secondary'>Integer of the total difficulty of the chain until this block</span></div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Size</div>
            <div className='column second'>{block.size} bytes</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Gas Used</div>
            <div className='column second'>{block.gasUsed}  <span className='price'>
                {' '}
                (${' '}
                {currencyPrice.USD *
                  (gasPrice * block.gasUsed)}
                )
              </span></div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Gas Limit <span className='small text-secondary'>Calc as gas limit * gas price = maximum fee for block</span></div>
            <div className='column second'>{block.gasLimit} wei <span className='small text-secondary'>Number of max gas pay to miner</span></div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Block Height:</div>
            <div className='column second'>13970889</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlockDetails;
