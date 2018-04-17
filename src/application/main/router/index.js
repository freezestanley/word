
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/gallery',
      name: 'gallery',
      components: {
        default: resolve => require(['@/application/base/gallery'], resolve)
      },
      meta: {
        requireAuth: true,
        title: '',
        rightMenu: null,
        leftMenu: {
          title: '返回',
          javascript: 'gobackbtn',
          params: 'go:recommend'
        }
      },
      Info: {
        description: '画布',
        param: {}
      }
    },
    {
      path: '/',
      name: 'entry',
      components: {
        default: resolve => require(['@/application/main/entry'], resolve)
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: resolve => require(['@/application/main/user'], resolve)
      }
    },
    {
      path: '/password',
      name: 'password',
      components: {
        default: resolve => require(['@/application/main/user/password'], resolve)
      }
    },
    {
      path: '/message',
      name: 'message',
      components: {
        default: resolve => require(['@/application/main/message'], resolve)
      }
    },
    {
      path: '/record',
      name: 'index',
      components: {
        default: resolve => require(['@/application/main/word/index'], resolve)
      }
    },
    {
      path: '/list',
      name: 'list',
      components: {
        default: resolve => require(['@/application/main/word/list'], resolve)
      }
    }
  ]
})
