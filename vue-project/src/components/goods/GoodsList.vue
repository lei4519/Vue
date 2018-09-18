<template>
    <div class="goods-list">
        <div class="goods-item" v-for="(item, i) in goodsList" :key="i" @click="goDetail(item.id)">
            <img :src="`/src/img/1 (${i+1}).jpg`">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥{{ item.sell_price }}</span>
                    <span class="old">¥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span><span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getGoodsList" v-show="flag">加载更多</mt-button>
        <p class="noMore" v-if="!flag">没有更多数据了</p>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    data: () => ({
      pageIndex: 0,
      goodsList: [],
      flag: true
    }),
    methods: {
      getGoodsList() {
        this.pageIndex++
        this.$http.get(`api/getgoods?${this.pageIndex}`)
          .then(result => {
            if (result.body.status === 0) {
              if (result.body.message) {
                this.goodsList = this.goodsList.concat(result.body.message)
              } else {
                this.flag = false
              }
            } else {
              Toast('加载数据失败')
            }
          })
      },
      goDetail(id) {
        this.$router.push({name: 'goodsinfo', params: { id }})
      }
    },
    created() {
      this.getGoodsList()
    }
  }
</script>

<style lang="scss">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;
        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin-bottom: 7px;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img {
                width: 100%;
            }
            .title {
                font-size: 14px;
            }
            .info {
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 5px;
                }
                .price {
                    .now {
                        color: #f40;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 7px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
        .noMore {
            text-align: center;
            width: 100%;
        }
    }
</style>