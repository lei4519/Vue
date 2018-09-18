<template>
    <div class="goodsdesc-container">
        <h3 class="title">{{ descList.title }}</h3>
        <hr>
        <div class="content" v-html="descList.content"></div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        descList: {}
      }
    },
    methods: {
      async getGoodsDesc() {
        let result = await this.$http.get(`api/goods/getdesc/${this.id}`)
        if (result.body.status === 0) {
          this.descList = result.body.message[0]
        } else {
          Toast('加载数据失败')
        }
      }
    },
    created() {
      this.getGoodsDesc()
    }
  }
</script>

<style lang="scss">
    .goodsdesc-container {
        padding: 4px;
        .title {
            text-align: center;
            color: #26a2ff;
            font-size: 16px;
            font-weight: bold;
            margin: 15px 0;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>