import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import axios from 'axios'

import ui from './modules/ui'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  // actions,
  // getters,
  state: {
    publicDictionary: ''
  },
  modules: {
    ui, user
  },
  actions: {
    getStore ({ commit, state }, bool) {
      commit(types.LOADIND_STORE)
    },
    setStore ({ commit, state }) {
      commit(types.SET_STORE)
    },
    dictionarStore ({ commit }, callback) {
    }
  },
  mutations: {
    [types.LOADIND_STORE] (state) {
    },
    [types.SET_STORE] (state) {
    },
    setDictionary (state, value) {
    }
  },
  strict: false,
  plugins: []
})

export default store
