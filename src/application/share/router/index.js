
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/share/aa',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})