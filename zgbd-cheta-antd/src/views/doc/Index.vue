<template>
  <div class="layout">
    <Header/>
    <Content/>
  </div>
</template>

<script>
  import Header from './Header'
  import Content from './Content'

  export default {
    name: 'Index',
    components:{
      Header, Content
    }
  }
</script>

<style scoped>
</style>