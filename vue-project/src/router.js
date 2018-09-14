import VueRouter from 'vue-router'
import HomeContainer from './components/tabBar/HomeContainer.vue'
import member from './components/tabBar/MemberContainer.vue'
import cart from './components/tabBar/CartContainer.vue'
import search from './components/tabBar/SearchContainer.vue'

let router = new VueRouter({
  routes: [
  	{path: '/', redirect: '/home'},
  	{path: '/home', component: HomeContainer},
  	{path: '/member', component: member},
  	{path: '/cart', component: cart},
  	{path: '/search', component: search},
  ],
  linkActiveClass: 'mui-active'
})

export default router