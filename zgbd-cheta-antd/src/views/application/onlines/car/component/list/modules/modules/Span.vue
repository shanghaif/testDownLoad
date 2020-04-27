<template>
  <span v-if="record">
    {{record.status}}
  </span>
  <span v-else>
    状态
  </span>
</template>

<script>
    export default {
      name: "Span",
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