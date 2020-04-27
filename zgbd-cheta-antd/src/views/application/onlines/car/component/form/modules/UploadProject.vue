<template>
  <a-form-item  v-bind="item">
    <a-upload
      v-bind="attr"
      v-decorator="[
      bind.fieldName,bind.rules,
      {
      valuePropName: 'fileList',
      getValueFromEvent: normFile,
      }]"
      name="logo"
      action="/upload.do"
      list-type="picture"
    >
      <a-button> <a-icon type="upload" />{{context.title}}</a-button>
    </a-upload>
  </a-form-item>
</template>
<script>
  export default {

    data: () => ({
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
    }),
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'validate_other' });
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      },
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
  };

</script>

<style>
  #components-form-demo-validate-other .dropbox {
    height: 180px;
    line-height: 1.5;
  }
</style>