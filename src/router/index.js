import Vue from 'vue'
import Router from 'vue-router'
import nknIndex from '@/page/index'
import logo from '@/page/logo'
import download from '@/page/download'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: nknIndex
    },
    {
      path: '/en',
      name: 'en',
      component: nknIndex
    },
    {
      path: '/zh',
      name: 'zh',
      component: nknIndex
    },
    {
      path: '/jp',
      name: 'jp',
      component: nknIndex
    },
    {
      path: '/kr',
      name: 'kr',
      component: nknIndex
    },

    {
      path: '/logo',
      name: 'logo',
      component: logo
    },
    {
      path: '/logo/en',
      name: 'logo',
      component: logo
    },
    {
      path: '/logo/zh',
      name: 'logo',
      component: logo
    },
    {
      path: '/logo/jp',
      name: 'logo',
      component: logo
    },
    {
      path: '/logo/kr',
      name: 'logo',
      component: nknIndex
    },
    {
      path: '/download',
      name: 'download',
      component: download
    }
  ]
})
