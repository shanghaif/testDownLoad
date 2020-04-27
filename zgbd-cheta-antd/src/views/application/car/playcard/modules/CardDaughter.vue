<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-row :gutter="24">
      <a-col :span="24">
        <div class="linshi">车牌登记</div>
      </a-col>
      <div style="padding: 0 60px">
      <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12" style="padding: 10px 25px">
        <!--车牌号-->
        <div style="float: right;">
        <div  class="attribute">车牌号码：</div>
        <div style="display: inline-block;width: 200px">
          <!--<a-input-->
            <!--v-decorator="[-->
          <!--'请输入车牌号',-->
          <!--{ rules: [{ required: true, message: '请输入车牌号!' }] }-->
        <!--]"-->
            <!--placeholder="请输入车牌号"-->
          <!--&gt;-->
            <a-input-group compact>
              <a-select defaultValue="正式" style="width: 75px">
                <a-select-option value="正式">正式</a-select-option>
                <a-select-option value="临时">临时</a-select-option>
              </a-select>
              <a-auto-complete
                :dataSource="dataSource"
                style="width: 125px"
                @change="handleChange"
                placeholder="请输入车牌号"
              />
            </a-input-group>
            <!--<a-select-->
              <!--slot="addonBefore"-->

              <!--v-decorator="[-->
            <!--'prefix',-->
            <!--{ initialValue: '正式' }-->
          <!--]"-->
              <!--style="width: 70px"-->
            <!--&gt;-->
              <!--<a-select-option value="正式">-->
                <!--正式-->
              <!--</a-select-option>-->
              <!--<a-select-option value="临时">-->
                <!--临时-->
              <!--</a-select-option>-->
            <!--</a-select>-->
          <!--</a-input>-->
        </div>
        </div>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12" style="padding: 10px 25px">
        <!--车辆所属-->
        <div style="float: right">
        <div class="attribute">车辆所属：</div>
        <div style="display: inline-block;width: 200px">
          <a-input
            v-decorator="[
          '请输入车辆所属',
          { rules: [{ required: true, message: '请输入车辆所属!' }] }
        ]"
            placeholder="请输入车辆所属"
          >
            </a-input>
        </div>
        </div>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12" style="padding: 10px 25px" >

        <!--期限-->
        <div style="float: right">
        <div  class="attribute">期限时间：</div>
          <div style="display: inline-block;width: 200px">
          <a-select
            v-decorator="[
          'select',
          {rules: [{ required: true, message: '请输入期限时间!' }]}
        ]"
            placeholder="请输入期限时间"
          >
            <a-select-option value="1个月">
              1个月
            </a-select-option>
            <a-select-option value="2个月">
              2个月
            </a-select-option>
            <a-select-option value="3个月">
              3个月
            </a-select-option>
          </a-select>
          </div>
        </div>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12" style="padding: 10px 25px" >
        <!--预计完成时间-->
        <div style="float: right">
        <div  class="attribute">预计完成：</div>
          <div style="display: inline-block;width: 200px">
          <a-date-picker
            v-decorator="['date-time-picker', config]"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            style="width: 100%"
          />
          </div>
        </div>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12" style="padding: 10px 25px" >

        <!--审批人-->
        <div style="float: right">
        <div  class="attribute">审批人：</div>
          <div style="display: inline-block;width: 200px">
          <a-input
            v-decorator="[
          '请输入审批人名称',
          { rules: [{ required: true, message: '请输入审批人名称!' }] }
        ]"
            placeholder="请输入审批人名称"
          >
          </a-input>
          </div>
        </div>
      </a-col>
      <a-col :span="12" :xs="24" :sm="24" :md="12" :xl="12" style="padding: 10px 25px">
        <!--抄送人-->
        <div style="float: right">
        <div class="attribute">抄送人：</div>
          <div style="display: inline-block;width: 200px">
          <a-input  placeholder="请输入抄送人名称"  />
          </div>
        </div>
      </a-col>
      <a-col :span="24" style="padding: 10px 25px">

        <!--备注-->
        <div style="float: right;width: 100%">
        <div class="attribute attributeleft">备注：</div>
          <div class="Remarks">
            <a-textarea placeholder="请输入备注事项" :rows="4"/>
          </div>
        </div>
      </a-col>
      </div>
      <!--<a-col :span="9" :lg="5" :sm="6" xs="18" style="float: right;margin: 15px 0px">-->
        <!--&lt;!&ndash;登录按钮&ndash;&gt;-->
        <!--<div>-->
        <!--<a-button-->
          <!--type="primary"-->
          <!--html-type="submit"-->
        <!--&gt;-->
          <!--确认-->
        <!--</a-button>-->
        <!--<a-button-->
          <!--style="left: 10px"-->
        <!--&gt;-->
          <!--取消-->
        <!--</a-button>-->
        <!--</div>-->

      <!--</a-col>-->
    </a-row>
  </a-form>
</template>

<script>
  const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',

  }, {
    value: 'jiangsu',
    label: 'Jiangsu',

  }];

  export default {
    data() {
      return {
        config: {
          rules: [{ type: 'object', required: true, message: '请输入预计完成时间!' }],
        },
        formLayout: 'horizontal',
        form: this.$form.createForm(this),
        confirmDirty: false,
        residences,
        autoCompleteResult: [],
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },

          },
          yj:{
            xs: { span: 24 },
            sm: { span: 7 },
          },
          cp:{
            xs: { span: 24 },
            sm: { span: 5 },
          },
          qx:{
            xs: { span: 24 },
            sm: { span: 4 },
      },
          aa:{
            xs: { span: 24 },
            sm: { span: 8 },
      },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
          },
          labelColll:{
            xs: { span: 24 },
            sm: { span: 2 },
          },
          wrapperColll:{
            xs: { span: 24 },
            sm: { span: 24 },
          }
        },
        tailFormItemLayout: {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        },
      };
    },
    beforeCreate() {
      this.form = this.$form.createForm(this);
    },
    methods: {

      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, fieldsValue) => {
          if (err) {
            return;
          }

          // Should format date value before submit.
          const rangeValue = fieldsValue['range-picker'];
          const rangeTimeValue = fieldsValue['range-time-picker'];
          const values = {
            ...fieldsValue,
            'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            'range-time-picker': [
              rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
              rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
            ],
            'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
          };
          console.log('Received values of form: ', values);
        });
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
        }

        this.autoCompleteResult = autoCompleteResult;
      },

    }}
</script>
<style>
  .linshi{
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:40px;
    border-bottom: 1px solid rgba(232,232,232,1);;
  }
  .ant-modal-body {
    padding: 20px 30px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
  }
  .attributeleft{
    margin-left: 32px;
  }
  .attribute{
    display: inline-block;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:40px;
  }
  .ant-modal-body {
    padding: 15px 25px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
  }
  .Remarks{
    display: inline-block;
    width: 87%;
    float: right;
  }
  @media screen and (max-width: 767px){
.Remarks{
  width: 200px;
}
    .attributeleft{
      margin-left: 30px;
    }

  }
</style>