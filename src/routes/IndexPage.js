import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { NavLink } from 'dva/router';

function IndexPage() {
    return (
        <div className={styles.normal}>
            <h1 className={styles.title}>Yay! Welcome to dva!</h1>
            <div className={styles.welcome} />
            <NavLink to="/VtxDemo">Table</NavLink>
        </div>
    );
}

export default connect()(IndexPage);
