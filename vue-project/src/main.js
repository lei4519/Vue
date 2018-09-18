import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from './router.js'

import VuePreview from 'vue-preview'

Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://47.89.21.179:8080'
Vue.http.options.emulateJSON = true

// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
  },
  mutations: {
    addToCart(state, goodsInfo) {
      let cartItem = state.cart.find(item => item.id === goodsInfo.id)
      if (cartItem) {
        cartItem.count += parseInt(goodsInfo.count)
      } else {
        state.cart.push(goodsInfo)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateCartById(state, goodsInfo) {
      let cartItem = state.cart.find(item => item.id === goodsInfo.id)
      cartItem.count = goodsInfo.count
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    deleteCartInfo(state, id) {
      let i = state.cart.findIndex(item => item.id === id)
      state.cart.splice(i, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    updateSelected(state, selected) {
      let cartItem = state.cart.find(item => item.id === selected.id)
      cartItem.selected = selected.selected
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  getters: {
    getAllCount(state) {
      let c = 0
      state.cart.forEach(item => c += item.count)
      return c
    },
    getGoodsSelected(state) {
      let o = {}
      state.cart.forEach(item => o[item.id] = item.selected)
      return o
    },
    getCountAndAmount(state) {
      let o = {count: 0, amount: 0}
      state.cart.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += (item.price * item.count)
        }
      })
      return o
    }

  }
})


import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'
import app from './app.vue'

Vue.use(MintUI)

import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

let vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store
})

