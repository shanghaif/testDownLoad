<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="[$route.name]"
      :style="{ lineHeight: '64px' }"
      @click="menuClick"
    >
      <a-menu-item key="doc">文档</a-menu-item>
      <a-menu-item key="element">Cheta UI</a-menu-item>
      <a-menu-item key="system">设置</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
  export default {
    name: 'Header',
    created () {
      debugger;
    },
    methods: {
      menuClick (e) {
        this.$router.push(e.key);
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 165px;
    height: 64px;
    background: rgba(255, 255, 255, 0.2);
    margin-right: 20px;
    float: left;
    background: url("../assets/logo.svg") no-repeat 50% 50%;
  }
</style>
