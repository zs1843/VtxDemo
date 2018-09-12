import React from 'react';
import { connect } from 'dva';
import styles from './VtxDemoModal.css';
import { VtxModal, VtxModalList } from 'vtx-ui';
import { Input, Select, InputNumber } from 'antd';

const VtxDemoModal = (vtxModalM) => {
  let vtxmodallistRef = null;
  let info = {};
  const { dispatch, username, age, address } = vtxModalM;
  const { Option } = Select;
  const Options = [
    { value: 'US', description: 'The United States' },
    { value: 'CA', description: 'Canada' },
    { value: 'CN', description: 'China' },
  ]
  const showModal = () => {
    vtxmodallistRef.clear();
    dispatch({
      type: 'vtxModalM/updateState',
      payload: {
        username: '',
        address: '',
        age: 0,
      }
    })
    dispatch({
      type: 'vtxModalM/showModal',
    })
  }
  const addItem = () => {
    vtxmodallistRef.submit().then(res => {
      if (res) {
        vtxModalM.dispatch({
          type: 'vtxGrid/addItem',
          payload: info,
        });
        showModal();
      }
    })
  }
  return (
    <div className={styles.normal}>
      <VtxModal {...vtxModalM} onOk={addItem} onCancel={showModal}>
        <VtxModalList ref={ref => vtxmodallistRef = ref} isRequired={true} visible={true}>
          <Input
            placeholder="UserName"
            name='username'
            value={username}
            onChange={e => {
              info.username = e.target.value;
              dispatch({
                type: 'vtxModalM/updateState',
                payload: {
                  username: e.target.value,
                }
              })
            }}
            data-modallist={{
              layout: { width: 90, name: '姓名', require: true, comType: 'input' },
              regexp: {
                value: username,
              }
            }}
          />
          <Select
            style={{ width: '100px' }}
            vlaue={address}
            defaultValue='CA'
            onChange={e => {
              info.address = e;
              dispatch({
                type: 'vtxModalM/updateState',
                payload: {
                  address: e,
                }
              })
            }
            }
            data-modallist={{
              layout: { width: 90, name: '地址', require: true, comType: 'input' },
              regexp: {
                value: address,
              }
            }}>
            {Options.map((el, i) => (
              <Option key={`option${i}`} value={el.value}>{el.description}</Option>
            ))}
          </Select>
          <InputNumber
            min={0}
            max={100}
            defaultValue={3}
            value={age}
            onChange={e => {
              info.age = e;
              dispatch({
                type: 'vtxModalM/updateState',
                payload: {
                  age: e,
                }
              })
            }}
            data-modallist={{
              layout: { width: 90, name: '年龄', require: true, comType: 'input' },
              regexp: {
                value: age,
              }
            }} />

        </VtxModalList>
      </VtxModal>
    </div>
  );
}

export default connect(({ vtxModalM }) => vtxModalM)(VtxDemoModal);
