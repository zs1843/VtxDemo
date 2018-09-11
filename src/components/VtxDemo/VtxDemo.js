import React from 'react';
import styles from './VtxDemo.less';
import { VtxDemoModal, VtxDemoGrid } from '../../components';
import { Icon } from 'antd';
import { connect } from 'dva';

function VtxDemo(props) {
  const { dispatch } = props;
  const showModal = () => {
    dispatch({
      type: 'vtxModalM/updateState',
    })
  }
  const addItem = () => {
    dispatch({
      type: 'vtxGrid/addItem',
    })
  }
  return (
    <div className={styles.normal}>
      <h1>Component: VtxDemo</h1>
      <a onClick={showModal}>
        <Icon type="plus-circle" style={{ color: "#108ee9", fontSize: '18px' }} />
        <span>添加</span>
      </a>
      <VtxDemoGrid />
      <VtxDemoModal addItem={addItem} />
    </div>
  );
}

export default connect(({ vtxModalM, vtxGrid }) => ({ vtxModalM, vtxGrid }))(VtxDemo);

