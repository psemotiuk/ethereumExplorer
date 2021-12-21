import React from 'react';

import styles from './styles.module.scss';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <p className={styles.headerTitle}>Etherum explorer</p>
        </div>
    )
}

export default Header;