<template>
  <a-form-item v-bind="item">
    <a-upload-dragger
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      @change="handleChange"
      v-decorator="[
      bind.fieldName,bind.rules,
      {
      valuePropName: 'fileList',
      getValueFromEvent: normFile,
      }]"
    >
      <p class="ant-upload-drag-icon">
        <a-icon type="inbox" />
      </p>
      <p class="ant-upload-text">{{context.title}}</p>
      <p class="ant-upload-hint">
        {{context.desc}}
      </p>
    </a-upload-dragger>
  </a-form-item>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {
      item: {
        type: Object
      },
      attr: {
        type: Object
      },
      bind: {
        type: Object
      },
      context: {
        type: Object
      },
    },
    methods: {
      handleChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          this.$message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          this.$message.error(`${info.file.name} file upload failed.`);
        }
      },
    },
  };
</script>
