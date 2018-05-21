

import { isNull } from 'lodash'
import { storeLog as log } from '~/lib/core/logger'
import { store as persistStore } from '~/lib/core/store'
import { auth, ServerError } from '~/lib/v1_sdk'
// import { message } from '~/lib/core/message'
persistStore.defaults({
  user: null,
  token: null
})
let user = persistStore.get('user')
let token = persistStore.get('token')
export const MUTATION = {
  signIn: 'sign-in',
  signOut: 'sign-out'
}
export const state = () => ({
  user,
  token
})
export const getters = {
  isAuthenticated (state) {
    return !isNull(state.token)
  }
}
export const mutations = {
  [MUTATION.signIn] (state, { token, user }) {
    state.user = user
    state.token = token
  },
  [MUTATION.signOut] (state) {
    state.user = null
    state.token = null
  }
}
export const actions = {
  async workSignIn ({ commit, state }, { username, password }) {
    let user
    try {
      let tokens = await auth.workerSignIn({ username, password })
      token = 'JWT ' + tokens.token
      persistStore.set('token', token)
      // 更新 state
      commit(MUTATION.signIn, { token, user })
      return tokens

    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return user
  },
  async signOut ({ commit, state }) {
    try {
      await auth.signOut()
      persistStore.set('token', null)
      commit(MUTATION.signOut)
    } catch (e) {
      log.error(e)
    }
  }
}
