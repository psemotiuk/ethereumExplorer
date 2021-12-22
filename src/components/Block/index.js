import React from 'react';

import styles from './styles.module.scss';

const Block = () => {
    return (
        <div className={styles.blockWrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.blockTitle}>Block 32523</div>
                <div className={styles.blockNonce}>Nonce: 4234234234</div>
                <div className={styles.prevHash}>Prev hash: 4234234234</div>
                <div className={styles.transactionsRow}> {`< Transactions >`} </div>
            </div>
        </div>
    )
}

export default Block;