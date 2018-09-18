<template>
    <div class="cart-container">
        <div class="goods-list">
            <div class="mui-card" v-for="(item, i) in goodsInfo" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch @change="updateSelected(item.id, $store.getters.getGoodsSelected[item.id])"
                                   v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
                        <img :src="`/src/img/1 (${i+1}).jpg`">
                        <div class="info">
                            <h2 class="title">{{ item.title }}</h2>
                            <p>
                                <span class="price">¥{{ item.price }}</span>
                                <numbox :id="item.id" :num="goodsInfo[i].count"
                                        :count="goodsInfo[i].stockQuantity"></numbox>
                                <a href="#" @click.prevent="deleteGoods(item.id)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner clearing">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品 <span class="red">{{ $store.getters.getCountAndAmount.count }}</span> 件, 总价 <span class="red">¥{{ $store.getters.getCountAndAmount.amount }}</span>
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import numbox from '../subcomponents/cart_numbox.vue'

  export default {
    data() {
      return {
        goodsInfo: this.$store.state.cart
      }
    },
    methods: {
      deleteGoods(id) {
        this.$store.commit('deleteCartInfo', parseInt(id))
      },
      updateSelected(id, status) {
        this.$store.commit('updateSelected', {id, selected: status})
      }
    },
    components: {
      numbox
    }
  }
</script>

<style lang="scss" scoped>
    .cart-container {
        background-color: #eee;
        overflow: hidden;
        .goods-list {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                img {
                    width: 60px;
                    height: 60px;
                }
                .info {
                    .title {
                        font-size: 13px;
                        margin-bottom: 20px;
                    }
                    p {
                        margin: 0;
                        .price {
                            color: #f00;
                        }

                    }
                }
            }
        }
        .clearing {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .red {
                color: #f00;
                font-weight: bold;
                font-size: 16px;
            }
        }

    }
</style>