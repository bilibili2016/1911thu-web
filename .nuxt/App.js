import Vue from 'vue'


import '../assets/style/element.scss'

import '../assets/style/icon.scss'

import '../assets/style/main.scss'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"1911学堂","meta":[{"charset":"utf-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"name":"renderer","content":"webkit"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"1911学堂"}],"link":[{"rel":"stylesheet","href":"http:\u002F\u002Fimgcache.qq.com\u002Fopen\u002Fqcloud\u002Fvideo\u002Ftcplayer\u002Ftcplayer.css"}],"script":[{"src":"http:\u002F\u002Fimgcache.qq.com\u002Fopen\u002Fqcloud\u002Fvideo\u002Ftcplayer\u002Ftcplayer.min.js","async":true},{"src":"http:\u002F\u002Fparq881t8.bkt.clouddn.com\u002Fjquery-1.11.3.min.js","async":true},{"src":"http:\u002F\u002Fres.wx.qq.com\u002Fconnect\u002Fzh_CN\u002Fhtmledition\u002Fjs\u002FwxLogin.js","async":true},{"src":"https:\u002F\u002Fcdn.bootcss.com\u002Fsocket.io\u002F2.0.3\u002Fsocket.io.js","async":true}],"style":[]},
  render(h, props) {
    
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
  
  methods: {
    
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
    
  }
}

