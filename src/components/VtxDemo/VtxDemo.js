import React from 'react';
import styles from './VtxDemo.less';
import { VtxDemoModal, VtxDemoGrid } from '../../components';
import { Icon } from 'antd';
import { connect } from 'dva';

function VtxDemo(props) {
  const { dispatch } = props;
  const showModal = () => {
    dispatch({
      type: 'vtxModalM/showModal',
    })
  }
  return (
    <div className={styles.normal}>
      <h1>Component: VtxDemo</h1>
      <a className={styles.addBtn} onClick={showModal}>
        <Icon type="plus-circle" style={{ color: "#108ee9", fontSize: '18px' }} />
        <span>添加</span>
      </a>
      <VtxDemoGrid />
      <VtxDemoModal />
    </div>
  );
}

export default connect(({ vtxModalM, vtxGrid }) => ({ vtxModalM, vtxGrid }))(VtxDemo);

