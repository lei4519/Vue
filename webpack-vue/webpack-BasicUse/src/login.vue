<template>
    <div>
        <h1>login 组件=== .vue文件{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  data: () => {
      return {
        msg: 1233
      }
  },
  methods: {
    show () {
      console.log('call login in methods show()')
    }
  }
}
</script>

<style>

</style>