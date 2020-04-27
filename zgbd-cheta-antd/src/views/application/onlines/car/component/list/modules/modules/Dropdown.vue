<template>
  <a-dropdown>
    <a-menu slot="overlay">
      <a-menu-item>
        续保
      </a-menu-item>
      <a-menu-item>
        增加保种
      </a-menu-item>
    </a-menu>
    <a href="javascript:;">
      编辑 <a-icon type="down" />
    </a>
  </a-dropdown>
</template>

<script>
    export default {
      name: "Dropdown",
      props: {
        record: {
          type: Object
        },
        bind:{
          type: Object
        }
      }
    }
</script>

<style scoped>

</style>