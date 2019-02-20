// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animated from 'animate.css'
// import VueI18n from 'vue-i18n'
// import enLocale from './lang/en'
// import zhLocale from './lang/zh'
// Vue.use(VueI18n)
// Vue.config.lang = 'zh'
// Vue.locale('zh', zhLocale)
// Vue.locale('en', enLocale)
Vue.config.productionTip = false
// require('./assets/css/bootstrap.min.css')
require('./assets/index.css')
Vue.use(animated)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
