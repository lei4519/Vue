import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './app.vue'

import router from './router'

Vue.use(VueRouter)


let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

