/*
 * @Author: Allasm98.zhaoliang
 * @Date: 2018-04-26 18:06:23
 * @Last Modified by: Allasm98.zhaoliang
 * @Last Modified time: 2018-07-06 09:35:45
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
  did: null,
  pid: null,
  gid: null,
  hsg: null,
  nid: null,
  kid: null,
  isShowTip: null,
  productsNum: null,
  number: null,
  index: null,
  tid: null,
  isCollection: null
})
let user = persistStore.get('user')
let token = persistStore.get('token')
let cid = persistStore.get('cid')
let pid = persistStore.get('pid')
let did = persistStore.get('did')
let gid = persistStore.get('gid')
let hsg = persistStore.get('hsg')
let nid = persistStore.get('nid')
let kid = persistStore.get('kid')
let isShowTip = persistStore.get('isShowTip')
let productsNum = persistStore.get('productsNum')
let number = persistStore.get('number')
let index = persistStore.get('index')
let tid = persistStore.get('tid')
let isCollection = persistStore.get('isCollection')

export const MUTATION = {
  signIn: 'sign-in',
  signOut: 'sign-out',
  refresh: 'refresh',
  me: 'me',
  setCid: 'set-cid',
  setPid: 'set-pid',
  setDid: 'set-did',
  setGid: 'set-gid',
  setHsg: 'set-hsg',
  setNid: 'set-nid',
  setKid: 'set-kid',
  setIsShowTip: 'set-isShowTip',
  setProductsNum: 'set-productsNum',
  setNumber: 'set-number',
  setIndex: 'set-index',
  setTid: 'set-tid',
  setIsCollection: 'set-isCollection'
}
export const state = () => ({
  user,
  token,
  cid,
  did,
  pid,
  gid,
  hsg,
  nid,
  kid,
  isShowTip,
  productsNum,
  number,
  index,
  tid,
  isCollection
})
export const getters = {
  isAuthenticated(state) {
    return !isNull(state.token)
  },
  getProductsNum(state) {
    return state.productsNum
  },
  isShowTip(state) {
    return state.isShowTip
  },
  isCollection(state) {
    return state.isCollection
  }
}

export const mutations = {
  [MUTATION.signIn](state, { token }) {
    state.token = token
  },
  [MUTATION.signOut](state) {
    state.token = null
  },
  [MUTATION.refresh](state, { token }) {
    state.token = token
  },
  [MUTATION.me](state, { user }) {
    state.user = user
  },
  [MUTATION.setCid](state, { cid }) {
    state.cid = cid
  },
  [MUTATION.setPid](state, { pid }) {
    state.pid = pid
  },
  [MUTATION.setDid](state, { did }) {
    state.did = did
  },
  [MUTATION.setGid](state, { gid }) {
    state.gid = gid
  },
  [MUTATION.setHsg](state, { hsg }) {
    state.hsg = hsg
  },
  [MUTATION.setNid](state, { nid }) {
    state.nid = nid
  },
  [MUTATION.setKid](state, { kid }) {
    state.kid = kid
  },
  [MUTATION.setIsShowTip](state, { isShowTip }) {
    state.isShowTip = isShowTip
  },
  [MUTATION.setProductsNum](state, { productsNum }) {
    state.productsNum = productsNum
  },
  [MUTATION.setNumber](state, { number }) {
    state.number = number
  },
  [MUTATION.setIndex](state, { index }) {
    state.index = index
  },
  [MUTATION.setTid](state, { tid }) {
    state.tid = tid
  },
  [MUTATION.setIsCollection](state, { isCollection }) {
    state.isCollection = isCollection
  }
}
export const actions = {
  async setDid({ commit, state }, { dids }) {
    try {
      let did = dids
      persistStore.set('did', did)
      commit(MUTATION.setDid, {
        did
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return did
  },
  async setToken({ commit, state }, { tokens }) {
    try {
      let token = tokens
      persistStore.set('token', token)
      commit(MUTATION.signIn, {
        token
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return token
  },

  async signIn({ commit, state }, { phonenum, ectpwd, loginTypes }) {
    let user
    try {
      let tokens = await auth.signIns({
        phonenum,
        ectpwd,
        loginTypes
      })
      // if (!tokens.data.token) {
      //   return tokens
      // }
      if (tokens.status === 0) {
        token = tokens.data.token
        persistStore.set('token', token)
        // 更新 state
        commit(MUTATION.signIn, {
          token
        })
      }
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

  async signOut({ commit, state }) {
    try {
      await auth.signOut()
      persistStore.clearAll()

      commit(MUTATION.signOut)
    } catch (e) {
      log.error(e)
    }
  },

  async companySignIn({ commit, state }, { email, password }) {
    let user
    try {
      let tokens = await auth.companySignIn({
        email,
        password
      })
      token = 'JWT ' + tokens.token
      persistStore.set('token', token)
      commit(MUTATION.signIn, {
        token,
        user
      })
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
  async setCid({ commit, state }, { cids }) {
    try {
      let cid = cids
      persistStore.set('cid', cid)
      commit(MUTATION.setCid, {
        cid
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return cid
  },
  async setPid({ commit, state }, { pids }) {
    try {
      let pid = pids
      persistStore.set('pid', pid)
      commit(MUTATION.setPid, {
        pid
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return pid
  },
  async setGid({ commit, state }, { gids }) {
    try {
      let gid = gids
      persistStore.set('gid', gid)
      commit(MUTATION.setGid, {
        gid
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return gid
  },
  async setHsg({ commit, state }, { hsgs }) {
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
  },
  async setNid({ commit, state }, { nids }) {
    try {
      let nid = nids
      persistStore.set('nid', nid)
      commit(MUTATION.setNid, {
        nid
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return gid
  },
  async setKid({ commit, state }, { kids }) {
    try {
      let kid = kids
      persistStore.set('kid', kid)
      commit(MUTATION.setKid, {
        kid
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return kid
  },
  async setIsShowTip({ commit, state }, { isShowTips }) {
    try {
      let isShowTip = isShowTips
      persistStore.set('isShowTip', isShowTip)
      commit(MUTATION.setIsShowTip, {
        isShowTip
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return isShowTip
  },
  async setProductsNum({ commit, state }, { pn }) {
    try {
      let productsNum = pn
      persistStore.set('productsNum', productsNum)
      commit(MUTATION.setProductsNum, {
        productsNum
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return productsNum
  },
  async setNumber({ commit, state }, { numbers }) {
    try {
      let number = numbers
      persistStore.set('number', number)
      commit(MUTATION.setNumber, {
        number
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return productsNum
  },
  async setIndex({ commit, state }, { indexs }) {
    try {
      let index = indexs
      persistStore.set('index', index)
      commit(MUTATION.setIndex, {
        index
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return gid
  },
  async setTid({ commit, state }, { tids }) {
    // console.log(tids)
    try {
      let tid = tids
      persistStore.set('tid', tid)
      commit(MUTATION.setTid, {
        tid
      })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return tid
  },
  async setIsCollection({ commit, state }, { isCollections }) {
    try {
      let isCollection = isCollections
      persistStore.set('isCollection', isCollection)
      commit(MUTATION.setIsCollection, { isCollection })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return isCollection
  }
}
