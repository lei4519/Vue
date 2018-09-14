import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://47.89.21.179:8080';

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'
import app from './app.vue'


let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

