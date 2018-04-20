// import tool from './aa'
import mask from '@/components/base/axa-mask'
import Vue from 'vue'
export default {
  install (Vue, options = {}) {
    const VueMask = Vue.extend(mask)
    let mask = null
    // function doit () {
    //   return new Promise((resolve) => {
    //     debugger
    //     // 第一次调用
    //     if (!loading) {
    //       loading = new VueLoading()
    //       // 手动创建一个未挂载的实例
    //       loading.$mount()
    //       // 挂载
    //       document.querySelector(options.container || 'body').appendChild(loading.$el)
    //     }
    //     resolve()
    //   })
    // }

    if (!mask) {
      mask = new VueMask()
      // 手动创建一个未挂载的实例
      mask.$mount()
      // 挂载
      document.querySelector(options.container || 'body').appendChild(mask.$el)
    }
    let doit = {}
    doit.hide = () => mask.hide()

    doit.show = () => mask.show()

    Vue.mask = Vue.prototype.$mask = doit
  }
}