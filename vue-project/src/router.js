import VueRouter from 'vue-router'
import HomeContainer from './components/tabBar/HomeContainer.vue'
import Member from './components/tabBar/MemberContainer.vue'
import Cart from './components/tabBar/CartContainer.vue'
import Search from './components/tabBar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

let router = new VueRouter({
  routes: [
  	{path: '/', redirect: '/home'},
  	{path: '/home', component: HomeContainer},
  	{path: '/member', component: Member},
  	{path: '/cart', component: Cart},
  	{path: '/search', component: Search},
  	{path: '/home/news', component: NewsList},
  	{path: '/home/newsinfo/:id', component: NewsInfo},
  ],
  linkActiveClass: 'mui-active'
})

export default router