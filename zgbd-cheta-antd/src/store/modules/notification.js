import Vue from 'vue'

const notification = {
  state: {
    notification: {}
  },

  mutations: {
    SET_NOTIFICATION: (state, notification) => {
      state.notification = notification
    },
  },
  actions: {
    // 设置消息
    SetNotification({ commit }, data) {
      commit('SET_NOTIFICATION', data)
      Vue.ls.set('NOTIFICATION', data, 7 * 24 * 60 * 60 * 1000)
    },
  }
}

export default notification