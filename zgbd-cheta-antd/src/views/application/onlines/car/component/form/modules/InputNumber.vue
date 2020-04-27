<template>
  <a-form-item v-bind="item">
    <a-input-number  v-bind="attr"  v-decorator="[bind.fieldName, bind.rules]"  :min="bind.minNumber" :max="bind.maxNumber" />
    <span class="ant-form-text">
        {{attr.text}}
      </span>
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
      }
    },
  };
</script>
<style scoped>
  #components-form-demo-validate-other .dropbox {
    height: 180px;
    line-height: 1.5;
  }
  .ant-form-text{
    margin-left: 5px;
  }

</style>