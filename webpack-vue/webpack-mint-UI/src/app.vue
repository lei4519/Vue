<template>
    <div>
        <h1>这是我们的APP组件</h1>

        <mt-button type="danger" size="small" @click="show">default</mt-button>

        <router-link to="/account">account</router-link>
        <router-link to="/goodsList">goodsList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    data: () => ({instance: null}),
    methods: {
      getList () {
        this.show()
        setTimeout(() => this.instance.close(), 3000)
      },
      show () {
        this.instance = Toast({
          message: '提示消息',
          position: 'bottom',
          duration: -1,
          iconClass: 'glyphicon glyphicon-heart',
          className: 'icon-heart'
        })
      }
    },
    created () {
      this.getList()
    }
  }
</script>

<style scoped>

</style>