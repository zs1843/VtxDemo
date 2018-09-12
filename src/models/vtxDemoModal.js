
export default {
  namespace: 'vtxModalM',
  state: {
    visible: false,
    closable: true,
    title: 'vtx mode modal',
    age: 0,
    username: '',
    address: '',
  },
  reducers: {
    showModal(state, action) {
      return { ...state, visible: !state.visible };
    },
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
  },
  subscriptions: {},
};
