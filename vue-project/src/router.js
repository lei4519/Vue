import VueRouter from 'vue-router'
import HomeContainer from './components/tabBar/HomeContainer.vue'
import Member from './components/tabBar/MemberContainer.vue'
import Cart from './components/tabBar/CartContainer.vue'
import Search from './components/tabBar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

let router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/member', component: Member},
    {path: '/cart', component: Cart},
    {path: '/search', component: Search},
    {path: '/home/news', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path: '/home/share', component: PhotoList},
    {path: '/home/shareinfo/:id', component: PhotoInfo},
    {path: '/home/buy', component: GoodsList},
    {path: '/home/buyinfo/:id', component: GoodsInfo, name: 'goodsinfo'},
    {path: '/home/buyinfo/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
    {path: '/home/buyinfo/goodscomment/:id', component: GoodsComment, name: 'goodscomment'}
  ],
  linkActiveClass: 'mui-active'
})

export default router