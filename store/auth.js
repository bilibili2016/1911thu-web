/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-26 18:06:23
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-06-05 10:22:58
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
  token: null,
  cid: null,
  pid: null,
  gid: null,
  hsg: null
})
let user = persistStore.get('user')
let token = persistStore.get('token')
let cid = persistStore.get('cid')
let pid = persistStore.get('pid')
let gid = persistStore.get('gid')
let hsg = persistStore.get('hsg')


export const MUTATION = {
  signIn: 'sign-in',
  signOut: 'sign-out',
  refresh: 'refresh',
  me: 'me',
  setCid: 'set-cid',
  setPid: 'set-pid',
  setGid: 'set-gid',
  setHsg: 'set-hsg'

}
export const state = () => ({
  user,
  token,
  cid,
  pid,
  gid,
  hsg
})
export const getters = {
  isAuthenticated (state) {
    return !isNull(state.token)
  }
}
export const mutations = {
  [MUTATION.signIn] (state, { token }) {
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
  },
  [MUTATION.setCid](state, { cid }) {
    state.cid = cid
  },
  [MUTATION.setPid](state, { pid }) {
    state.pid = pid
  },
  [MUTATION.setGid](state, {
    gid
  }) {
    state.gid = gid
  },
  [MUTATION.setHsg](state, {
    hsg
  }) {
    state.hsg = hsg
  },

}
export const actions = {
  async signIn ({ commit, state }, { tokens }) {
    let user
    try {
      // let tokens = await auth.workerSignIn({ username, password })
      // token = 'JWT ' + tokens.token
      let token = tokens
      console.log(token, '这是token')
      persistStore.set('token', token)

      // 更新 state
      commit(MUTATION.signIn, { token })


    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return user
  },
  async signOut ({ commit, state }, { tokens }) {
    let user
    try {
      // let tokens = await auth.workerSignIn({ username, password })
      // token = 'JWT ' + tokens.tokenken
      let token = tokens
      persistStore.set('token', token)
      // 更新 state
      commit(MUTATION.signIn, { token })
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
  },
  async setCid ({ commit, state }, { cids }) {
    try {
      let cid = cids
      persistStore.set('cid', cid)
      commit(MUTATION.setCid, { cid })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return cid
  },
  async setPid ({ commit, state }, { pids }) {
    try {
      let pid = pids
      persistStore.set('pid', pid)
      commit(MUTATION.setPid, { pid })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return pid
  },
  async setGid ({ commit, state }, { gids }) {
    try {
      let gid = gids
      persistStore.set('gid', gid)
      commit(MUTATION.setGid, { gid })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return gid
  },
   async setHsg ({ commit, state }, { hsgs }) {
    try {
      let hsg = hsgs


      persistStore.set('hsg', hsg)


      commit(MUTATION.setHsg, {
        hsg
      })

    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return gid
  }
}
