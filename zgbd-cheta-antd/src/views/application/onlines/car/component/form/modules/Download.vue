<template>
    <a-form-item v-bind="item">
      <a-upload
        v-decorator="[
          bind.fieldName,bind.rules,
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <a-button v-bind="attr">{{context.text}}<a-icon type="download" /></a-button>
      </a-upload>
    </a-form-item>
</template>

<script>
  export default {
    name: 'Download',
    props: {
      attr: {
        type: Object
      },
      item: {
        type: Object
      },
      context: {
        type: Object
      },
      bind: {
        type: Object
      },
    }
  }
</script>

<style scoped>

</style>