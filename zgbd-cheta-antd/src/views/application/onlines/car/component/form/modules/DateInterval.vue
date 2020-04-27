<template>
  <a-form-item v-bind="item">
    <a-range-picker v-decorator="[bind.fieldName, bind.rules]" />
  </a-form-item>
</template>

<script>
  export default {
    name: 'DateInterval',
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>