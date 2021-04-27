import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      count: 1,
    }
  },
  getters: {
    retrieveCount(state) {
      return [state.count];
    }
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    }
  }
})