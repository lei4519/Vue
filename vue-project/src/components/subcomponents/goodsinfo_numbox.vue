<template>
    <div class="mui-numbox" data-numbox-min="0" :data-numbox-max="count">
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input class="mui-numbox-input" type="number" value="1" ref="numbox" @change="countChanged">
        <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>

<script>
  import mui from '../../lib/mui/dist/js/mui.min.js'

  export default {
    props: ['count'],
    methods: {
      countChanged() {
        this.$emit('getCount', parseInt(this.$refs.numbox.value))
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