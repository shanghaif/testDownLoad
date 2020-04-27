<template>
  <a-form-item v-bind="item">
    <a-checkbox-group
      v-bind="attr"
      v-decorator="[bind.fieldName, bind.rules]"
      :defaultValue="bind.moren"
      style="width: 100%;">
      <a-checkbox :value="check.key" v-for="check in options">{{ check.value }}</a-checkbox>
    </a-checkbox-group>
  </a-form-item>
</template>

<script>
  export default {
    name: 'Check',
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