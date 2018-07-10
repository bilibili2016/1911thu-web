import { isNull } from 'lodash'
import { storeLog as log } from '~/lib/core/logger'
import { store as persistStore } from '~/lib/core/store'
import { auth, ServerError } from '~/lib/v1_sdk'
// import { message } from '~/lib/core/message'
persistStore.defaults({
  user: null,
  token: null,
  cid: null,
  cg: null,
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
  cindex: null
})
let user = persistStore.get('user')
let token = persistStore.get('token')
let cid = persistStore.get('cid')
let cg = persistStore.get('cg')
let cindex = persistStore.get('cindex')
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

export const MUTATION = {
  signIn: 'sign-in',
  signOut: 'sign-out',
  refresh: 'refresh',
  me: 'me',
  setCid: 'set-cid',
  setCg: 'set-cg',
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
  setTid: 'set-tid'
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
  cindex,
  tid,
  cg
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
  [MUTATION.setCid](state, { cid, cindex, pid, kid }) {
    state.cid = cid
    state.cindex = cindex
    state.pid = pid
    state.kid = kid
  },
  [MUTATION.setCg](state, { cg }) {
    state.cg = cg
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
  }
}
export const actions = {
  // 单点登录标记
  async setDid({ commit, state }, { dids }) {
    try {
      let did = dids
      console.log(did, 'did')
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
  // 设置点击tab分类大类id 小类id 以及大类的index
  async setCid({ commit, state }, { cids, indexs, pids, kids }) {
    try {
      let [cid, cindex, pid, kid] = [cids, indexs, pids, kids]
      persistStore.set('cid', cid)
      persistStore.set('cindex', cindex)
      persistStore.set('pid', pid)
      persistStore.set('kid', kid)
      commit(MUTATION.setCid, {
        cid,
        cindex,
        pid,
        kid
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
  // 设置category 传入类型 （tab进入,经典课程，免费课程,选课)
  async setCg({ commit, state }, { cgs }) {
    try {
      let cg = cgs
      persistStore.set('cg', cg)
      commit(MUTATION.setCg, {
        cg
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
  }
}
