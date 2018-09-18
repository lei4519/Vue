<template>
    <div class="goodsinfo-container">
        <!-- 商品轮播图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :sildeList="sildeList"></swipe>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <span class="old_price">¥{{ goodsInfo.market_price }}</span>&nbsp;&nbsp;
                        销售价: <span class="now_price">¥{{ goodsInfo.sell_price }}</span>
                    </p>
                    <div class="amount">购买数量:
                        <numbox :count="goodsInfo.stock_quantity" @getCount="getSelectedCount"></numbox>
                    </div>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!-- 商品详情区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: {{ goodsInfo.goods_no }}</p>
                    <p>库存情况: {{ goodsInfo.stock_quantity }}件</p>
                    <p>上架时间: {{ goodsInfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>

        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import swipe from '../subcomponents/swipe.vue'
  import numbox from '../subcomponents/goodsinfo_numbox.vue'

  export default {
    data() {
      return {
        sildeList: [],
        id: this.$route.params.id,
        goodsInfo: {},
        selectedCount: 1,
        ballFlag: false
      }
    },
    methods: {
      getSwipe() {
        this.$http.get('api/getlunbo')
          .then(result => {
            if (result.body.status === 0) {
              this.sildeList = result.body.message
            } else {
              Toast('加载数据失败')
            }
          })
      },
      async getGoodsInfo() {
        let result = await this.$http.get(`api/goods/getinfo/${this.id}`)
        if (result.body.status === 0) {
          this.goodsInfo = result.body.message[0]
        } else {
          Toast('加载数据失败')
        }
      },
      goDesc(id) {
        this.$router.push({name: 'goodsdesc', params: {id}})
      },
      goComment(id) {
        this.$router.push({name: 'goodscomment', params: {id}})
      },
      addToCart() {
        this.ballFlag = !this.ballFlag
        let gInfo = {
          id: this.id,
          price: this.goodsInfo.sell_price,
          count: this.selectedCount,
          stockQuantity: this.goodsInfo.stock_quantity,
          title: this.goodsInfo.title,
          selected: true
        }
        this.$store.commit('addToCart', gInfo)
      },
      beforeEnter(el) {
        el.style.transform = 'translate(0, 0)'
      },
      enter(el, done) {
        const ballPosition = this.$refs.ball.getBoundingClientRect()
        const badgePosition = document.getElementById('badge').getBoundingClientRect()
        const xDist = badgePosition.left - ballPosition.left
        const yDist = badgePosition.top - ballPosition.top

        el.style.transform = `translate(${xDist}px, ${yDist}px)`
        el.style.transition = 'all 1s cubic-bezier(0.4, -0.3, 1, 0.68)'
        done()
      },
      afterEnter(el) {
        this.ballFlag = !this.ballFlag
      },
      getSelectedCount(count) {
        this.selectedCount = count
      }
    },
    created() {
      this.getSwipe()
      this.getGoodsInfo()
    },
    components: {
      swipe,
      numbox
    }
  }
</script>

<style lang="scss" scoped>
    .goodsinfo-container {
        background-color: #ccc;
        overflow: hidden;
        .price {
            .old_price {
                text-decoration: line-through;
            }
            .now_price {
                color: red;
                font-size: 16px;
                font-weight: bold;
            }
        }
        .amount {
            margin-bottom: 20px;
            .mui-numbox {
                height: 30px;
            }
        }
        .mui-card-footer {
            display: block;
            button {
                margin: 15px 0;
            }
        }

        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: #f00;
            position: absolute;
            z-index: 99;
            top: 404px;
            left: 141px;
        }
    }
</style>