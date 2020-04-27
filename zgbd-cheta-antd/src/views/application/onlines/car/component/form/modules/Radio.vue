<template>
  <div class="dati">
     <a-form-item v-bind="item">
      <a-radio-group
        v-decorator="[bind.fieldName,bind.rules]"
        :defaultValue="bind.rules.initialValue"
        style="width: 100%;">
        <a-radio :value="check.key" v-for="check in options">{{ check.value }}</a-radio>
      </a-radio-group >
    </a-form-item>
  </div>
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
      },
      options: {
        type: Array
      }
    },
  };
</script>
<style scoped>
  #components-form-demo-validate-other .dropbox {
    height: 180px;
    line-height: 1.5;
  }
  .dati{
    height: 40px;
    line-height: 40px;
  }
  #app > div > div.element-row.ant-row-flex > div.element-col.top-nav-header-index.ant-col-15 > div.ant-col-24 > div > div > div > div > div:nth-child(2) > div > span:nth-child(2) > div > div > div.ant-col-14.ant-form-item-control-wrapper > div > span > div{
    margin: 10px 0;
  }
</style>