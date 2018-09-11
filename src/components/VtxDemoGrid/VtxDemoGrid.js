import React from 'react';
import { connect } from 'dva';
import styles from './VtxDemoGrid.css';
import { VtxDatagrid } from 'vtx-ui';
import { columns } from '../../../mock';
import { Popconfirm, Input, message } from 'antd';

function VtxDemoGrid(props) {
  const { dispatch } = props;
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
    width: 200,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: function (a, b) {
      if (a.age < b.age) {
        return -1;
      }
      else if (a.age > b.age) {
        return 1;
      }
      // a must be equal to b
      return 0;
    },
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
    nowrap: true,
    render: (text, record) => {
      return record.editMode ? <Input defaultValue={record.address} onChange={(e) => {
        dispatch({
          type: 'vtxGrid/editRow', payload: {
            key: record.key,
            address: e.target.value
          }
        });
      }} /> : text
    }
  }, {
    title: '自定义Button',
    key: 'action',
    // width:200,
    render: (text, record) => (
      <span>
        <a onClick={() => { }}>查看</a>
        <span className="ant-divider" />
        {
          record.editMode ?
            <a onClick={() => {
              dispatch({
                type: 'vtxGrid/editRow', payload: {
                  key: record.key,
                  editMode: false
                }
              })
            }}>保存</a>
            :
            <a onClick={() => {
              dispatch({
                type: 'vtxGrid/editRow', payload: {
                  key: record.key,
                  editMode: true
                }
              })
            }}>修改</a>
        }
        <span className="ant-divider" />
        <Popconfirm title="确定删除吗？" okText="确定" cancelText="取消" onConfirm={() => {
          dispatch({
            type: 'vtxGrid/deleteRow',
            payload: {
              key: record.key
            }
          })
        }} >
          <a>删除</a>
        </Popconfirm>
      </span>
    ),
  }

  ];

  return (
    <div className={styles.normal} >
      <VtxDatagrid {...props} columns={columns} />
    </div >
  );
}

export default connect(({ vtxGrid }) => vtxGrid)(VtxDemoGrid);
