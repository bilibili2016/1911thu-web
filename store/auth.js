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
  pid: null,
  gid: null,
  kid: null,
  productsNum: null,
  cindex: null,
  personalForm: null
})
let user = persistStore.get('user')
let token = persistStore.get('token')
let cid = persistStore.get('cid')
let cg = persistStore.get('cg')
let cindex = persistStore.get('cindex')
let pid = persistStore.get('pid')
let gid = persistStore.get('gid')
let kid = persistStore.get('kid')
let productsNum = persistStore.get('productsNum')
let personalForm = persistStore.get('personalForm')

export const MUTATION = {
  signIn: 'sign-in',
  signOut: 'sign-out',
  refresh: 'refresh',
  me: 'me',
  setCid: 'set-cid',
  setCg: 'set-cg',
  setPid: 'set-pid',
  setGid: 'set-gid',
  setKid: 'set-kid',
  setProductsNum: 'set-productsNum',
  setPersonalForm: 'set-personalForm'
}
export const state = () => ({
  user,
  token,
  cid,
  pid,
  gid,
  // nid,
  kid,
  productsNum,
  cindex,
  cg,
  personalForm
})
export const getters = {
  isAuthenticated(state) {
    return !isNull(state.token)
  },
  getProductsNum(state) {
    return state.productsNum
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
  [MUTATION.setGid](state, { gid }) {
    state.gid = gid
  },
  [MUTATION.setKid](state, { kid }) {
    state.kid = kid
  },
  [MUTATION.setProductsNum](state, { productsNum }) {
    state.productsNum = productsNum
  },
  [MUTATION.setPersonalForm](state, { personalForm }) {
    state.personalForm = personalForm
  }
}
export const actions = {
  async setToken({ commit, state }, { tokens }) {
    try {
      let token = tokens
      persistStore.set('token', token)
      commit(MUTATION.signIn, { token })
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
        commit(MUTATION.signIn, { token })
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
  // 手机验证码     登录
  async signInmobile({ commit, state }, { phones, loginTypes, codes }) {
    let user
    try {
      let tokens = await auth.signInsmobile({
        phones,
        loginTypes,
        codes
      })
      // if (!tokens.data.token) {
      //   return tokens
      // }
      if (tokens.status === 0) {
        token = tokens.data.token
        persistStore.set('token', token)
        // 更新 state
        commit(MUTATION.signIn, { token })
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
  }, // 设置点击tab分类大类id 小类id 以及大类的index
  async setCid({ commit, state }, { cids, indexs, pids, kids }) {
    try {
      let [cid, cindex, pid, kid] = [cids, indexs, pids, kids]
      persistStore.set('cid', cid)
      persistStore.set('cindex', cindex)
      persistStore.set('pid', pid)
      persistStore.set('kid', kid)
      commit(MUTATION.setCid, { cid, cindex, pid, kid })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return cid
  }, // 设置category 传入类型 （tab进入,经典课程，免费课程,选课)
  async setCg({ commit, state }, { cgs }) {
    try {
      let cg = cgs
      persistStore.set('cg', cg)
      commit(MUTATION.setCg, { cg })
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
  async setGid({ commit, state }, { gids }) {
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
  async setKid({ commit, state }, { kids }) {
    try {
      let kid = kids
      persistStore.set('kid', kid)
      commit(MUTATION.setKid, { kid })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return kid
  },
  async setProductsNum({ commit, state }, { pn }) {
    try {
      let productsNum = pn
      persistStore.set('productsNum', productsNum)
      commit(MUTATION.setProductsNum, { productsNum })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return productsNum
  },
  async setPersonalForm({ commit, state }, { personalForms }) {
    try {
      let personalForm = personalForms
      persistStore.set('personalForm', personalForm)
      commit(MUTATION.setPersonalForm, { personalForm })
    } catch (e) {
      if (e instanceof ServerError) {
        log.error(e)
      } else {
        throw e
      }
    }
    return personalForm
  }
}
