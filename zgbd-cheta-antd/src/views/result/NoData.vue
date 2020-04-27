<template>
    <div style="text-align: center;width: 100%">
      <i class="iconfont icon-wushuju" style="font-size: 50px;"></i>
      <br/>
      {{ description }}
    </div>
</template>

<script>
  export default {
    name: 'NoData',
    props: {
      description: {
        type:String,
        default:"暂无数据"
      }
    }
  }
</script>

<style scoped>

</style>