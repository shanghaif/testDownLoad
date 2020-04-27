<template>
  <a-form-item v-bind="item">
    <a-switch v-bind="attr" v-decorator="[ bind.fieldName, bind.rules]"/>
  </a-form-item>
</template>

<script>
  export default {
    name: 'Switch',
    props: {
      item: {
        type: Object
      },
      attr: {
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