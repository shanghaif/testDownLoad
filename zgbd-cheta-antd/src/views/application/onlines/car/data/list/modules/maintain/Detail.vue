<template>
    <a>详情</a>
</template>

<script>
  export default {
    name: 'Detail',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

<style scoped>

</style>