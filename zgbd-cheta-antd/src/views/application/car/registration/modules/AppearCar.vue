<template>
  <div>
    <a-modal
      title="出车登记"
      :width="720"
      :height="474"
      :visible="visible"
      @ok="handleOk"
      @cancel="close"
      okText="提交"
      cancelText="取消">
      <a-form :form="form" class="ant-advanced-search-form">
        <a-row :gutter="16">
          <a-col  v-bind="colLayout">
            <a-form-item label="车牌号：" v-bind="formItemLayout">
              <a-select
                showSearch
                placeholder="请选择车牌号"
                optionFilterProp="children"
                style="width: 200px"
                :filterOption="filterOption"
                v-decorator="['carId', {rules: [{required: true,message: '请输入车牌号!'}]}]"
              >
                <a-select-option :key="item.id" v-for="item in carData">{{ item.registrationNo}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="胎压检查：" v-bind="formItemLayout">
              <a-radio-group name="radioGroup" v-decorator="['dispatchTire', {initialValue: '正常',rules: [{ required: true,message: '请输入胎压检查!'}]}]">
                <a-radio value="正常">正常</a-radio>
                <a-radio value="异常">异常</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col  v-bind="colLayout">
            <a-form-item label="消耗指数：" v-bind="formItemLayout">
              <a-input
                v-decorator="['dispatchOil', {rules: [{required: true,message: '请输入消耗指数!'}]}]">
                <a-select defaultValue="油量(L)" slot="addonBefore">
                  <a-select-option value="油量(L)">油量(L)</a-select-option>
                  <a-select-option value="气量(L)">气量(L)</a-select-option>
                </a-select>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="启动检查：" v-bind="formItemLayout">
              <a-radio-group name="radioGroup" v-decorator="['dispatchLaunch',{initialValue: '正常',rules: [{ required: true,message: '请选择启动检查!'}]}]">
                <a-radio value="正常">正常</a-radio>
                <a-radio value="异常">异常</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="总里程(km)：" v-bind="formItemLayout">
              <a-input
                placeholder="请输入总里程"
                v-decorator="['dispatchMileage', {rules: [{required: true,message: '请输入总里程!'}]}]"/>
            </a-form-item>
          </a-col>
          <a-col v-bind="colLayout">
            <a-form-item label="刹车检查：" v-bind="formItemLayout">
              <a-radio-group name="radioGroup" v-decorator="['dispatchBrake', {initialValue: '正常',rules: [{ required: true,message: '请选择刹车检查!'}]}]">
                <a-radio value="正常">正常</a-radio>
                <a-radio value="异常">异常</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
  import { saveDispatch } from './api/api'
  import {getAction} from '@/api/manage'

  export default {
    name: 'backCar',
    data () {
      return {
        visible:false,
        model:{},
        radioList:[
          {key:1,value:"是"},
          {key:2,value:"否"}
        ],
        value:"正常",
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
          }
        },
        formItemLayout1: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 4 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
          }
        },
        colLayout: {
          span:12,
          xs:24,
          sm:24,
          md:12,
          xl:12,
        },
        form: this.$form.createForm(this),
        carData:[]
      }
    },
    created () {
      var $this = this
      getAction("/application/car/dispatch/dispathCar",{type:"DISPATCH"}).then(res=>{
        $this.carData = res.result
      })
    },
    methods: {
      appearCar (){
        this.clear()
        this.visible = true
      },
      handleOk () {
        this.form.validateFields((err, values) => {
          console.log(this.model,values)
          if (!err) {
            let formData = Object.assign(this.model, values);
            var $this = this;
            var param = {
              carId: formData.carId,
              dispatchTire: formData.dispatchTire,
              dispatchOil: formData.dispatchOil,
              dispatchLaunch: formData.dispatchLaunch,
              dispatchMileage: formData.dispatchMileage,
              dispatchBrake: formData.dispatchBrake,
            }
            saveDispatch(param).then(res => {
              if (res.success) {
                $this.$message.success(res.message);
                $this.$emit('reload')
              } else {
                $this.$message.warning(res.message);
              }
            }).finally(() => {
              $this.close();
            })
          }
        })

      },
      close () {
        this.visible = false
      },

      clear () {
        this.form.resetFields();

      },

    }
  }
</script>

<style scoped>

</style>