<template>
  <a-form-item v-bind="item">
    <a-select v-bind="attr" v-decorator="[bind.fieldName, bind.rules]" style="width: 100%" >
        <a-select-option v-for="option in options" :key="option.key">{{ option.value }}</a-select-option>
    </a-select>
  </a-form-item>
</template>

<script>
  export default {
    name: 'Select',
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      bind: {
        type: Object
      },
      options: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>