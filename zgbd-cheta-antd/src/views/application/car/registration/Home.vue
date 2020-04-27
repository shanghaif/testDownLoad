<template>
  <div class="cheta-analysis-top">
    <a-breadcrumb separator="/" class="cheta-bread">
      <a-breadcrumb-item @click.native="returnIndex" class="cheta-event">车辆调度</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $route.name }}</a-breadcrumb-item>
    </a-breadcrumb>
    <router-view></router-view>
  </div>
</template>
<script>
  import RouteView from "@/components/layouts/RouteView"
  export default {
    name: 'Home',
    components: {
      RouteView
    },
    methods:  {
      returnIndex () {
        this.$router.push({path:'/xingchediaodu'})
      }
  }
  }
</script>

<style lang="less" scoped>
  .cheta-analysis-top{height: calc(100vh - 75px);}
  .cheta-bread{height: 50px;line-height: 50px;padding: 0px 24px 0;border:1px solid rgba(232,232,232,1)}
</style>