<template>
    <comment :id="$route.params.id"></comment>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
  export default {
    components: {
      comment
    }
  }
</script>

<style scoped>

</style>