<template>
  <span>
    <a-button size="small">填单</a-button>
  </span>
</template>

<script>
    export default {
      name: "Button",
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