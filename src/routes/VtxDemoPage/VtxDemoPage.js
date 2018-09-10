import React from 'react';
import { connect } from 'dva';
import styles from './VtxDemoPage.css';
import { default as VtxDemo } from './../../components';

function VtxDemoPage() {
  return (
    <div className={styles.normal}>
      Route Component: VtxDemoPage
      <VtxDemo />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(({ VtxDemoData }) => VtxDemoData)(VtxDemoPage);
