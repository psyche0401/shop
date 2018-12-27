import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    windHeight: 0,
    header: {
      mainHead: '',
      subHead: ''
    }
  },
  mutations: {
    windHeight (state, val) {
      state.windHeight = val
    },
    mainHead (state, val) {
      state.header.mainHead = val;
      state.header.subHead = ''
    },
    subHead (state, val) {
      state.header.subHead = val
    }
  }
})
