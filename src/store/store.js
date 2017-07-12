import Vuex from 'vuex'
import Vue from 'vue'

import * as logsAction from '../dataservice/service-actions/logs-action.js'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    logs: logsAction.getLogs
  },
  mutations: {
    INCREMENT (state) {
      state.counter ++
    }
  }
})

export default store
