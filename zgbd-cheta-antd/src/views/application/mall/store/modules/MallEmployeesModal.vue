<template>
  <a-modal
    :title="title"
    :width="1000"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel">

    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <!-- 主表单区域 -->

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="微信头像"
          hasFeedback >
          <a-input v-decorator="['wechatImg', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="微信昵称"
          hasFeedback >
          <a-input v-decorator="['wechatName', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="所属门店"
          hasFeedback
        >
          <a-select placeholder="所属门店" v-decorator="['storeId', {}]">
            <a-select-option v-for="(store,storeindex) in storeList" :key="storeindex.toString()" :value="store.id">
              {{ store.storeName }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="店员姓名"
          hasFeedback >
          <a-input placeholder="请输入店员姓名" v-decorator="['name', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="手机号"
          hasFeedback >
          <a-input placeholder="请输入手机号" v-decorator="['telephone', {}]" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="状态"
          hasFeedback
        >
          <a-radio-group v-decorator="['status',{}]">
            <a-radio value="1">
              启用
            </a-radio>
            <a-radio value="0">
              禁用
            </a-radio>
          </a-radio-group>
        </a-form-item>



      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
  import { httpAction,getAction } from '@/api/manage'
  import pick from 'lodash.pick'
  import ATextarea from "ant-design-vue/es/input/TextArea";
  import AFormItem from "ant-design-vue/es/form/FormItem";

  export default {
    name: "MallEmployeesModal",
    components: {AFormItem, ATextarea},
    data () {
      return {
        title:"操作",
        visible: false,
        //店铺下拉数据
        storeList: [],
        orderMainModel: {},
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },

        confirmLoading: false,
        form: this.$form.createForm(this),
        validatorRules:{
        },
        url: {
          add: "/application/setting/employees/saveEmployees",
          edit: "/application/setting/employees/editEmployees",
          listStore: "/application/setting/store/getStore",
        }
      }
    },
    created () {
    },
    methods: {
      //店铺列表
      initialStoreList(){
        var params = "";
        getAction(this.url.listStore,params).then((res)=>{
          console.log(this.url.listStore)
          console.log(res)
          if(res.success){
            this.storeList = res.result;
          }else{
            console.log(res.message);
          }
        });
      },

      add () {
        this.edit({});
      },
      edit (record) {
        this.initialStoreList();
        this.form.resetFields();
        this.orderMainModel = Object.assign({}, record);

        this.visible = true;
        this.$nextTick(() => {
          this.form.setFieldsValue(pick(this.orderMainModel,'wechatImg','wechatName','storeId','name','telephone','status'))
        });
        console.log(this.orderMainModel)
      },
      close () {
        this.$emit('close');
        this.visible = false;
      },
      handleOk () {
        const that = this;
        // 触发表单验证
        this.form.validateFields((err, values) => {
          if (!err) {
            that.confirmLoading = true;
            let httpurl = '';
            let method = '';
            if(!this.orderMainModel.id){
              httpurl+=this.url.add;
              method = 'post';
            }else{
              httpurl+=this.url.edit;
              method = 'post';
            }
            let formData = Object.assign(this.orderMainModel, values);
            console.log(formData)
            httpAction(httpurl,formData,method).then((res)=>{
              console.log(res)
              if(res.success){
                that.$message.success(res.message);
                that.$emit('ok');
              }else{
                that.$message.warning(res.message);
              }
            }).finally(() => {
              that.confirmLoading = false;
              that.close();
            })

          }
        })
      },
      handleCancel () {
        this.close()
      },

    }
  }
</script>

<style scoped>
  .ant-btn {
    padding: 0 10px;
    margin-left: 3px;
  }
  .ant-form-item-control {
    line-height: 0px;
  }
  /** 主表单行间距 */
  .ant-form .ant-form-item {
    margin-bottom: 10px;
  }
  /** Tab页面行间距 */
  .ant-tabs-content .ant-form-item {
    margin-bottom: 0px;
  }
</style>