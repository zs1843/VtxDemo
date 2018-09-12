
import { message } from 'antd';
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
export default {
  namespace: 'vtxGrid',
  state: {
    dataSource: data,
    currentPage: 1,
    pageSize: 20,
    totalItems: 199,
    selectedRowKeys: [],
    visible: true,
    title: () => 'vtx demo modal',
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put, select }) {
    },
    *getdataSource({ payload }, { call, put, select }) {
      const { currentPage, pageSize } = payload;
      yield put({
        type: 'fetch', payload: {
          currentPage,
          pageSize,
          dataSource: genData(pageSize)
        }
      });

    },
  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
    editRow(state, action) {
      const { key, address } = action.payload;
      let pos = state.dataSource.map(item => item.key).indexOf(key);
      let newdataSource = [...state.dataSource];
      if (pos != -1) {
        newdataSource[pos] = {
          address,
          ...newdataSource[pos],
          ...action.payload,
        }
      }

      return {
        ...state,
        dataSource: newdataSource
      }
    },
    addItem(state, action) {
      const { username, age, address } = action.payload || state;
      let newdataSource = [...state.dataSource, {
        username,
        age,
        address,
        editMode: false,
      }]
      message.success('添加成功', 5);
      return {
        ...state,
        dataSource: newdataSource,
      }
    },
    deleteRow(state, action) {
      const { key } = action.payload;
      let newdataSource = [...state.dataSource];
      newdataSource = newdataSource.filter(el => el.key !== key);
      message.info('已删除' + key, 5);

      return {
        ...state,
        dataSource: newdataSource,
      }
    }
  },

}

function genData(total) {
  let data = [];
  for (let i = 0; i < total; i++) {
    data.push({
      key: i,
      name: 'John Brown',
      age: parseInt(Math.random() * 100),
      address: 'New York No. 1 Lake Park',
      editMode: false,
    })
  }
  return data;
}
