import React from 'react';
import { connect } from 'dva';
import styles from './input.less';
import DemoInput from '../../components/demoInput/DemoInput';

function Input() {
    return (
        <div className={styles.normal}>
            <DemoInput />
        </div>
    );
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Input);
