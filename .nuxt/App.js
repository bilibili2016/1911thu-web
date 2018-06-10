import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/style/element.scss'

import '../assets/style/icon.scss'

import '../assets/style/main.scss'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"1911学堂","meta":[{"charset":"utf-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"name":"renderer","content":"webkit"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"1911学堂"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"http:\u002F\u002Fimgcache.qq.com\u002Fopen\u002Fqcloud\u002Fvideo\u002Ftcplayer\u002Ftcplayer.css"}],"script":[{"src":"https:\u002F\u002Fcdn.bootcss.com\u002Fjquery\u002F3.2.1\u002Fjquery.min.js","async":true},{"src":"http:\u002F\u002Fimgcache.qq.com\u002Fopen\u002Fqcloud\u002Fvideo\u002Ftcplayer\u002Flib\u002Fhls.min.0.8.8.js","async":true},{"src":"http:\u002F\u002Fimgcache.qq.com\u002Fopen\u002Fqcloud\u002Fvideo\u002Ftcplayer\u002Ftcplayer.min.js","async":true},{"src":"http:\u002F\u002Fres.wx.qq.com\u002Fconnect\u002Fzh_CN\u002Fhtmledition\u002Fjs\u002FwxLogin.js","async":true}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

