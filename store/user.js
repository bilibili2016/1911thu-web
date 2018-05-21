

import { isNull } from 'lodash'
import { storeLog as log } from '~/lib/core/logger'
import { store as persistStore } from '~/lib/core/store'
import { ServerError } from '~/lib/v1_sdk'
persistStore.defaults({
  uid: null
})
let uid = persistStore.get('uid')
export const MUTATION = {
  setUid: 'set-uid'
}
export const state = () => ({
  uid
})
export const getters = {
  isAuthenticated (state) {
    return !isNull(state.uid)
  }
}
export const mutations = {
  [MUTATION.setUid] (state, { uid, username }) {
    state.uid = uid
    state.username = username
  }
}
export const actions = {
  async setUid ({ commit, state }, { id, name }) {
    try {
      let uid = id
      let username = name
      persistStore.set('uid', uid)
      persistStore.set('name', username)
      commit(MUTATION.setUid, { uid, username })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return uid
  }
}
