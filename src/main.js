// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './polyfill'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import axios from 'axios'

// implement Vuex Store in main application
import store from './store'

// todo
// cssVars()

Vue.use(BootstrapVue)

// FortAwesome Vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelopeOpen)
library.add(faLock)
library.add(faEye)
library.add(faEyeSlash)
library.add(faSignOutAlt)
library.add(faUser)
library.add(faCog)
library.add(faBell)
library.add(faTwitter)
library.add(faFacebook)
library.add(faYoutubeSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// End FortAwesome Vue

// Vue Authentication Header
Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer " + token
}
// End Vue Authentication Header

/* eslint-disable no-new */
new Vue({
  // implement store
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
