import React from 'react';
import styles from './VtxDemo.less';
import { VtxDatagrid } from 'vtx-ui';
import { columns } from '../../../mock';

function VtxDemo(props) {
  let data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: parseInt(Math.random() * 100),
      address: 'New York No. 1 Lake Park',
      editMode: false,
    })
  }
  return (
    <div className={styles.normal}>
      Component: VtxDemo
      <VtxDatagrid columns={columns} dataSource={data} hideColumn={false} />
    </div>
  );
}

export default VtxDemo;
