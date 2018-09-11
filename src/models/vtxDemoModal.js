
export default {
  namespace: 'vtxModalM',
  state: {
    visible: false,
    closable: true,
    title: 'vtx mode modal',
  },
  reducers: {
    updateState(state, action) {
      return { ...state, visible: !state.visible };
    },
  },
  effects: {
  },
  subscriptions: {},
};
