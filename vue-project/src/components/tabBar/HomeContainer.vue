<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in sildeList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in menuList" :key="item.url">
                <router-link :to="`/home${item.url}`">
                    <span :class="item.className"></span>
                    <div class="mui-media-body">{{ item.title }}</div>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    data: () => ({
      sildeList: [],
      menuList: []
    }),
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
      getMenus() {
        this.$http.get('api/getmenus')
          .then(result => {
            if (result.body.status === 0) {
              this.menuList = result.body.message
            } else {
              Toast('加载数据失败')
            }
          })
      }
    },
    created() {
      this.getSwipe()
      this.getMenus()
    }
  }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        .mui-table-view-cell {
            border: none;
            .mui-media-body{
                font-size: 13px;
            }
        }
    }

    [class^=icon-] {
        background-size: 60px 60px;
        display: inline-block;
        height: 60px;
        width: 60px;
    }

    .icon-news {
        background-image: url(../../icon/icon-menus/menu1.png);
    }

    .icon-share {
        background-image: url(../../icon/icon-menus/menu2.png);
    }

    .icon-buy {
        background-image: url(../../icon/icon-menus/menu3.png);
    }

    .icon-feedback {
        background-image: url(../../icon/icon-menus/menu4.png);
    }

    .icon-video {
        background-image: url(../../icon/icon-menus/menu5.png);
    }

    .icon-contact {
        background-image: url(../../icon/icon-menus/menu6.png);
    }
</style>