// import tool from './aa'
import Dialog from '@/components/base/axa-dialog'
import Vue from 'vue'
export default {
  install (Vue, options = {}) {
    const VueDialog = Vue.extend(Dialog)
    let dialog = null
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

    if (!dialog) {
      dialog = new VueDialog()
      // 手动创建一个未挂载的实例
      dialog.$mount()
      // 挂载
      document.querySelector(options.container || 'body').appendChild(dialog.$el)
    }
    let doit = {}
    doit.hide = (data) => dialog.hide(data)

    doit.show = (data) => dialog.show(data)

    Vue.dialog = Vue.prototype.$dialog = doit
  }
}
