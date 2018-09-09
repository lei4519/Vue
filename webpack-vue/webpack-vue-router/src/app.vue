<template>
    <div>
        <h1>这是我们的APP组件</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/goodsList">goodsList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>