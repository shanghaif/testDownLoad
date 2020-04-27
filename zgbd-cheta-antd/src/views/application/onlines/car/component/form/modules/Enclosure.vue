<template>
  <a-form-item v-bind="item">
    <a href="#" v-bind="attr" v-decorator="[bind.fieldName ,bind.rules]">{{attr.text}}<a-icon type="download" /></a>
  </a-form-item>
</template>

<script>
  export default {
    name: 'Enclosure',
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