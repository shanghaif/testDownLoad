<template>
  <div>
    <a>提醒</a>
    <a-divider type="vertical" />
    <span>编辑</span>
  </div>
</template>

<script>
  export default {
    name: 'PlanOperation',
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