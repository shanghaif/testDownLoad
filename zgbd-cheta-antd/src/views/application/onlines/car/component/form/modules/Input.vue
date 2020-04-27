<template>
  <a-form-item v-bind="item">
    <!--{{bind.rules}}-->
    <a-input v-bind="attr" v-decorator="[bind.fieldName, bind.rules]"/>
  </a-form-item>
</template>

<script>
  export default {
    name: 'CInput',
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
    },
    data () {
      return {
      }
    },

  }
</script>

<style scoped>

</style>