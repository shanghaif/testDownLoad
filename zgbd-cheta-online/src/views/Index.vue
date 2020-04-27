<template>
  <div class="layout">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './Header'

  export default {
    name: 'Index',
    components:{
      Header
    }
  }
</script>
