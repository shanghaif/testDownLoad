<template>
  <div class="layout" style="overflow: scroll">
    <Header/>
    <route-view></route-view>
  </div>
</template>

<script>
  import Header from './Header'
  import RouteView from "@/components/layouts/RouteView";

  export default {
    name: 'Index',
    components:{
      RouteView,
      Header
    }
  }
</script>
<style scoped>
  .layout{height: 100%;overflow-y: scroll;}
</style>