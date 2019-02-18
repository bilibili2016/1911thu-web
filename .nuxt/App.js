import Vue from 'vue'


import '../assets/style/element.scss'

import '../assets/style/icon.scss'

import '../assets/style/main.scss'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"1911学堂-致力于终身教育的互联网学校","meta":[{"charset":"utf-8"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"name":"renderer","content":"webkit"},{"hid":"description","name":"description","content":"1911学堂-致力于终身教育的互联网学校"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"http:\u002F\u002Fstatic-image.1911edu.com\u002Ffavicon.png"},{"rel":"stylesheet","href":"https:\u002F\u002Fg.alicdn.com\u002Fde\u002Fprismplayer\u002F2.7.2\u002Fskins\u002Fdefault\u002Faliplayer-min.css"}],"script":[{"src":"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?b3d07e5a1ff80ed44d2a56cc704327ea","async":true},{"src":"http:\u002F\u002Fjs.1911edu.com\u002Fjquery-1.11.3.min.js","async":true},{"src":"http:\u002F\u002Fjs.1911edu.com\u002Faliplayer-h5-min.js","async":true},{"src":"http:\u002F\u002Fres.wx.qq.com\u002Fconnect\u002Fzh_CN\u002Fhtmledition\u002Fjs\u002FwxLogin.js","async":true},{"src":"http:\u002F\u002Fjs.1911edu.com\u002Fsocket.io.js","async":true}],"style":[]},
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

