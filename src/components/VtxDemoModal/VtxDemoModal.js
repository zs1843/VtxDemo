import React from 'react';
import { connect } from 'dva';
import styles from './VtxDemoModal.css';
import { VtxModal, VtxModalList } from 'vtx-ui/lib';
import { Input, Icon, Select, Form } from 'antd';

function VtxDemoModal(vtxModalM) {
  const { dispatch } = vtxModalM;
  const { Option } = Select;
  const { Item } = Form;
  const Options = [
    { value: 'US', description: 'The United States' },
    { value: 'CA', description: 'Canada' },
    { value: 'CN', description: 'China' },
  ]
  const showModal = () => {
    dispatch({
      type: 'vtxModalM/updateState',
    })
  }
  const renderForm = Form.create()(props => {
    const { getFieldDecorator } = props.form;
    return (
      <VtxModalList>
        <Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Item>
        <Item>
          <Select style={{ width: '100px' }}>
            {Options.map((el, i) => (
              <Option key={`option${i}`} value={el.value}>{el.description}</Option>
            ))}
          </Select>
        </Item>
        <Item>
          <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Address" />
        </Item>
      </VtxModalList>
    )
  })
  console.log(Form.create())
  return (
    < div className={styles.normal} >
      <VtxModal {...vtxModalM} onOk={vtxModalM.addItem} onCancel={showModal}>
        <renderForm />
      </VtxModal>
    </div >
  );
}

export default connect(({ vtxModalM }) => vtxModalM)(VtxDemoModal);
