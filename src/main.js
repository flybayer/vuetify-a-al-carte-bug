require('../node_modules/vuetify/src/stylus/app.styl')

import Vue from 'vue'
import {
 Vuetify,
 VApp,
 VNavigationDrawer,
 VFooter,
 VList,
 VBtn
} from 'vuetify'

Vue.use(Vuetify, {
 components: {
   VApp,
   VNavigationDrawer,
   VFooter,
   VList,
   VBtn
 }
})

import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
