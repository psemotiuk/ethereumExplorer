import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBLock } from '../../../services/web3';
import { timeSince } from '../../../utlis';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import './styles.scss';

const BlockDetails = () => {
  const [block, setBlock] = useState({});
  const params = useParams();
  const { number } = params;

  const fetchBlock = async () => {
    const blockData = await getBLock(number);
    setBlock(blockData);
  };

  useEffect(() => {
    fetchBlock();
  }, []);
  useEffect(() => {
    console.log('blockData', block);
  }, [block]);

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
            <div className='column second'>{block.difficulty}</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Totla Difficulty</div>
            <div className='column second'>{block.totalDifficulty}</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Size</div>
            <div className='column second'>{block.size} bytes</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Gas Used</div>
            <div className='column second'>{block.gasUsed}</div>
          </div>
          <div className='blockDetailsRow'>
            <div className='column first'>Gas Limit</div>
            <div className='column second'>{block.gasLimit}</div>
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
