import Vue from 'vue'
import app from './app.vue'
import router from './router'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 完整导入mint-UI
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入mint-UI
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button)

import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'


let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

