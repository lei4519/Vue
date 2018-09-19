<template>
    <div>
        <!--vue serve 和 vue build 命令对单个 *.vue 文件进行快速原型开发-->
        <!--在 [开发环境] 模式下零配置为 .js 或 .vue 文件启动一个服务器-->
        <!--vue serve缺点就是它需要安装全局依赖，这使得它在不同机器上的一致性不能得到保证。因此这只适用于快速原型开发-->
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