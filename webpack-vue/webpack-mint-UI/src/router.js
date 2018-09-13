import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'
import VueRouter from 'vue-router'

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

export default router