import * as types from '../mutation-types'

const state = {
  userState: '111'
}

const getters = {
  login: (state) => state.userState
}
const actions = {
  userlogin ({ commit, state }, bool) {
    commit(types.USER_LOGIN, bool)
  }
}
const mutations = {
  [types.USER_LOGIN] (state, bool) {
    state.userState = bool
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
