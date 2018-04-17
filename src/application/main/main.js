import '@/assets/scss/global.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import {axioshttp} from '@/widget'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import {translationsFan, translationsEn} from '@/language'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.config.devtools = true

// 点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.documentElement)

Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('FAN', translationsFan)
Vue.i18n.add('EN', translationsEn)
Vue.i18n.set('FAN')

router.beforeEach((to, from, next) => {
  next()
})

let app = new Vue({
  el: '#app',
  router,
  // store,
  mixins: [],
  template: '<App/>',
  components: { App },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
})

axioshttp(app)

export default app
