// import tool from './aa'
import load from '@/components/base/axa-loading'
import Vue from 'vue'
export default {
  install (Vue, options = {}) {
    const VueLoading = Vue.extend(load)
    let loading = null
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

    if (!loading) {
      loading = new VueLoading()
      // 手动创建一个未挂载的实例
      loading.$mount()
      // 挂载
      document.querySelector(options.container || 'body').appendChild(loading.$el)
    }
    let doit = {}
    doit.hide = () => loading.hide()

    doit.show = () => loading.show()

    Vue.loading = Vue.prototype.$loading = doit
  }
}