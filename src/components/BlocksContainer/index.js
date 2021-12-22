import React from 'react';

import styles from './styles.module.scss';
import Block from '../Block';

const BlocksContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blocksWrapper}>
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        </div>
    )
}

export default BlocksContainer;