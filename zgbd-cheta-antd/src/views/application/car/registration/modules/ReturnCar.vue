<template>
    <div>
      <a-modal
        title="回车登记"
        :width="720"
        :height="474"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
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
              <a-form-item label="回车停放点：" v-bind="formItemLayout">
                <a-input
                  placeholder="请输入回车停放点"
                  v-decorator="['returnAddress', {rules: [{ required: true,message: '请输入回车停放点!'}]}]"/>
              </a-form-item>
            </a-col>
            <a-col  v-bind="colLayout">
              <a-form-item label="是否加油：" v-bind="formItemLayout">
                <a-radio-group name="radioGroup" v-decorator="['returnIsoil', {initialValue: '否',rules: [{ required: true,message: '你输入的登录密码不正确请检查!'}]}]">
                  <a-radio  value="是">是</a-radio>
                  <a-radio value="否">否</a-radio>
                </a-radio-group>
              </a-form-item>
            </a-col>
            <a-col v-bind="colLayout">
              <a-form-item label="剩余油量(L)：" v-bind="formItemLayout">
                <a-input
                  placeholder="请输入剩余油量"
                  v-decorator="['returnOil', {rules: [{ required: true,message: '请输入剩余油量!'}]}]"/>
              </a-form-item>
            </a-col>
            <a-col v-bind="colLayout">
              <a-form-item label="总里程(km)：" v-bind="formItemLayout">
                <a-input
                  placeholder="请输入总里程"
                  v-decorator="['returnMileage', {rules: [{required: true,message: '请输入总里程!'}]}]"/>
              </a-form-item>
            </a-col>
            <a-col v-bind="colLayout">
              <a-form-item label="行车里程：" v-bind="formItemLayout">
                <a-input
                  placeholder="请输入行车里程"
                  v-decorator="['returnRunmileage', {rules: [{required: true,message: '请输入行车里程!'}]}]"/>
              </a-form-item>
            </a-col>
            <a-col v-bind="colLayout">
              <a-form-item label="审批人：" v-bind="formItemLayout">
                <div>
                  <a-avatar v-if="audit" slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar" @click.native="auditAdd()"/>
                  <a-avatar v-else slot="avatar" icon="user" :title="this.audit.name" :src="this.audit.avatar" @click.native="auditAdd()"/>
                  <p>{{audit.name}}</p>
                </div>
                <User ref="audit" @getUser="getAudit"></User>
              </a-form-item>
            </a-col>
            <a-col v-bind="colLayout">
              <a-form-item label="抄送人：" v-bind="formItemLayout">
                <div>
                  <a-avatar v-if="copyto" slot="avatar" icon="user" :title="this.copyto.name" :src="this.copyto.avatar" @click.native="copytoAdd()"/>
                  <a-avatar v-else slot="avatar" icon="plus-circle" :title="this.copyto.name" :src="this.copyto.avatar" @click.native="copytoAdd()"/>
                  <p>{{copyto.name}}</p>
                </div>
                <User ref="copyto" @getUser="getCopyto"></User>
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="备注事项：" v-bind="formItemLayout1">
                <a-textarea
                  placeholder="请输入备注"
                  width="546px"
                  v-decorator="['description', {rules: [{required: true,message: '请输入备注!'}]}]"/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-modal>
    </div>
</template>

<script>
  import User from './childmodules/User'
  import pick from 'lodash.pick'
  import { saveReturn } from './api/api'
  import {getAction} from '@/api/manage'

  export default {
    name: 'backCar',
    components:{User},
    data () {
      return {
        visible:false,
        radioList:[
          {key:1,value:"是"},
          {key:2,value:"否"}
        ],
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
        carData:[],
        model:{},
        audit:{},
        copyto:{}
      }
    },
    created () {
      var $this = this
      getAction("/application/car/dispatch/dispathCar",{type:"OUT"}).then(res=>{
        $this.carData = res.result
      })
    },
    methods: {
      backCar (){
        this.clear()
        this.visible = true
      },
      handleOk () {
        this.form.validateFields((err, values) => {
          console.log(this.model,values)
          if (!err) {
            let formData = Object.assign(this.model, values);
            if (this.audit.userId && this.copyto.userId){
              var $this = this;
              var param = {
                carId: formData.carId,
                returnAddress: formData.returnAddress,
                returnIsoil: formData.returnIsoil,
                returnOil: formData.returnOil,
                returnMileage: formData.returnMileage,
                returnRunmileage: formData.returnRunmileage,
                auditId: this.audit.userId,
                copytoId: this.copyto.userId,
                description: formData.description,
              }
              saveReturn(param).then(res => {
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
            else{
              this.notification('error')
            }

          }
        })
      },
      notification(type) {
        this.$notification[type]({
          message: '提交失败',
          description:
            '审批人和抄送人不完善，请选择填写上去',

        })
      },
      handleCancel () {
        this.visible = false
      },

      close () {
        this.visible = false
      },
      auditAdd () {
        this.$refs.audit.doInvite()
      },
      copytoAdd () {
        this.$refs.copyto.doInvite()
      },
      getAudit (userObject) {
        // 获取用户
        this.audit = userObject;

      },
      getCopyto (userObject) {
        // 获取用户
        this.copyto = userObject;

      },
      clear () {
        this.form.resetFields();
        // this.model = {}
        // this.$nextTick(() => {
        //   this.form.setFieldsValue(pick(this.model,'returnAddress','returnIsoil','returnOil','returnMileage','returnRunmileage','description'))
        // })
        this.audit={}
        this.copyto={}
      }

    }
  }
</script>

<style  lang="less" scoped>
</style>