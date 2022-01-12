import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './styles.scss';

const BlockDetails = () => {
    const params = useParams();
    const {id} = params;
    useEffect(() => {
        console.log('params', params);
    }, [])
  return (
    <div className='blockDetailsContainer'>
      <div className='detailsInnerContainer'>
        <section className='detailsHeader'>
          <h1>Block <span className='textSecondary'> </span>&nbsp;#{id}</h1>
        </section>
        <section className='card'>
            <div className='blockDetailsRow'>
                <div className='column first'>
                    Block Height:
                </div>
                <div className='column second'>
                    13970889
                </div>
            </div>
            <div className='blockDetailsRow'>
                <div className='column first'>
                    Block Height:
                </div>
                <div className='column second'>
                    13970889
                </div>
            </div>
            <div className='blockDetailsRow'>
                <div className='column first'>
                    Block Height:
                </div>
                <div className='column second'>
                    13970889
                </div>
            </div>
            <div className='blockDetailsRow'>
                <div className='column first'>
                    Block Height:
                </div>
                <div className='column second'>
                    13970889
                </div>
            </div>
            <div className='blockDetailsRow'>
                <div className='column first'>
                    Block Height:
                </div>
                <div className='column second'>
                    13970889
                </div>
            </div>
            <div className='blockDetailsRow'>
                <div className='column first'>
                    Block Height:
                </div>
                <div className='column second'>
                    13970889
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default BlockDetails;
