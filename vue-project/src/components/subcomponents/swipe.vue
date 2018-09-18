<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in sildeList" :key="item.img">
            <img :src="item.img">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
  export default {
    props: ['sildeList']
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
</style>