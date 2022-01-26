import React, {useEffect, useState} from 'react';

import BlocksListItem from '../BlocksListItem';

import { useCustomHook } from '../../../context/context';

import { Scrollbars } from 'rc-scrollbars';

import './styles.scss';

import Loader from 'react-loader-spinner';

const BlocksListCard = () => {

    const blocks = useCustomHook();
    const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (blocks?.blocks?.length && blocks?.transactions?.length ) {
      setIsLoading(false)
    }
  }, [blocks])

    return (
        <div className="blocksListContainer">
            <div className="blocksListHeaderTitleWrapper">
                <p className='blocksListHeaderTitle'>Latest blocks</p>
            </div>
                <div className='blocksListContainerMain'>
                {
                isLoading ? <div className='centeredContainer'>
                  <Loader type='ThreeDots' color='#00BFFF' height={60} width={60} />
                </div>
                 :
                    blocks.blocks.map(data => <BlocksListItem data={data} />)
            }
            </div>
        </div>
    )
}

export default BlocksListCard;