<template>
  <div>
    <button class="approval">审批</button>
    <span class="details">详情</span>
  </div>
</template>

<script>
  export default {


    name: 'RegisterOperation',
    props: {
      record: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

<style scoped>
  .approval{
    margin: 0 5px;
  }
  .details{
    margin: 0 5px;
  }
</style>