import { isNull } from 'lodash'
import { storeLog as log } from '~/lib/core/logger'
import { store as persistStore } from '~/lib/core/store'
import { auth, ServerError } from '~/lib/v1_sdk'
// import { message } from '~/lib/core/message'
persistStore.defaults({
  user: null,
  token: null,
  gid: null,
  // kid: null,
  productsNum: null
})
let user = persistStore.get('user')
let token = persistStore.get('token')
let gid = persistStore.get('gid')
// let kid = persistStore.get('kid')
let productsNum = persistStore.get('productsNum')
let closePay = false
export const MUTATION = {
  signIn: 'sign-in',
  signOut: 'sign-out',
  refresh: 'refresh',
  me: 'me',
  setGid: 'set-gid',
  setProductsNum: 'set-productsNum',
  setClosePay: 'setClosePay'
} // setKid: 'set-kid',
export const state = () => ({
  user,
  token,
  gid,
  // nid,
  // kid,
  productsNum,
  closePay
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
  }, // }, //   state.kid = kid // [MUTATION.setKid](state, { kid }) {
  [MUTATION.setProductsNum](state, { productsNum }) {
    state.productsNum = productsNum
  },
  [MUTATION.setClosePay](state, { closePay }) {
    state.closePay = closePay
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
  async signInmobile({ commit, state }, { phones, loginTypes, codes }) {
    // 手机验证码     登录
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
  async forgetPasswordAjax({ commit, state }, { phones, ectpwd, code }) {
    let user
    try {
      let tokens = await auth.forgetPasswordAjax({
        phones,
        ectpwd,
        code
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
  }, //   try { // async setKid({ commit, state }, { kids }) {
  //     let kid = kids
  //     persistStore.set('kid', kid)
  //     commit(MUTATION.setKid, { kid })
  //   } catch (e) {
  //     if (e instanceof ServerError) {
  //       log.error(e)
  //     } else {
  //       throw e
  //     }
  //   }
  //   return kid
  // },
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
