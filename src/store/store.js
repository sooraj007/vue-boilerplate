import Vuex from 'vuex'
import Vue from 'vue'

import * as logsAction from '../dataservice/service-actions/logs-action.js'

Vue.use(Vuex)

var store = new Vuex.Store(***REMOVED***
  state: ***REMOVED***
    logs: logsAction.getLogs
***REMOVED***,
  mutations: ***REMOVED***
    INCREMENT (state) ***REMOVED***
      state.counter ++
  ***REMOVED***
***REMOVED***
***REMOVED***)

export default store
