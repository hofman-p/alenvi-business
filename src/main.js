// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
require(`quasar/dist/quasar.ie`)
require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import axios from 'axios'
import VueBreadcrumbs from 'vue-breadcrumbs'

Vue.prototype.$http = axios;

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework
Vue.use(VueBreadcrumbs)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'


// Quasar.start(() => {
//   /* eslint-disable no-new */
//   new Vue({
//     el: '#alenvi-app',
//     router,
//     render: h => h(require('./App'))
//   })
// })
Quasar.start(() => {
  /* eslint-disable no-new */
  var root = new Vue({
    el: '#alenvi-app',
    router,
    render: h => h(require('./App'))
  })
  document.addEventListener('DOMContentLoaded', function () {
    root.$mount('#alenvi-app')
  })
})
