import Vue from 'vue'
import Vuex from 'vuex'

import Config from './config'

Vue.use(Vuex)

class Util {
  constructor () {
    Vue.config.productionTip = process.env.NODE_ENV !== 'production'

    this.config = new Config()
  }
}

export default new Util()

export * from './logger.js'
