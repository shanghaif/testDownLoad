<template>
  <a-form-item v-bind="item">
    <a-date-picker v-bind="attr" @change="onChange"  v-decorator="[bind.fieldName, bind.rules]"  style="width: 100%" />
    <!--<a-range-picker v-bind="attr"  @change="onChange"/>-->
  </a-form-item>
</template>

<script>
  export default {
    name: 'Date',
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
    },
    methods: {
      onChange(){
        console.log("Date Component");
      }
    }
  }
</script>

<style scoped>

</style>