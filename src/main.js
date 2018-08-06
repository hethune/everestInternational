/* Twitter Bootstrap JS (this could also be handled in an app.js file) */
require('bootstrap')

/* Vue */
import Vue from 'vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
/* iview css */
import 'iview/dist/styles/iview.css'


import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false


import { Button, Modal, Icon } from 'iview';
Vue.component('Button', Button);
Vue.component('Modal', Modal);
Vue.component('Icon', Icon);


/* App sass */
import './assets/style/app.scss'

/* App component */
import App from './scenes/App'

/* Auth plugin */
import Auth from './auth'
Vue.use(Auth)

/* global constant*/
import global_ from './global'
Vue.prototype.GLOBAL = global_

/**懒加载 */
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  loading: 'https://wechat-pics.fangpinduo.com/wehome/border/wehome_loading.gif',
  error: 'https://wechat-pics.fangpinduo.com/wehome/border/wehome_error.png'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // Attach the Vue instance to the window,
  // so it's available globally.
  created: function () {
    window.Vue = this
  },
  router,
  store,
  render: h => h(App)
})
