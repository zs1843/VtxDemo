import React from 'react';
import styles from './VtxDemoPage.css';
import { default as VtxDemo } from './../../components';
import { connect } from 'dva';

function VtxDemoPage(props) {
  return (
    <div className={styles.normal}>
      <VtxDemo {...props} />
    </div>
  );
}

export default connect(({ VtxDemo }) => VtxDemo)(VtxDemoPage);
