/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-26 18:06:23
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-05-23 18:14:03
  * @File Type:  登陆的store
 * @Describe:
 */

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
  signOut: 'sign-out',
  refresh: 'refresh',
  me: 'me'
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
  },
  [MUTATION.refresh] (state, { token }) {
    state.token = token
  },
  [MUTATION.me] (state, { user }) {
    state.user = user
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
  async companySignIn ({ commit, state }, { email, password }) {
    let user
    try {
      let tokens = await auth.companySignIn({ email, password })
      token = 'JWT ' + tokens.token
      persistStore.set('token', token)
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
  }
}
