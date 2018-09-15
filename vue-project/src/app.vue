<template>
    <div class="app-container">
        <!-- Header -->
        <mt-header fixed title="Vue-project">
            <span slot="left" @click="goBack" v-show="backShowFlag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>

        <!-- router-view -->
        <transition>
            <router-view></router-view>
        </transition>

        <!-- TabBar -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-l" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-l" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-l" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-l" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
  export default {
    data: () => ({
      backShowFlag: false
    }),
    methods: {
      goBack() {
        this.$router.back()
      }
    },
    created() {
      this.backShowFlag = this.$route.path === '/home' ? false : true
    },
    watch: {
      "$route.path": function(newVal) {
        if (newVal === "/home") {
          this.backShowFlag = false;
        } else {
          this.backShowFlag = true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow: hidden;
        .mui-bar-tab{
            .mui-tab-item-l {
                display: table-cell;
                overflow: hidden;
                width: 1%;
                height: 50px;
                text-align: center;
                vertical-align: middle;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #929292;
                &.mui-active {
                    color: #007aff;
                }
                .mui-icon {
                    top: 3px;
                    width: 24px;
                    height: 24px;
                    padding-top: 0;
                    padding-bottom: 0;
                }
                .mui-icon~.mui-tab-label {
                    font-size: 11px;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
</style>