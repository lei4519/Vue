import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './app.vue'
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

let router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: account,
      children: [
        {path: 'login', component: login},
        {path: 'register', component: register},
      ]
    },
    {path: '/goodsList', component: goodsList}
  ]
})

let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})

