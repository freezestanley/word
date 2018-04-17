
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/index',
      name: 'index',
      components: {
        default: resolve => require(['@/application/main/word/index'], resolve)
      },
      meta: {
        requireAuth: true,
        title: '首页',
        rightMenu: null,
        leftMenu: {
          title: '返回',
          javascript: 'gobackbtn',
          params: 'go:recommend'
        }
      },
      Info: {
        description: '首页',
        param: {}
      }
    },
    {
      path: '/list',
      name: 'list',
      components: {
        default: resolve => require(['@/application/main/word/list'], resolve)
      },
      meta: {
        requireAuth: true,
        title: '列表页',
        rightMenu: null,
        leftMenu: {
          title: '返回',
          javascript: 'gobackbtn',
          params: ''
        }
      },
      Info: {
        description: '列表页',
        param: {}
      }
    }
  ]
})
