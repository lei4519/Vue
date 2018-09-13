import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueRouter)
Vue.use(MintUI)

let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

