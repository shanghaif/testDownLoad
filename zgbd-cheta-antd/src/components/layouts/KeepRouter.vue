<template>
  <keep-alive v-if="keepAlive">
    <router-view />
  </keep-alive>
  <router-view v-else />
</template>

<script>
  export default {
    name: 'KeepRouter',
    computed: {
      keepAlive () {
        return true
      }
    }
  }
</script>

<style scoped>

</style>