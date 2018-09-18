<template>
    <div class="mui-numbox" data-numbox-min="0" :data-numbox-max="count" style="height: 25px;">
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input class="mui-numbox-input" type="number" :value="num" ref="numbox" @change="countChanged">
        <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>

<script>
  import mui from '../../lib/mui/dist/js/mui.min.js'

  export default {
    props: ['count', 'num', 'id'],
    methods: {
      countChanged() {
        let newCount = this.$refs.numbox.value
        this.$store.commit('updateCartById', {id: parseInt(this.id), count: parseInt(newCount)})
      }
    },
    watch: {
      count(newVal) {
        mui('.mui-numbox').numbox().setOption('max', newVal)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>