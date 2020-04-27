<template>
  <div class="dati">
    <a-form-item v-bind="item">
      <a-radio-group
        v-decorator="[bind.fieldName,bind.rules]"
        :defaultValue="bind.rules.initialValue"
        @change="modelNumber"
        style="width: 100%;">
        <a-row>
          <a-col :span="10">
            <a-radio :value="check.key" v-for="check in options" style="display: inline-block;">{{ check.value }}</a-radio>
          </a-col>
          <a-col :span="12">
            <a-input :addonBefore="cardNo" v-decorator="[cardNumber,bind.rulesNO]" style="display: inline-block" :placeholder="cardNoPlace">
            </a-input>
          </a-col>
        </a-row>
      </a-radio-group >
    </a-form-item>
  </div>
</template>

<script>
  export default {
    data: () => ({
      rulesNo: { rules: [{required: true, message: '请输入车牌号!' }] },
      cardNoPlace : '请输入相应号码',
      cardNo : '油卡',
      value: 1,
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
      cardNumber : 'cardNumber'
    }),
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
    beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'register' });
    },
    methods: {
      modelNumber(e){
        var that = this
        if(e.target.value === '现金'){
          that.cardNo = '编号';
          that.cardNoPlace = '请输入编号';
          that.cardNumber = 'kingdeeNum';
          that.rulesNo = { rules: [{required: true, message: '请输入编号!' }] };
        }else{
          that.cardNumber = 'cardNumber';
          that.cardNo = '卡号';
          that.cardNoPlace = '请输入卡号';
          that.rulesNo = { rules: [{required: true, message: '请输入卡号!' }] };
        }
      },
      fieldName(){


      },
      normFile(e) {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      handleConfirmBlur(e) {
        const value = e.target.value;
        this.confirmDirty = this.confirmDirty || !!value;
      },
      compareToFirstPassword(rule, value, callback) {
        const form = this.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      },
      validateToNextPassword(rule, value, callback) {
        const form = this.form;
        if (value && this.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      },
      handleWebsiteChange(value) {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.autoCompleteResult = autoCompleteResult;
      },
    },
  };
</script>
<style scoped>
  #components-form-demo-validate-other .dropbox {
    height: 180px;
    line-height: 1.5;
  }

  .dati{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #E8E8E8;
  }
  #app > div > div.element-row.ant-row-flex > div.element-col.top-nav-header-index.ant-col-15 > div.ant-col-24 > div > div > div > div > div:nth-child(2) > div > span:nth-child(2) > div > div > div.ant-col-14.ant-form-item-control-wrapper > div > span > div{
    margin: 10px 0;
  }
</style>