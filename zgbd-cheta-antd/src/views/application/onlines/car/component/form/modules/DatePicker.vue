<template>
  <a-form-item v-bind="item">
      <a-month-picker v-bind="attr" v-decorator="[bind.fieldName, bind.rules]" @change="onChange"  style="width: 100%" >
        <a-icon slot="suffixIcon" type="smile" />
      </a-month-picker>

  </a-form-item>
</template>
<script>
  export default {
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
    },
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
  };
</script>
