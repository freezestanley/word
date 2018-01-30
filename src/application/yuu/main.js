
import '@/application/base'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from '@/store'
import {axioshttp} from '@/widget'
import Vuex from 'vuex'
import { ToastPlugin } from 'vux'

Vue.use(Vuex)
Vue.use(ToastPlugin)

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  // store,
  router,
  template: '<App/>',
  components: { App }
})

axioshttp(app)
