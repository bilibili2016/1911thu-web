import { isNull } from 'lodash'
import { storeLog as log } from '~/lib/core/logger'
import { store as persistStore } from '~/lib/core/store'
import { auth, ServerError } from '~/lib/v1_sdk'
// import { message } from '~/lib/core/message'
persistStore.defaults({
  user: null,
  token: null,
  gid: null,
  kid: null,
  productsNum: null,
  cindex: null
})
let user = persistStore.get('user')
let token = persistStore.get('token')
let gid = persistStore.get('gid')
let kid = persistStore.get('kid')
let productsNum = persistStore.get('productsNum')

export const MUTATION = {
  signIn: 'sign-in',
  signOut: 'sign-out',
  refresh: 'refresh',
  me: 'me',
  setGid: 'set-gid',
  setKid: 'set-kid',
  setProductsNum: 'set-productsNum'
}
export const state = () => ({
  user,
  token,
  gid,
  // nid,
  kid,
  productsNum
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
  [MUTATION.setGid](state, { gid }) {
    state.gid = gid
  },
  [MUTATION.setKid](state, { kid }) {
    state.kid = kid
  },
  [MUTATION.setProductsNum](state, { productsNum }) {
    state.productsNum = productsNum
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
  }
}
