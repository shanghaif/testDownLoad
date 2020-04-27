<template>
  <a-modal
    :title="title"
    v-model="editVisible"
    cancelText="关闭"
    width="40%"
    @ok="submitAction"
  >
    <a-spin :spinning="spinning">
      <a-form class="cheta-form" :form="form" :layout="formLayout" @submit="submitAction">
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="车牌号码"
          >
            <!--<a-input
              v-decorator="['carId', rules.carNumber]"
              placeholder="请输入车牌号" />-->

            <a-select
              v-decorator="['carId', rules.carNumber]"
              :value="value"
              placeholder="请输入车牌号"
              style="width: 100%"
              :defaultActiveFirstOption="false"
              :showArrow="false"
              :filterOption="true"
              @search="handleSearch"
              @change="handleChange"
              @focus="handleFocus"
              showSearch
              :notFoundContent="null"
              optionFilterProp="children"
            >
              <a-select-option v-for="d in carData" :key="d.id">{{d.registrationNo}}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="加油方式"
          >
            <a-input
              v-decorator="[cardNumber,isRequired()]"
              style="width: 100%"
              :placeholder="cardTypePlacehol"
            >
              <a-select
                slot="addonBefore"
                v-decorator="['cardType', { initialValue: '油卡' }]"
                style="width: 70px"
              >
                <a-select-option value="油卡">
                  油卡
                </a-select-option>
                <a-select-option value="现金">
                  现金
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="加油人"
          >
            <a-input
              v-decorator="['refuelby', rules.refuelBy]"
              placeholder="请输入加油人名称" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="油卡数量"
          >
            <a-input
              v-decorator="['oilCapacity', rules.count]"
              placeholder="请输入油卡数量" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="油卡金额"
          >
            <a-input
              v-decorator="['money']"
              placeholder="请输入油卡金额" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="加油站"
          >
            <a-input
              v-decorator="['stationName']"
              placeholder="请输入加油站名称" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="加油时间"
          >
            <!--<a-date-picker
              style="width: 238px"
              v-decorator="['createTime']"
              show-time
              format="YYYY-MM-DD HH:mm:ss"
            />-->
            <a-input
              disabled
              v-decorator="['createTime',]"
              placeholder="请输入加油时间" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="审批人"
          >
            <a-input
              v-decorator="['agent']"
              placeholder="请输入审批人名称" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            :label-col="{xs: { span: 24 },sm: { span: 3 }}"
            :wrapper-col="{xs: { span: 24 },sm: { span: 20 }}"
            label="备注事项"
          >
            <a-textarea
              v-decorator="['remark']"
              :rows="4"
              placeholder="请输入备注事项" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import pick from 'lodash.pick'
  import {getAction,postAction} from "@/api/manage";
  export default {
    name: 'EditModal',
    data(){
      return{
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
      formLayout: 'EditModal',
      title:"编辑记录",
      cardTypePlacehol : '请输入卡号',
      editVisible:false,
      spinning:false,
      item : {},
      carData : [],
      value: '',
      cardNumber: 'cardNumber',

      url:{
        edit:"/application/car/vehicle/refuel/insertOrUpdate",
        getData:"/application/car/account/getData",
      },
      config: {
        rules: [{ type: 'object', required: true, message: '请输入加油时间!' }],
      },
      rules : {
        carNumber : { rules: [{ required: true, message: '请输入车牌号!' }] },
        cardType : { rules: [{ required: true, message: '请输入卡号!' }] },
        cardTypeFalse : { rules: [{ required: false}] },
        refuelBy : { rules: [{ required: true, message: '请输入加油人!' }] },
        count : { rules: [{ required: true, message: '请输入油卡数量!' }] },
        money : { rules: [{ required: true, message: '请输入金额!' }] },
      },
      form: this.$form.createForm(this),
      }
    },
    methods:{
      initCar(){
        let that = this;
        getAction(that.url.getData,{pageNo:1,pageSize:100000}).then(res => {
          if (res.success) {
            that.carData = [];
            res.result.data.forEach(item =>{
              if(item.registrationNo && item.registrationNo != ''){
                that.carData.push({id:item.id,registrationNo:item.registrationNo})
              }
            })
          }
        })
      },
      handleSearch(value) {
        console.log(value);
      },
      handleChange(value) {
        console.log(value);
        this.value = value;
      },
      handleFocus() {
        console.log('focus');
      },
      filterOption(input, option) {
        return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
      isRequired(){
        var that = this;
        try{
          if(that.form.getFieldValue('cardType') == '油卡'){
            that.cardTypePlacehol = '请输入卡号'
            return that.rules.cardType;
          }else{
            that.cardTypePlacehol = '请输入报销单号'
            return that.rules.cardTypeFalse;
          }
        }catch (e) {
          return that.rules.cardType;
        }
      },
      showModal(item){
        let that = this;
        that.editVisible = true;
        that.spinning = true;
        that.initCar();
        that.item = item;
        let fieldsVal = pick(item,'cardType', 'carId','createTime',
          'refuelby', 'oilCapacity', 'money', 'stationName', 'agent','remark');
        this.$nextTick(() => {
          this.form.setFieldsValue(fieldsVal)
          if(item.cardType === '油卡'){
            this.form.setFieldsValue({cardNumber:item.cardNumber})
          }else{
            this.form.setFieldsValue({cardNumber:item.kingdeeNum})
          }
        });

        that.spinning = false;
      },
      submitAction(){
        var that = this;
        that.form.validateFields((err, values) => {
          if (!err) {
            values['id'] = that.item.id;
            if(values.cardType !== '油卡'){
              values['kingdeeNum'] = values.cardNumber;
              values['cardNumber'] = null;
            }
            values['id'] = that.item.id;
            postAction(that.url.edit, values).then(res => {
              if (res.success) {
                that.$message.success(res.message);
                that.$emit("refresh");
                that.editVisible = false
              }else {
                that.$message.error(res.message);
              }
            })
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>