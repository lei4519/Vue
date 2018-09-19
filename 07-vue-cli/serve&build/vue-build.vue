<template>
    <!--在 [生产环境] 模式下零配置为 .js 或 .vue 文件启动一个服务器-->
    <div>
        {{ msg }}
    </div>
</template>

<script>
  export default {
    data: () => ({
      msg: 'hello'
    })
  }
</script>

<style scoped>

</style>