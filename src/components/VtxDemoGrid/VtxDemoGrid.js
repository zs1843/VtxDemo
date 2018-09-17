import React from 'react';
import { connect } from 'dva';
import styles from './VtxDemoGrid.less';
import { VtxDatagrid } from 'vtx-ui';
import { columns } from '../../../mock';
import { Popconfirm, Input, message, Popover, Checkbox, Icon } from 'antd';

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
  },
  {
    title: '封装Button',
    key: 'autoaction',
    // width:200,
    renderButtons: [
      {
        name: '查看',
        onClick(rowData) {
          message.info('查看' + rowData.key, 5);
        }
      }, {
        name: '删除',
        onClick(rowData) {
          message.info('删除' + rowData.key, 5);
        }
      }, {
        name: '编辑',
        onClick(rowData) {
          message.info('编辑' + rowData.key, 5);
        }
      }, {
        name: 'hehei',
        onClick(rowData) {
          let t = Math.random();
          message.info(t)
        }
      }, {
        name: 'test',
        onClick(rowData) {
          message.info('dfsf');
        }
      }
    ],
  }

  ];

  function changeColumnVisibility(title, visible) {
    this.setState({
      columnsVisibility: this.state.columnsVisibility.map(item => {
        if (item.title == title) {
          return {
            title,
            visible
          }
        }
        return item;
      })
    })
  }

  return (
    <div className={styles.normal} >
      <VtxDatagrid {...props} columns={columns} />
      <Popover placement="bottomRight" title={'隐藏显示列'} content={
        <div className={styles.titleSelectionContainer}>
          {
            columns.map(item => ({ title: item.title, visible: true })).map((item, index) =>
              <Checkbox key={index} checked={item.visible} onChange={(e) => {
                changeColumnVisibility(item.title, e.target.checked)
              }}>
                {item.title}
              </Checkbox>
            )
          }
        </div>
      } trigger="click">
        <Icon type="setting" className={styles.columnBt} />
      </Popover>
    </div >
  );
}

export default connect(({ vtxGrid }) => vtxGrid)(VtxDemoGrid);
